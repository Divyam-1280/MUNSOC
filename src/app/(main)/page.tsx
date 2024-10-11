import AchievementCard from "@/components/home/AchievementCard";
import Header from "@/components/layout/Header";
import Image from "next/image";
import achievements from "@/components/home/const/achievements";
import TimelineElement from "@/components/home/timeline-element";
import Timeline from "@/components/home/timeline";
import HeaderLanding from "@/components/layout/HeaderLanding";
import Documents from "@/components/home/Documents";
import about from "@/components/home/const/about";
import CarouselCard from "@/components/home/CarouselCard";
import houseDetails from "@/components/home/const/houseDetails";
import HouseCard from "@/components/home/HouseCard";
import { LuArrowRight } from "react-icons/lu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Transition from "@/components/motion/transition";

export default async function Home() {
  return (
    <>
      <HeaderLanding />
      <div className="text-white h-dvh z-10 absolute backdrop-brightness-[30%] w-full space-y-2 px-4">
        <Transition>
          <div className="mt-[25dvh] ">
            <div className="flex justify-center">
              <Image
                src="/MUNSOClogo.png"
                width={128}
                height={128}
                alt="logo"
                className="pb-3"
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold tracking-tighter text-center cursor-default">
              Welcome to <span className="hover:text-primary">MUNSOC</span>
            </h1>
          </div>
          <div className="text-[#F4F4F5] md:text-lg text-pretty text-center mt-3 cursor-default">
            This is the official website of NIT Agartala&apos;s Model United
            Nations Club MUNSOC.
            <br />
            Established in 2023, MUNSOC has quickly risen to fame by bagging
            achievements in various national MUNs.
            <br />
            This growth firmly establishes us as one of the elite MUN Clubs in
            the North East and we are just getting started
            <br />
            <form action="/nitamun">
              <button type="submit" className="bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-black w-fit max-sm:mt-3 max-sm:text-center mt-6 px-6 py-3 max-sm:mx-auto font-semibold justify-self-end rounded-full backdrop-blur-xl hover:shadow-lg hover:shadow-stone-900 transition ease-in-out hover:scale-105 border-8 border-black/70">
                Announcing NITAMUN 2.0
              </button>
            </form>
          </div>
        </Transition>
      </div>
      <main className="lg:text-center h-dvh relative">
        <video
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          className="h-screen w-full object-cover absolute -z-50">
          <source src="/Bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
      <section className="flex justify-center achievements" id="achievements">
        <div className="min-h-dvh pt-12 mb-28">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-center text-black">
            Achievements
          </h1>
          {/* imgSrc, venue, name, prize, committee, portfolio */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-y-32 gap-x-16 mt-16 mb-16">
            {achievements.map((item, idx) => (
              <div key={idx} className="h-48">
                <AchievementCard
                  imgSrc={item.imgSrc}
                  collegeName={item.collegeName}
                  name={item.studentName}
                  prize={item.prize}
                  committee={item.committee}
                  portfolio={item.portfolio}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="flex justify-center activity dark:bg-white"
        id="activity">
        <div className="min-h-dvh pt-12 mb-28">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-center mb-12 text-white">
            Activity
          </h1>
          <Timeline />
        </div>
      </section>
      <Documents />
      <section
        className="flex justify-center about dark:bg-white overflow-x-clip"
        id="about">
        <div className="min-h-dvh pt-12 mb-28">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-center text-white">
            About Us
          </h1>
          <div className="flex flex-wrap justify-center gap-y-12 gap-x-16 mt-16 mb-16 text-black">
            {about.map((item, idx) => (
              <div key={idx}>
                <CarouselCard {...item} />
              </div>
            ))}
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-center text-white">
            House System
          </h1>
          <div className="flex flex-wrap justify-center gap-y-12 gap-x-16 mt-16 mb-16 text-black">
            {houseDetails.map((item, idx) => (
              <div key={idx}>
                <HouseCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center contact" id="contact">
        <div className="text-black pt-12 mb-28">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-black tracking-tighter">
            Contact
          </h1>
          <div className="flex mt-16 justify-center gap-x-8 items-center flex-wrap">
            <span className="font-bold text-xl sm:text-4xl">
              Reach out to us on:
            </span>
            <div className="flex items-center gap-x-6">
              <Link
                href="https://www.linkedin.com/company/munsoc-nita/"
                className="hover:-translate-y-1 transition-all">
                <FaLinkedin className="md:size-12 size-10" />
              </Link>
              <Link
                href="https://www.instagram.com/munsoc.nita/"
                className="hover:-translate-y-1 transition-all">
                <FaInstagram className="md:size-12 size-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
