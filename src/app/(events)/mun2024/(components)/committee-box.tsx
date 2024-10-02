"use client"

import { cn } from "@/lib/utils"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { bebas_neue } from "../fonts"

export default function CommitteeBox({ name, image }: { name: string, image: StaticImport }) {
  return (
    <div className="flex items-center gap-x-4 border border-[#E7A72A] px-3 rounded-xl w-fit">
      <div className={cn(bebas_neue.className, "text-8xl lg:text-[11rem] text-wrap text-center text-[#E7A72A] translate-y-0")}>{name}</div>
      <Image className="size-24 sm:size-40" src={image} alt={name} width={180} height={180} />
    </div>
  )
}
