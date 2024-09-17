import { cn } from "@/lib/utils";
import { Bebas_Neue, Manrope } from "next/font/google";
import Image from "next/image";
import NumberTicker from "./(components)/number-ticker";

const bebas_neue = Bebas_Neue({ weight: "400", subsets: ["latin"], adjustFontFallback: false });
const manrope = Manrope({ subsets: ["latin"], adjustFontFallback: false });

export default function Page() {
  return (
    <>
      <header className="w-full backdrop-blur-lg h-12 fixed top-0 z-50 text-white shadow-sm">
        <div className="px-6 pt-[.95rem] mx-auto w-full max-w-7xl flex justify-between">
          <span className="font-bold tracking-tight text-black dark:text-white hover:text-primary">MUNSOC</span>
          <span className="font-bold tracking-tight text-black dark:text-white hover:text-primary">#NITAMUN</span>
        </div>
      </header>
      <section className="h-dvh bg-[url(https://bestdelegate.com/wp-content/uploads/2017/02/operning-ceremony.jpg)]">
        <div className="h-full pt-14 sm:pt-28 flex flex-col justify-between items-center pb-6 backdrop-grayscale bg-background/65 bg-center">
          <div>
            <div className={cn(bebas_neue.className, "flex gap-x-14 flex-wrap justify-center max-sm:pt-12")}>
              <Image src="/MUNSOClogo.png" height={720} width={720} alt="MUNSOC Logo" className="size-36 scale-105 max-sm:mb-6 sm:hidden" />
              <div className="flex flex-nowrap gap-0 px-4">
                <h1 className="text-8xl sm:text-[18rem] text-primary">NITA</h1>
                <h1 className="text-8xl sm:text-[18rem] text-primary">MUN</h1>
              </div>
              <h1 className="text-8xl sm:text-[18rem] bg-clip-text bg-gradient-to-b from-white via-grey-200 to-gray-500 text-transparent">2.0</h1>
            </div>
            <p className="uppercase text-center px-6 sm:-translate-y-7 text-xl">
              Northeast&apos;s biggest online MUN conference
            </p>
          </div>
          <div className="max-lg:px-6 sm:grid grid-cols-2 max-w-[1320px] w-full">
            <div className="self-center">
              <p className="max-lg:hidden text-2xl sm:text-6xl tracking-tighter text-nowrap max-sm:text-center">Join the best of diplomatic minds.</p>
              <p className="text-xl sm:text-xl uppercase text-nowrap max-sm:text-center">December 13th - 14th @ Online</p>
            </div>
            <button className="bg-primary text-black w-fit max-sm:w-full max-sm:mt-3 max-sm:text-center px-3 py-2 sm:py-[30px] sm:px-12 max-sm:mx-auto uppercase text-xl justify-self-end">
              Registrations Open Soon
            </button>
          </div>
        </div>
      </section>
      <section className="pt-14 sm:pt-28 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6">
        <h1 className="text-5xl sm:text-6xl tracking-tighter">Engage with the 4 committees</h1>
        <div className="lg:flex lg:flex-wrap lg:justify-between lg:items-center pt-10">
          <p className={cn(bebas_neue.className, "text-8xl sm:text-[11rem] lg:text-[11rem] text-wrap text-center")}>DISEC</p>
          <p className={cn(bebas_neue.className, "text-8xl sm:text-[11rem] lg:text-[11rem] text-wrap text-center")}>UNODC</p>
          <p className={cn(bebas_neue.className, "text-8xl sm:text-[11rem] lg:text-[11rem] text-wrap text-center")}>UNHRC</p>
          <p className={cn(bebas_neue.className, "text-8xl sm:text-[11rem] lg:text-[11rem] text-wrap text-center")}>JCC</p>
        </div>
      </section>
      <section className="pt-14 sm:pt-20 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6">
        <h1 className="text-7xl lg:text-[11rem] tracking-tighter text-center">Prize pool of more than <b className="text-primary">₹35000</b></h1>
      </section>
      <section className="pt-14 sm:pt-20 h-dvh max-w-[1370px] w-full mx-auto max-lg:px-6 grid grid-rows-4">
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-5xl sm:text-6xl tracking-tighter font-bold">Previously on NITAMUN 1.0</h1>
          <p className="text-2xl sm:text-5xl">DISEC + WHO + UNHRC in a heated debate.</p>
        </div>
        <div className="row-span-2 bg-secondary animate-pulse">

        </div>
        <div className="text-5xl tracking-tighter py-16 justify-self-end"><NumberTicker value={100} className="font-bold tracking-tighter" />+ Participants from 28 States</div>
      </section>
      <section className="pt-14 sm:pt-20 max-w-[1370px] w-full mx-auto max-lg:px-6">
        <h1 className="text-3xl sm:text-6xl tracking-tighter text-nowrap">Sponsors</h1>
        <div className="grid grid-rows-2 w-full mt-8 gap-6">
          <div className="h-64 bg-secondary"></div>
          <div className="h-64 bg-secondary"></div>
        </div>
      </section>
      <footer className="py-20 text-center tracking-tighter text-xl">MUNSOC NITA @ 2024</footer>
    </>
  )
}
