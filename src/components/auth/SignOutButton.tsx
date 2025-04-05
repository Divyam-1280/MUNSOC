"use client"

import { signOutAction } from "@/server/actions/authActions"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom";

export default function SignOutButton() {
  const { pending } = useFormStatus();
  async function handleSignOut() {
    await signOutAction()
  }
  return (
    <form action={handleSignOut}>
      <Button variant="destructive" disabled={pending}>Sign Out</Button>
    </form>
  )
}
