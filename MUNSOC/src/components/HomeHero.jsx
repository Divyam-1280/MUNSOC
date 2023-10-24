import React from 'react'

function HomeHero() {
  return (
    <section className=" w-full absolute top-72 cursor-default">
    <section className="flex flex-col justify-center items-center text-white">
        <div className="head text-3xl md:text-7xl mb-11 md:px-11 px-3" data-aos="fade-up" data-aos-duration="2000">Welcome to <span className="hover:text-yellow-500 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">MUNSOC</span></div>
        <div className="cont px-11 md:text-xl text-sm">This is the official website of NIT Agartala's Model United Nations Club MUNSOC.</div>
        <div className="cont px-11 md:text-xl text-sm">Established in 2023, MUNSOC has quickly risen to fame by bagging achievements in various national MUNs.</div>
        <div className="cont px-11 md:text-xl text-sm">This growth surpasses any other MUN club in north east and this is just the beginning</div>
    </section>
    </section>
  )
}

export default HomeHero