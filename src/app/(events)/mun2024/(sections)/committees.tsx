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
    <section className="pt-14 max-lg:mb-11 sm:pt-28 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6">
      <BlurFade inView>
        <h1 className="text-5xl sm:text-6xl tracking-tighter">Engage with the 4 committees</h1>
      </BlurFade>
      <div className="flex max-lg:flex-col justify-center items-center lg:items-stretch lg:flex-wrap pt-10 lg:pt-20 gap-4 lg:gap-8">
        <BlurFade inView>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit pb-4">
            <Image className="size-24 sm:size-40" src={Disec} alt="DISEC" width={180} height={180} />
            <div className="flex flex-col items-start max-w-sm gap-2 mb-2">
              <div className={cn(bebas_neue.className, "text-4xl lg:text-5xl text-wrap text-center text-[#E7A72A] translate-y-2")}>DISEC</div>
              <p>Agenda: Prevention of Non-Conventional (Small Arms) Weapons in Conflict.</p>
            </div>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit pb-2">
            <Image className="size-24 sm:size-40 mt-2" src={Unodc} alt="UNODC" width={180} height={180} />
            <div className="flex flex-col items-start max-w-sm gap-2 mb-2">
              <div className={cn(bebas_neue.className, "text-4xl lg:text-5xl text-wrap text-center text-[#E7A72A] translate-y-2")}>UNODC</div>
              <p>Agenda: Analysing global crime, with a focus on assessing transnational organized crime threats.</p>
            </div>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.14}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border pl-3 rounded-xl w-fit pb-2 px-4">
            <Image className="size-24 sm:size-40" src={Unhrc} alt="UNHRC" width={180} height={180} />
            <div className="flex flex-col items-start max-w-sm gap-2 mb-2">
              <div className={cn(bebas_neue.className, "text-4xl lg:text-5xl text-wrap text-center text-[#E7A72A] translate-y-2")}>UNHRC</div>
              <p>Agenda: Deliberation on Human Rights Violation in Conflict and Post-Conflict Zones.</p>
            </div>
          </div>
        </BlurFade>
        <BlurFade inView delay={0.18}>
          <div className="flex items-center gap-x-4 bg-gradient-to-t from-black to-stone-800 border border-border px-3 rounded-xl w-fit">
            <Image className="size-24 sm:size-40 mt-2" src={Jcc} alt="JCC" width={180} height={180} />
            <div className="flex flex-col items-start max-w-sm gap-2 mb-4">
              <div className={cn(bebas_neue.className, "text-4xl lg:text-5xl text-wrap text-center text-[#E7A72A] translate-y-2")}>JCC</div>
              <p>Agenda: Deliberation upon CAA NRC (Freeze Date 25th December 2019).</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
