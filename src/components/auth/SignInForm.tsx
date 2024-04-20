"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useFormState, useFormStatus } from "react-dom"
import { signInAction } from "@/server/actions/authActions"
import AuthFormError from "./AuthFormError"
import OauthOptions from "./oauth-options"

const formSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
})

const SignInForm = () => {
  const [state, formAction] = useFormState(signInAction, {
    error: "",
  })

  const { pending } = useFormStatus()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <div className="sm:min-w-96 max-w-xl">
      <Card className="border border-border max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            to continue to MUNSOC
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-4">
          <OauthOptions />
        </div>
      </Card>
    </div>
  )
}

export default SignInForm
