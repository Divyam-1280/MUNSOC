import Image from "next/image"
import IIESTShibpur from "../assets/partner-institute/iiest-shibpur.png"
import IIITLucknow from "../assets/partner-institute/iiit-lucknow.png"
import IIITNayaraipur from "../assets/partner-institute/iiit-nayaraipiur.png"
import IITBombay from "../assets/partner-institute/iit-bombay.png"
import IITDelhi from "../assets/partner-institute/iit-delhi.png"
import IITIndore from "../assets/partner-institute/iit-indore.png"
import NITPatna from "../assets/partner-institute/nit-patna.png"
import NITSilcharMUN from "../assets/partner-institute/nit-silchar-mun-logo-blue.png"
import NITTrichy from "../assets/partner-institute/nit-trichy.png"
import UnityMUN from "../assets/partner-institute/unity-mun.png"

export default function Partners() {
  return (
    <section className="py-14 sm:pt-20 max-w-[1370px] w-full mx-auto max-lg:px-6">
      <h1 className="text-3xl sm:text-6xl tracking-tighter text-nowrap">Partners</h1>
      <div className="flex flex-wrap justify-center items-center md:grid md:grid-cols-5 md:gap-x-5 md:gap-y-10 w-full mt-8 gap-10">
        <Image src={IIESTShibpur} alt="IIEST Shibpur" width={640} height={360} className="h-28 w-auto place-self-center" />
        <Image src={IIITLucknow} alt="IIIT Lucknow" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={IIITNayaraipur} alt="IIIT Nayaraipur" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={IITBombay} alt="IIT Bombay" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={IITDelhi} alt="IIT Dehi" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={IITIndore} alt="IIT Indore" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={NITPatna} alt="NIT Patna" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={NITSilcharMUN} alt="NIT Silchar MUN" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={NITTrichy} alt="NIT Trichy" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
        <Image src={UnityMUN} alt="Unity MUN" width={640} height={360} className="max-sm:h-20 h-28 w-auto place-self-center" />
      </div>
    </section>
  )
}
