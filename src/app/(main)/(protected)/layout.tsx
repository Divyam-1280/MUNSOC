import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { checkAuth } from "@/server/auth/utils";
import { Metadata } from "next";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth()

  return (
    <>
      <Header />
      <div className="mt-12">
        {children}
      </div>
      <Toaster />
    </>
  );
}
