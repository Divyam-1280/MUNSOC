"use client"

import { Button } from "../ui/button"
import { useFormStatus } from "react-dom";

async function signOutAction() {
  throw new Error("Function not implemented.");
}

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
