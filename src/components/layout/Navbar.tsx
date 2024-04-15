import Link from "next/link";
import navbarItems from "../home/const/navbarItems";
import { cn } from "@/lib/utils";

export default function Navbar({ landingPage = false }: { landingPage?: boolean }) {
  return (
    <ul className={cn("flex gap-x-6 items-center text-sm text-muted-foreground", landingPage && "text-[#F4F4F5]")}>
      {navbarItems.map((item, idx) => (
        <Link key={idx} className=" font-semibold cursor-pointer hover:underline underline-offset-8 hover:text-yellow-400" href={item.href}>
          {item.name}
        </Link>
      ))}
    </ul>
  )
}
