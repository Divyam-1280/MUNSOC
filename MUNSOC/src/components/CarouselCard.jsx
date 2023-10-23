import React from 'react'

function CarouselCard({Img,Name,Position}) {
  return (
    <div className="my-slide w-64 rounded-lg ml-3 flex-col border-2 border-black carou-card">
        <div className="mx-auto w-44 mt-4"><img src={Img} alt={Name} className="rounded-lg border-2 border-black" /></div>
        <div className="flex w-full justify-center items-center lg:text-xl text-lg mt-4 font-bold font-serif"><h1>{Name}</h1></div>
        <div className="flex w-full justify-center items-center text-md mt-4 font-semibold"><h1>{Position}</h1></div>
        <div className="flex w-full justify-center items-center text-lg font-semibold"><h1>MUNSOC</h1></div>
    </div>
  )
}

export default CarouselCard