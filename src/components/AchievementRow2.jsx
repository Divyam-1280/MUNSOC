import React from "react";
import AchievementCard from "./AchievementCard";
import Chai2 from "./../assets/Chai2.jpg";
import Bhu from "./../assets/bhuimg.jpg";
import Bombay from "./../assets/iitb.jpg";

function AchievementRow2() {
  return (
    <div className="flex sm:flex-row flex-col sm:h-48 sm:justify-evenly items-center max-sm:gap-20">
      <AchievementCard
        Img={Chai2}
        Clgname={"IIM Ahmedabad"}
        Prize={"Best Delegate"}
        Name={"Chaitanya Raj"}
        Committee={"Committee - DISEC"}
        Portfolio={"Portfolio - Pakistan"}
      />
      <AchievementCard
        Img={Bhu}
        Clgname={"IIT BHU"}
        Prize={"Special Mention and Verbal Mention "}
        Name={" Priyanshu Das and  Varun "}
        Committee={"Committee - G20 , UNFCCC"}
        Portfolio={"Portfolio - UAE, Denmark"}
      />
      <AchievementCard
        Img={Bombay}
        Clgname={"IIT Bombay"}
        Prize={"Special Mention"}
        Name={" Divyam and Varun "}
        Committee={"Committee - UNSC"}
        Portfolio={"Portfolio - Pakistan"}
      />
    </div>
  );
}

export default AchievementRow2;
