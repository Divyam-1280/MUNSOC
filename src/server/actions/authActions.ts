"use server"

import { genericError, getUserAuth } from "../auth/utils";
import { updateUserSchema, users } from "../db/schema/auth";
import { eq } from "drizzle-orm";
import { db } from "../db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { deleteSessionTokenCookie, invalidateSession, validateRequest } from "../auth";

interface ActionResult {
  error: string;
}

export async function signOutAction(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await invalidateSession(session.id);

  await deleteSessionTokenCookie()
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
