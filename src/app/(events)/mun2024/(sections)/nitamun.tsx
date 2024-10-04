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
      <div className="py-14 mt-16 text-center">
        <BlurFade inView>
          <h1 className="text-5xl sm:text-6xl tracking-tighter font-bold lg:pl-11">So what&apos;s the wait for?</h1>
          <p className="text-3xl lg:text-4xl pt-11 tracking-tighter mb-6">Registration is open until <span className="text-primary font-bold">November 2nd EOD</span></p>
          <form target="_blank" action="https://unstop.com/conferences/nitamun-20-national-institute-of-technology-agartala-1171293?lb=elVMMz5n">
            <button type="submit" className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black w-fit max-sm:w-full max-sm:mt-3 max-sm:text-center px-3 py-2 sm:py-[30px] sm:px-12 max-sm:mx-auto uppercase text-xl justify-self-end rounded-2xl font-semibold backdrop-blur-xl hover:shadow-lg hover:shadow-stone-900 transition ease-in-out hover:scale-105 border-8 border-black/70">
              Register Now on Unstop
            </button>
          </form>
        </BlurFade>
      </div>
    </section>
  )
}
