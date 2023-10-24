import React from 'react'
import trophy from './../assets/trophy.png'
import certificate from './../assets/certificate.png'
import AchievementRow1 from './AchievementRow1'
import AchievementRow2 from './AchievementRow2'

function Achievements() {
  return (
    <section className="h-full achievements flex flex-col cursor-default">
        <div className="flex justify-between w-full h-[15%]" id="Achievements" >
            <div>
                <div className="hor-stripe1 my-5 mx-2 h-[8px] md:w-[200px] w-[100px] " data-aos="fade-right" data-aos-duration="800" data-aos-delay="500"></div>
                <div className="ver-stripe1 mx-7 my-[-45px] w-[8px] md:h-[176px] h-[100px]"  data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"></div>
            </div>
            <div className="flex items-center gap-8 my-12 absolute left-[23%] sm:left-[29%]" data-aos="fade-up" data-aos-duration="800">
                <div><img src={trophy} alt="trophy" className="hidden lg:block w-20" /></div>
                <div className="achi-head lg:text-6xl md:text-5xl text-xl" >Achievements</div>
                <div><img src={certificate} alt="certificate" className="w-20 hidden lg:block" /></div>
            </div>
            <div>
                <div className="hor-stripe2 absolute top-5 right-3 h-[8px] md:w-[200px] w-[100px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="500"></div>
                <div className="ver-stripe2 absolute top-1 right-7 w-[8px] md:h-[176px] h-[100px]"  data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"></div>
            </div>
        </div>
        <div className="achi-hero mt-28 flex flex-col gap-36 mb-28">
            <AchievementRow1/>
            <AchievementRow2/>
        </div>
    </section>
  )
}

export default Achievements