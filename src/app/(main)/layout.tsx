import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/theme-provider"

const inter = Inter({ subsets: ["latin"], adjustFontFallback: false });

export const metadata: Metadata = {
  title: "MUNSOC",
  description: "Official website of Model United Nations Club of NIT Agartala, It is one of the most reputed MUN club in North East with various achievements under it's belt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
