import Image from "next/image"
import UnstopBlue from "../assets/Unstop-Logo-Blue-Medium.png"
import Unistyl from "../assets/White.png"

export default function PoweredBy() {
  return (
    <section className="py-14 sm:pt-20 max-w-[1370px] w-full mx-auto max-lg:px-6">
      <h1 className="text-3xl sm:text-6xl tracking-tighter text-nowrap">Sponsors</h1>
      <div className="flex flex-wrap justify-center items-center w-full mt-8 gap-8">
        <Image src={UnstopBlue} alt="unstop" width={640} height={360} className="h-28 w-auto place-self-center" />
        <Image src={Unistyl} alt="unistyl" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
      </div>
    </section>
  )
}
