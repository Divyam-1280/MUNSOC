import Image from "next/image"
import UnstopBlue from "../assets/Unstop-Logo-Blue-Medium.png"

export default function PoweredBy() {
  return (
    <section className="py-14 sm:pt-20 max-w-[1370px] w-full mx-auto max-lg:px-6">
      <h1 className="text-3xl sm:text-6xl tracking-tighter text-nowrap">Powered by</h1>
      <div className="grid grid-rows-1 w-full mt-8 gap-6">
        <Image src={UnstopBlue} alt="unstop" width={640} height={360} className="h-36 w-auto place-self-center" />
      </div>
    </section>
  )
}
