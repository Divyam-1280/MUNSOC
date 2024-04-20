import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { LuLayoutDashboard, LuLogIn } from "react-icons/lu"
import { getUserAuth } from "@/server/auth/utils"
import UserPfpBox from "../dashboard/user-pfp-box"
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import navbarItems from "../home/const/navbarItems";
import ThemeDropdown from "./ThemeDropdown"
import { cn } from "@/lib/utils"
import SignOutButton from "../auth/SignOutButton"
import { signOutAction } from "@/server/actions/authActions"
import { Button } from "../ui/button"

export default async function SheetMenu({ landingPage = false }: { landingPage?: boolean }) {
  const session = await getUserAuth()

  return (
    <>
      <Sheet>
        <SheetTrigger className={cn("lg:hidden p-2 border rounded-md dark:text-white", landingPage && "text-white border-white" || "text-black")}><HamburgerMenuIcon /></SheetTrigger>
        <SheetContent className="dark:bg-background">
          <SheetHeader className="-mt-4">
            <ThemeDropdown />
            <div className="flex gap-x-4 p-2 border border-foreground/30 rounded-md ">
              <div className="size-16 bg-secondary rounded-md overflow-clip">
                <Image src="/MUNSOClogo.png" width={64} height={64} alt="logo" className="scale-110" />
              </div>
              <div className="grid text-left items-center">
                <Link href="/" className="inline-block font-bold tracking-tight">MUNSOC</Link>
                <div className="flex gap-x-2 items-center">
                  <Link className="text-2xl" href="https://www.instagram.com/munsoc.nita/">
                    <FaInstagram />
                  </Link>
                  <Link className="text-2xl" href="https://www.instagram.com/munsoc.nita/">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </SheetHeader>
          <div className="flex flex-col justify-between h-[calc(100dvh-145px)]">
            <div className="flex flex-col divide-y divide-border mt-2">
              {navbarItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4 "><item.icon />{item.name}</Link>
              ))}
              {session.session?.user &&
                <Link href="/dashboard" className="hover:bg-secondary px-4 py-2 flex justify-start items-center gap-x-4 "><LuLayoutDashboard />Dashboard</Link>
              }
            </div>
            <div className=" space-y-4">
              {session.session?.user
                &&
                <>
                  <div className="border-t pt-4">
                    <Link href="/dashboard/profile">
                      <UserPfpBox />
                    </Link>
                  </div>
                  <form action={signOutAction}>
                    <Button variant="ghost" className="text-left flex justify-start items-center gap-x-4 w-full">
                      <LuLogIn />
                      Sign Out</Button>
                  </form>
                </>
                ||
                <div className="w-full">
                  <div className="flex justify-between gap-x-4 px-2 py-4 ">
                    <Link href="/sign-in" className="hover:bg-secondary text-left flex justify-start items-center gap-x-4 w-full  px-4 py-2">
                      <LuLogIn />
                      Sign In
                    </Link>
                  </div>
                </div>
              }
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
