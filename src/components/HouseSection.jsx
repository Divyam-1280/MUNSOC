import React from "react";
import HouseCard from "./HouseCard";
import Gokhale from "./../assets/Gokhale.png";
import Jaishankar from "./../assets/Jaishankar.png";
import Bajpai from "./../assets/Bajpai.png";
import Menon from "./../assets/Menon.png";
function HouseSection() {
  return (
    <div className="">
      <div
        className="text-white lg:text-4xl text-3xl w-full flex justify-center items-center house-head underline-offset-4 cursor-default"
        data-aos="fade-up"
        data-aos-duration="800">
        House System
      </div>
      <div className="house-container h-full w-full mt-28 mb-12 lg:flex-row flex flex-col justify-around items-center gap-6">
        <HouseCard
          Img={Gokhale}
          Title={"Gokhale House"}
          Des={
            "Embodying aggressive diplomacy, named in honor of the esteemed diplomat Vijay Keshav Gokhale. The Gokhale house strives for perfection"
          }
          Points={"110"}
          id={"Gokhale"}
        />
        <HouseCard
          Img={Jaishankar}
          Title={"Jaishankar House"}
          Des={
            "Inspired by diplomat Subrahmanyam Jaishankar, fostering diplomacy, global understanding, and effective communication."
          }
          Points={"111 (Winner)"}
          id={"Jaishankar"}
        />
      </div>
      <div className="house-container h-full w-full mb-12 lg:flex-row flex flex-col justify-around items-center gap-6">
        <HouseCard
          Img={Bajpai}
          Title={"Bajpai House"}
          Des={
            "It is a tribute to Girija Shankar Bajpai, embodies diplomacy, grace and global awareness. Bajpai house has a legacy of excellence"
          }
          Points={"81"}
          id={"Bajpai"}
        />
        <HouseCard
          Img={Menon}
          Title={"Menon House"}
          Des={
            "Named in honour of Mr. Shivashankar Menon. This house advocates for more peaceful and prosperous world through diplomacy"
          }
          Points={"55"}
          id={"Menon"}
        />
      </div>
    </div>
  );
}

export default HouseSection;
