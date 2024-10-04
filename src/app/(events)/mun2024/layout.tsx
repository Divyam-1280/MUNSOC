import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ReactLenis } from "./lenis";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NITAMUN 2.0",
  description: "Official website of Model United Nations Club of NIT Agartala, It is one of the most reputed MUN club in North East with various achievements under it's belt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background dark")}>
        <header className="w-full backdrop-blur-lg h-12 fixed top-0 z-50 text-white shadow-sm">
          <div className="px-6 pt-[.95rem] mx-auto w-full max-w-7xl flex justify-between">
            <Link href="/" className="font-bold tracking-tight text-black dark:text-white hover:text-primary">MUNSOC</Link>
            <span className="font-bold tracking-tight text-black dark:text-white hover:text-primary">#NITAMUN</span>
          </div>
        </header>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}

