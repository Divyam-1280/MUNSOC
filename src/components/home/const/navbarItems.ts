import { ActivityLogIcon } from "@radix-ui/react-icons"
import { IoSparklesSharp } from "react-icons/io5"
import { LuAward, LuBookOpen, LuContact, LuHouse, LuStickyNote, LuUsers } from "react-icons/lu"

const navbarItems = [
  {
    href: "/",
    name: "Home",
    icon: LuHouse,
  },
  {
    href: "/#achievements",
    name: "Achievements",
    icon: LuAward,
  },
  {
    href: "/#activity",
    name: "Activity",
    icon: ActivityLogIcon,
  },
  {
    href: "/#documents",
    name: "Documents",
    icon: LuStickyNote,
  },
  {
    href: "/#about",
    name: "About Us",
    icon: LuUsers,
  },
  {
    href: "/#contact",
    name: "Contact",
    icon: LuContact,
  },
  {
    href: "/blog",
    name: "Blog",
    icon: LuBookOpen,
  },
  {
    href: "/mun2024",
    name: "NITAMUN",
    icon: IoSparklesSharp,
  }
]

export default navbarItems
