import ThemeDropdown from "@/components/layout/ThemeDropdown";
import Link from "next/link";

import { checkAuth } from "@/server/auth/utils";
import Image from "next/image";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <header>
        <div className="max-w-7xl w-full mx-auto px-4 flex h-12 items-center space-x-4 justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="overflow-clip">
                <Image src="/MUNSOClogo.png" height={720} width={720} alt="MUNSOC Logo" className="scale-105 size-8 rounded-sm" />
              </div>
              <span className="inline-block font-bold">MUNSOC</span>
            </Link>
          </div>
          <ThemeDropdown />
        </div>
      </header>
      {children}
    </>
  );
}
