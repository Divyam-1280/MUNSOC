"use server"

import { cookies } from "next/headers";
import { GoogleTokens, OAuth2RequestError } from "arctic";
import { db } from "@/server/db"
import { eq } from "drizzle-orm";
import { users } from "@/server/db/schema/auth";
import { createSession, generateSessionToken, googleOauth, setSessionTokenCookie } from "@/server/auth";
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const storedCodeVerifier = cookies().get("google_oauth_code_verifier")?.value ?? null

  if (!code || !state || !storedState || !storedCodeVerifier || state !== storedState) {
    return new Response(null, {
      status: 400
    });
  }

  try {
    const tokens: GoogleTokens = await googleOauth.validateAuthorizationCode(code, storedCodeVerifier);
    const googleUserResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`
      }
    });
    const googleUser: GoogleUser = await googleUserResponse.json();

    const [existingUser] = await db.select().from(users).where(eq(users.email, googleUser.email))

    if (existingUser) {
      const token = generateSessionToken()
      const session = await createSession(token, existingUser.id);
      await setSessionTokenCookie(token, session.expiresAt);
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/"
        }
      });
    }

    const userId = uuidv4();

    try {
      await db.insert(users).values({
        id: userId,
        name: googleUser.name,
        email: googleUser.email,
      })
    } catch (e) {
      return new Response(null, {
        status: 500
      });
    }

    const token = generateSessionToken()
    const session = await createSession(token, userId);
    await setSessionTokenCookie(token, session.expiresAt)

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/"
      }
    });
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400
      });
    }
    return new Response(null, {
      status: 500
    });
  }
}

interface GoogleUser {
  sub: string;
  name: string;
  email: string;
}

