"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import OauthOptions from "./oauth-options"

const SignUpForm = () => {

  return (
    <div className="sm:min-w-96 max-w-xl">
      <Card className="border border-border max-sm:border-0 max-sm:shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <div className="px-6 pb-4">
          <OauthOptions />
        </div>
      </Card>
    </div>
  )
}

export default SignUpForm
