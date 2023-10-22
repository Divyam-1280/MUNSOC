import React from 'react'
import ScrollCarousel from 'scroll-carousel';
import CarouselCard from './CarouselCard';
new ScrollCarousel(".my-carousel", {speed: 8, smartSpeed: true, autoplay: true});

function Carousel() {
  return (
    <div className="mt-40 h-72 mb-40 w-screen my-carousel flex gap-4">
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