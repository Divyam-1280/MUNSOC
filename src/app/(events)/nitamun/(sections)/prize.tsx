import Image from "next/image"
import StarTrophy from "../assets/trophy-star.png"
import SparklesText from "@/components/ui/sparkles-text"
import BlurFade from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import { bebas_neue } from "../fonts"

export default function Prize() {
  const colors = { first: '#fff', second: '#ffa' }
  return (
    <section className="lg:pt-14 sm:pt-20 min-h-svh max-w-[1370px] w-full mx-auto max-lg:px-6 overflow-clip">
      <div className="flex flex-col items-center">
        <BlurFade inView>
          <h1 className="text-7xl lg:text-[10rem] tracking-tighter text-center">Prize pool of <b className="text-primary drop-shadow-xl shadow-primary">₹40000+</b></h1>
        </BlurFade>
        <BlurFade inView delay={0.14}>
          <div className="flex pt-5 lg:pt-16 flex-wrap justify-center gap-8 ">
            <div className="flex items-center gap-x-4 max-w-sm border border-border py-3 px-6 rounded-lg  bg-gradient-to-tl from-background to-stone-800">
              <Image src={StarTrophy} width={128} height={128} alt="trophy" className="" />
              <p className={cn(bebas_neue.className, "max-sm:text-2xl text-4xl text-wrap")}>
                Best Delegate<br />
                <span className="text-muted-foreground">₹5000</span>
              </p>
              <div className="absolute ">
                <SparklesText colors={colors} text="ㅤㅤ" />
              </div>
            </div>
            <div className="flex items-center gap-x-4 max-w-sm border border-border py-3 px-6 rounded-lg  bg-gradient-to-tl from-background to-stone-800">
              <Image src={StarTrophy} width={128} height={128} alt="trophy" className="" />
              <p className={cn(bebas_neue.className, "max-sm:text-2xl text-4xl text-wrap")}>
                High Commendation<br />
                <span className="text-muted-foreground">₹3000</span>
              </p>
              <div className="absolute ">
                <SparklesText colors={colors} text="ㅤㅤ" />
              </div>
            </div>
            <div className="flex items-center gap-x-4 max-w-sm border border-border py-3 px-6 rounded-lg  bg-gradient-to-tl from-background to-stone-800">
              <Image src={StarTrophy} width={128} height={128} alt="trophy" className="" />
              <p className={cn(bebas_neue.className, "max-sm:text-2xl text-4xl text-wrap")}>
                Special Mention<br />
                <span className="text-muted-foreground">₹1000</span>
              </p>
              <div className="absolute ">
                <SparklesText colors={colors} text="ㅤㅤ" />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
