import React from "react";
import CarouselCard from "./CarouselCard";
import Mouni from "./../assets/Mouni.jpg";
import Chai from "./../assets/Chai.jpg";
import Varun from "./../assets/varun.jpg";
import Divyam from "./../assets/divyam.jpg";
import Priyanshu from "./../assets/priyanshu.jpg";
import Harish from "./../assets/harish2.jpg";

function Carousel() {
  return (
    <div className="mt-40 mb-40 my-carousel overflow-x-scroll flex">
      <CarouselCard
        Img={Mouni}
        Name={"Mouni Sanapala"}
        Position={"President"}
      />
      <CarouselCard
        Img={Chai}
        Name={"Chaitanya Raj"}
        Position={"Secretary General"}
      />
      <CarouselCard
        Img={Varun}
        Name={"Varun Srivastava"}
        Position={"Chargé D' Affairs"}
      />
      <CarouselCard
        Img={Divyam}
        Name={"Divyam Raj Singh"}
        Position={"Under Secretary"}
      />
      <CarouselCard
        Img={Priyanshu}
        Name={"Priyanshu Das"}
        Position={"Under Secretary"}
      />
      <CarouselCard
        Img={Harish}
        Name={"Harish Saharan"}
        Position={"Treasurer"}
      />
    </div>
  );
}

export default Carousel;
