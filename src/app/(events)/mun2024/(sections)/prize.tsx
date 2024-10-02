import Image from "next/image"
import StarTrophy from "../assets/trophy-star.png"
import StarTrophy2 from "../assets/trophy-icon.png"
import SparklesText from "@/components/ui/sparkles-text"
import BlurFade from "@/components/ui/blur-fade"

export default function Prize() {
  const colors = { first: '#fff', second: '#ffa' }
  return (
    <section className="pt-14 sm:pt-20 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6 overflow-clip">
      <div className="flex flex-col items-center">
        <BlurFade inView>
          <h1 className="text-7xl lg:text-[10rem] tracking-tighter text-center">Prize pool of more than <b className="text-primary drop-shadow-xl shadow-primary">₹35000</b></h1>
        </BlurFade>
        <BlurFade inView delay={0.14}>
          <div className="flex pt-5">
            <Image src={StarTrophy} width={128} height={128} alt="trohpy" className="" />
            <Image src={StarTrophy2} width={128} height={128} alt="trohpy" className="" />
            <Image src={StarTrophy} width={128} height={128} alt="trohpy" className="" />
            <div className="absolute ">
              <SparklesText colors={colors} text="ㅤㅤㅤㅤㅤㅤ" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
