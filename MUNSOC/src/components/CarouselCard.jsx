import React from 'react'
import Mouni from './../assets/Mouni.jpeg'

function CarouselCard() {
  return (
    <div className="my-slide h-full w-64 rounded-lg ml-3 flex-col border-2 border-black carou-card">
        <div className="mx-auto w-44 mt-4"><img src={Mouni} alt="Mouni" className="rounded-lg border-2 border-black" /></div>
        <div className="flex w-full justify-center items-center text-xl mt-4 font-bold font-serif"><h1>Mouni Sanapala</h1></div>
        <div className="flex w-full justify-center items-center text-lg mt-4 font-semibold"><h1>President</h1></div>
        <div className="flex w-full justify-center items-center text-lg font-semibold"><h1>MUNSOC</h1></div>
    </div>
  )
}

export default CarouselCard