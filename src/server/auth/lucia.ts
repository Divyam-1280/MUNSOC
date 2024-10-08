import { Lucia, Session, User } from "lucia"
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle"
import { db } from "@/server/db"
import { sessions, users } from "@/server/db/schema/auth"
import { cache } from "react"
import { cookies } from "next/headers"
import { GitHub, Google } from "arctic"
import { env } from "@/env"

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia,
    DatabaseUserAttributes: DatabaseUserAttributes,
  }
}

interface DatabaseUserAttributes {
  email: string,
  name: string,
}

export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users)

const googleRedirectUrl = `${env.LUCIA_AUTH_URL}/api/auth/callback/google`
const githubRedirectUrl = `${env.LUCIA_AUTH_URL}/api/auth/callback/github`

export const googleOauth = new Google(env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET, googleRedirectUrl)
// export const githubOauth = new GitHub(env.GITHUB_CLIENT_ID, env.GITHUB_CLIENT_SECRET)

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      name: attributes.name,
    }
  },
})

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return {
        user: null,
        session: null,
      }
    }

    const result = await lucia.validateSession(sessionId)
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        )
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        )
      }
    } catch { }
    return result
  }
)
