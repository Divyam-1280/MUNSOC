"use server"

import { Argon2id } from "oslo/password"
import { genericError, getUserAuth, setAuthCookie, validateAuthFormData, validateSignInFormData } from "../auth/utils";
import { lucia, validateRequest } from "../auth/lucia";
import { updateUserSchema, users } from "../db/schema/auth";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { redirect } from "next/navigation";
import { generateId } from "lucia";
import { revalidatePath } from "next/cache";

interface ActionResult {
  error: string;
}

export async function signInAction(
  _: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const { data, error } = validateSignInFormData(formData)
  if (error !== null) return { error }

  try {
    const [existingUser] = await db
      .select()
      .from(users)
      .where(eq(users.email, data.email.toLowerCase()))

    if (!existingUser || !existingUser.hashedPassword) {
      return {
        error: "Incorrect credentials!",
      }
    }

    if (existingUser.hashedPassword) {
      const validPassword = await new Argon2id().verify(existingUser.hashedPassword, data.password)

      if (!validPassword) {
        return {
          error: "Incorrect credentials!",
        }
      }
    }

    const session = await lucia.createSession(existingUser.id, {})
    const sessionCookie = lucia.createSessionCookie(session.id)
    setAuthCookie(sessionCookie)

    return redirect("/dashboard")
  } catch (e) {
    throw e
  }
}

export async function signUpAction(
  _: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const { data, error } = validateAuthFormData(formData)

  if (error !== null) return { error }

  const hashedPassword = await new Argon2id().hash(data.password)
  const userId = generateId(15)

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email.toLowerCase()))

  if (existingUser.length > 0) {
    return { error: "Email already in use!" }
  }

  try {
    await db.insert(users).values({
      id: userId,
      name: data.name,
      email: data.email,
      hashedPassword,
    })
  } catch (e) {
    return genericError
  }

  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)

  setAuthCookie(sessionCookie)

  return redirect("/dashboard")
}

export async function signOutAction(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  setAuthCookie(sessionCookie);
  redirect("/");
}

export async function updateUser(
  _: any,
  formData: FormData,
): Promise<ActionResult & { success?: boolean }> {
  const { session } = await getUserAuth();
  if (!session) return { error: "Unauthorised" };

  const name = formData.get("name") ?? undefined;
  const email = formData.get("email") ?? undefined;

  const result = updateUserSchema.safeParse({ name, email });

  if (!result.success) {
    const error = result.error.flatten().fieldErrors;
    if (error.name) return { error: "Invalid name - " + error.name[0] };
    if (error.email) return { error: "Invalid email - " + error.email[0] };
    return genericError;
  }

  try {
    await db
      .update(users)
      .set({ ...result.data })
      .where(eq(users.id, session.user.id));
    revalidatePath("/dashboard");
    return { success: true, error: "" };
  } catch (e) {
    return genericError;
  }
}
