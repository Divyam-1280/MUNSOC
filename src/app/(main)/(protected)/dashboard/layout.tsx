import Sidebar from "@/components/layout/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard • MUNSOC",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await checkAuth()

  return (
    <>
      <main className="sm:px-10 mx-auto flex justify-center gap-x-6">
        <Sidebar />
        {children}
      </main>
    </>
  );
}
