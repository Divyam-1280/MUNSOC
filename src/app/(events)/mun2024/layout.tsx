import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], adjustFontFallback: true });

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
        {children}
      </body>
    </html>
  );
}

