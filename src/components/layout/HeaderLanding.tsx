import Link from "next/link";
import Navbar from "./Navbar";
import { getUserAuth } from "@/server/auth/utils";
import SheetMenu from "./sheet-menu";
import ThemeDropdown from "./ThemeDropdown";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";

export default async function Header() {
  const session = await getUserAuth()
  return (
    <header className="h-12 fixed top-0 z-50 w-full backdrop-brightness-50 text-white shadow-sm">
      <div className="w-full border-b-[1px] border-border ">
        <div className="max-w-7xl w-full mx-auto p-4 flex h-12 items-center space-x-4 justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold tracking-tight text-white hover:text-primary">MUNSOC</span>
            </Link>
            <div className="flex max-lg:hidden items-center gap-6 justify-between">
              <Navbar landingPage />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-x-4">
              <Button variant="ghost" asChild className="px-2 m-0">
                {/*<Link href="/search" className="text-white">
                  <LuSearch size={20} />
                </Link>*/}
              </Button>
              <div className="max-lg:hidden">
                <ThemeDropdown landingPage />
              </div>
              <SheetMenu landingPage />
              {session?.session &&
                <Link
                  href="/dashboard"
                  className="text-sm max-lg:hidden font-medium text-[#F4F4F5]">
                  Dashboard
                </Link>
                ||
                <Link
                  href="/sign-in"
                  className="text-sm max-lg:hidden font-medium text-[#F4F4F5]">
                  Sign In
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

