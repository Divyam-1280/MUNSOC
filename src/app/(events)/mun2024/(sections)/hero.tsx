import { cn } from "@/lib/utils";
import Image from "next/image";
import { bebas_neue } from "../fonts";
import BlurFade from "@/components/ui/blur-fade";
import Transition from "@/components/motion/transition";
import Munsoc from "../assets/MunsocMain.png"
import Bg from "../assets/nitamunbg.jpg"
import Unstop from "../assets/Unstop-Logo-White-Medium.png"

export default function Hero() {
  return (
    <section className="h-dvh">
      <Image src={Bg} width={1920} height={1080} alt="bg" className="z-0 absolute h-dvh object-cover object-left" />
      <div className="h-full pt-14 sm:pt-14 flex flex-col justify-between items-center pb-6 backdrop-grayscale bg-background/65 bg-center">
        <div>
          <Transition>
            <Image src={Munsoc} height={720} width={720} alt="MUNSOC Logo" className="size-36 scale-105 mx-auto lg:mb-10" />
          </Transition>
          <div className={cn(bebas_neue.className, "flex gap-x-14 flex-wrap justify-center max-sm:pt-12 lg:-mt-8")}>
            <BlurFade inView>
              <div className="flex flex-nowrap gap-0 px-4">
                <h1 className="text-8xl sm:text-[18rem] text-primary">NITA</h1>
                <h1 className="text-8xl sm:text-[18rem] text-primary">MUN</h1>
              </div>
            </BlurFade>
            <BlurFade delay={0.12} inView>
              <h1 className="text-8xl sm:text-[18rem] bg-clip-text bg-gradient-to-b from-white via-grey-200 to-gray-500 text-transparent">2.0</h1>
            </BlurFade>
          </div>
          <div className="text-center lg:text-right px-6 -translate-y-3 sm:-translate-y-11 text-sm flex justify-center lg:justify-end">
            <BlurFade delay={0.2}>
              <div className="flex items-center gap-3">
                Powered by <Image src={Unstop} alt="unstop" width={96} height={34} className="h-7 w-auto" />
              </div>
            </BlurFade>
          </div>
          <div className="uppercase text-center px-6 sm:-translate-y-16 text-xl">
            <BlurFade delay={0.2}>
              Northeast&apos;s biggest online MUN conference
            </BlurFade>
          </div>
        </div>
        <BlurFade delay={0.24}>
          <div className="max-lg:px-6 sm:grid grid-cols-2 max-w-[1320px] w-full">
            <div className="self-center">
              <p className="max-lg:hidden text-2xl sm:text-6xl tracking-tighter text-nowrap max-sm:text-center">Join the best of diplomatic minds.</p>
              <p className="text-xl sm:text-xl uppercase text-nowrap max-sm:text-center">December 13th - 14th @ Online</p>
            </div>
            <button className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black w-fit max-sm:w-full max-sm:mt-3 max-sm:text-center px-3 py-2 sm:py-[30px] sm:px-12 max-sm:mx-auto uppercase text-xl justify-self-end rounded-2xl font-semibold backdrop-blur-xl hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 border-8 border-black/70">
              Register Now on Unstop
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
