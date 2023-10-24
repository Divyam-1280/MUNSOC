import React from 'react'
import Carousel from './Carousel'
import HouseSection from './HouseSection'

function About() {
  return (
    <div className="about h-full">
        <div className="about-head text-white lg:text-6xl text-4xl w-full h-24 flex items-center justify-center mt-6" data-aos="fade-up" data-aos-duration="800" id="About">
            <h1>About Us</h1>
        </div>
        <div>
            <Carousel/>
        </div>
        <div>
            <HouseSection/>
        </div>
    </div>
  )
}

export default About