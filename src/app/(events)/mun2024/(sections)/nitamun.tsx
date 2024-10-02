import Image from "next/image";
import NumberTicker from "../(components)/number-ticker";
import Nitamun1_1 from "../assets/Nitamun1_1.jpg"
import Nitamun1_2 from "../assets/Nitamun1_2.jpg"
import BlurFade from "@/components/ui/blur-fade";

export default function Nitamun() {
  return (
    <section className="pt-14 sm:pt-20 max-w-[1370px] w-full mx-auto max-lg:px-6">
      <div className="space-y-6 lg:space-y-10">
        <BlurFade inView>
          <h1 className="text-5xl sm:text-6xl tracking-tighter font-bold lg:pl-11">Previously on <span className="text-primary">NITAMUN 1.0</span></h1>
        </BlurFade>
      </div>
      <div className="pt-8 lg:pt-14 flex flex-col items-center gap-5">
        <div className="self-start">
          <BlurFade inView>
            <div className="text-3xl sm:text-5xl tracking-tighter lg:pl-11">Discussion among <b>DISEC, WHO and UNHRC.</b></div>
          </BlurFade>
        </div>
        <BlurFade inView delay={0.14}>
          <Image src={Nitamun1_1} width={1280} height={720} alt="nitamun 1.0" className="rounded-lg" />
        </BlurFade>
        <div className="self-end">
          <BlurFade inView>
            <div className="pt-2 sm:pt-8 text-3xl sm:text-5xl tracking-tighter lg:pr-11"><b>100+</b> Participants from <strong>28 States</strong></div>
          </BlurFade>
        </div>
        <BlurFade inView delay={0.14}>
          <Image src={Nitamun1_2} width={1280} height={720} alt="nitamun 1.0" />
        </BlurFade>
      </div>
    </section>
  )
}
