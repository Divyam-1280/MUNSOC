import React from 'react'
import ScrollCarousel from 'scroll-carousel';
import CarouselCard from './CarouselCard';
import Mouni from './../assets/Mouni.jpeg'
new ScrollCarousel(".my-carousel", {speed: 8, smartSpeed: true, autoplay: true});

function Carousel() {
  return (
    <div className="mt-40 mb-40 my-carousel overflow-x-scroll flex">
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
        <CarouselCard/>
        
    </div>
    
  )
}

export default Carousel