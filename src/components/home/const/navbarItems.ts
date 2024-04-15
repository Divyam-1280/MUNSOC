import { ActivityLogIcon } from "@radix-ui/react-icons"
import { FaHome } from "react-icons/fa"
import { LuAward, LuBook, LuBookOpen, LuContact, LuHome, LuStickyNote, LuUsers } from "react-icons/lu"

const navbarItems = [
  {
    href: "/",
    name: "Home",
    icon: LuHome,
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
]

export default navbarItems
