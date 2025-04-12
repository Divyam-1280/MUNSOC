import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs • MUNSOC",
  description: "Official website of Model United Nations Club of NIT Agartala, It is one of the most reputed MUN club in North East with various achievements under it's belt",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-12">
        {children}
      </div>
    </>
  );
}
