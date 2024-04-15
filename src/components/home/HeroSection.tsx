"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <>
      <div className="text-white h-dvh z-10 absolute backdrop-brightness-[30%] w-full space-y-2 px-4">
        <div className="mt-[25dvh] ">
          <div className="flex justify-center">
            <Image src="/MUNSOClogo.png" width={128} height={128} alt="logo" className="pb-3" />
          </div>
          <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 1.5, duration: 5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold tracking-tighter text-center">Welcome to <span className="hover:text-primary">MUNSOC</span></h1>
          </motion.div>
        </div>
        <p className="text-[#F4F4F5] md:text-lg text-pretty text-center">
          This is the official website of NIT Agartala&apos;s Model United Nations Club MUNSOC.<br />
          Established in 2023, MUNSOC has quickly risen to fame by bagging achievements in various national MUNs.<br />
          This growth firmly establishes us as one of the elite MUN Clubs in the North East and we are just getting started
        </p>
      </div>
      <main className="lg:text-center h-dvh relative">
        <video
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          className="h-screen w-full object-cover absolute -z-50"
        >
          <source src='/Bgvid.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  )
}
