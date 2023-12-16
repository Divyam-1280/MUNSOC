import React from "react";
import trophy from "./../assets/trophy.png";
import certificate from "./../assets/certificate.png";
import AchievementRow1 from "./AchievementRow1";
import AchievementRow2 from "./AchievementRow2";

function Achievements() {
  return (
    <section className="h-full achievements flex flex-col cursor-default">
      <div className="flex justify-between w-full h-[150px]" id="Achievements">
        <div>
          <div
            className="hor-stripe1 mt-4 ml-2 h-[8px] md:w-[200px] w-[100px] "
            data-aos="fade-right"
            data-aos-duration="800"></div>
          <div
            className="ver-stripe1 ml-6 -mt-5 w-[8px] md:h-[176px] h-[100px]"
            data-aos="fade-up"
            data-aos-duration="800"></div>
        </div>
        <div className="flex items-center justify-center gap-8 max-md:-translate-x-8">
          <div>
            <img src={trophy} alt="trophy" className="hidden lg:block w-20" />
          </div>
          <div className="achi-head lg:text-6xl md:text-5xl text-xl ">
            Achievements
          </div>
          <div>
            <img
              src={certificate}
              alt="certificate"
              className="w-20 hidden lg:block"
            />
          </div>
        </div>
        <div>
          <div
            className="hor-stripe2 mt-4 md:mr-2 -ml-16  h-[8px] md:w-[200px] w-[100px]"
            data-aos="fade-left"
            data-aos-duration="800"></div>
          <div
            className="ver-stripe2 md:ml-28 ml-4 -mt-5 w-[8px] md:h-[176px] h-[100px]"
            data-aos="fade-up"
            data-aos-duration="800"></div>
        </div>
      </div>
      <div className="achi-hero mt-28 flex flex-col gap-36 mb-28">
        <AchievementRow1 />
        <AchievementRow2 />
      </div>
    </section>
  );
}

export default Achievements;
