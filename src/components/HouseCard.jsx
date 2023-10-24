import React from 'react'
function HouseCard({Img,Title,Des,Points,id}) {
  return (
    <div className="house-card h-[300px] sm:w-[550px] w-[300px] bg-black bg-opacity-70 border-white border rounded-2xl flex hover:scale-105 transition-all duration-300 ease-in-out hover:border-4">
        <div className="w-1/2 my-auto -ml-4"><img src={Img} alt={Title}/></div>
        <div className="flex flex-col w-1/2 text-white">
            <div className="flex justify-center items-center sm:text-3xl text-lg pt-3 " id={id}>{Title}</div>
            <div className="flex justify-center items-center sm:text-xl text-sm sm:pt-8 pt-6">{Des}</div>
            <div className="flex justify-center items-center sm:text-lg text-sm pt-6">Current Points: {Points}</div>
        </div>
    </div>
  )
}

export default HouseCard