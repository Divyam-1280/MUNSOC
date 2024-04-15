"use client"

import { useTheme } from "next-themes"
import { LuMoonStar, LuSun } from "react-icons/lu";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";

const ThemeDropdown = ({ landingPage = false }: { landingPage?: boolean }) => {
  const { setTheme } = useTheme()


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className={cn(landingPage && "hover:bg-transparent" || "")}
        >
          <LuSun className={cn("size-5 scale-100 transition-all dark:scale-0", landingPage && "text-white" || "text-black")} />
          <LuMoonStar className="absolute size-5 scale-0 transition-all dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn(landingPage && "bg-stone-400/25 text-white")}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeDropdown
