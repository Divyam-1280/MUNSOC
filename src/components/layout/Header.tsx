import Link from "next/link";
import Navbar from "./Navbar";
import { getUserAuth } from "@/server/auth/utils";
import SheetMenu from "./sheet-menu";
import ThemeDropdown from "./ThemeDropdown";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import Image from "next/image";

export default async function Header() {
  const session = await getUserAuth()
  return (
    <header className="w-full backdrop-blur-lg border-border border-b-[1px] h-12 fixed top-0 z-50 text-white shadow-sm">
      <div className="max-w-7xl w-full mx-auto p-4 flex h-12 items-center space-x-4 justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-x-2">
            <div className="overflow-clip">
              <Image src="/MUNSOClogo.png" height={720} width={720} alt="MUNSOC Logo" className="size-8 rounded-sm scale-105" />
            </div>
            <span className="inline-block font-bold tracking-tight text-black dark:text-white hover:text-primary">MUNSOC</span>
          </Link>
          <div className="flex max-lg:hidden items-center gap-6 justify-between">
            <Navbar />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-x-4">
            <Button variant="ghost" asChild className="px-2 m-0">
              {/*<Link href="/search" className="text-black dark:text-white">
                  <LuSearch size={20} />
                </Link>*/}
            </Button>
            <div className="max-lg:hidden">
              <ThemeDropdown />
            </div>
            <SheetMenu />
            {session?.session &&
              <Link
                href="/dashboard"
                className="text-sm max-lg:hidden font-medium text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              ||
              <Link
                href="/sign-in"
                className="text-sm max-lg:hidden font-medium text-muted-foreground hover:text-foreground">
                Sign In
              </Link>
            }
          </div>
        </div>
      </div>
    </header>
  )
}
