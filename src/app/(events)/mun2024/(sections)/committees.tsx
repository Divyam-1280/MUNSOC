import CommitteeBox from "../(components)/committee-box";

import Disec from "../assets/DISECLogo.png"
import Unodc from "../assets/UNODCLogo.png"
import Unhrc from "../assets/UNHRCLogo.png"
import Jcc from "../assets/JCCLogo.png"
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { bebas_neue } from "../fonts";

export default function Committees() {
  return (
    <section className="pt-14 sm:pt-28 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6">
      <h1 className="text-5xl sm:text-6xl tracking-tighter">Engage with the 4 committees</h1>
      <div className="lg:flex lg:flex-wrap lg:justify-between lg:items-center pt-20 space-y-6">
        <BlurFade inView>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit pb-2 hover:shadow-white">
            <div className={cn(bebas_neue.className, "text-8xl lg:text-[11rem] text-wrap text-center text-[#E7A72A] translate-y-2")}>DISEC</div>
            <Image className="size-24 sm:size-40" src={Disec} alt="DISEC" width={180} height={180} />
          </div>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit pb-2">
            <div className={cn(bebas_neue.className, "text-8xl lg:text-[11rem] text-wrap text-center text-[#E7A72A] translate-y-2")}>UNODC</div>
            <Image className="size-24 sm:size-40 mt-2" src={Unodc} alt="UNODC" width={180} height={180} />
          </div>
        </BlurFade>
        <BlurFade inView delay={0.14}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border pl-3 rounded-xl w-fit pb-2">
            <div className={cn(bebas_neue.className, "text-8xl lg:text-[11rem] text-wrap text-center text-[#E7A72A] translate-y-2")}>UNHRC</div>
            <Image className="size-24 sm:size-40" src={Unhrc} alt="UNHRC" width={180} height={180} />
          </div>
        </BlurFade>
        <BlurFade inView delay={0.18}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit">
            <div className={cn(bebas_neue.className, "text-8xl lg:text-[11rem] text-wrap text-center text-[#E7A72A]")}>JCC</div>
            <Image className="size-24 sm:size-40 mt-2" src={Jcc} alt="JCC" width={180} height={180} />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
