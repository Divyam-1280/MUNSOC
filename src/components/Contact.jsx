import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Contact() {
  return (
    <div className="contact w-full h-96">
        <div className="contact-head lg:text-6xl text-4xl w-full h-24 flex items-center justify-center sm:mt-5 cursor-default" data-aos="fade-up" data-aos-duration="800" id="Contact">Contact</div>
        <div className="flex w-full h-16 mt-14 justify-center items-center"> <div className="md:text-4xl text-xl font-semibold cursor-default"> Reach out to us on  </div><FontAwesomeIcon icon={faArrowRight} style={{color: "#030303",}} className="mt-2 md:pl-6 pl-2 md:text-5xl text-xl" /> 
        <a href="https://www.linkedin.com/company/munsoc-nita/" className="h-full pl-5 transition-all ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"><div className="md:text-5xl text-2xl md:pt-3 pt-6 pl-4 cursor-pointer"> <BsLinkedin/> </div></a>
        <a href="https://www.instagram.com/munsoc.nita/" className="h-full pl-5 transition-all ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"><div className="md:text-5xl md:pt-3 pt-6 text-2xl pl-4 cursor-pointer"><BsInstagram/></div></a>
        </div>
        <div className="sm:text-base absolute bottom-3 sm:right-8 right-4 footer text-sm flex cursor-default">Made with ❤️ by Divyam Raj Singh <a href="https://www.linkedin.com/in/divyam-raj-singh-a68813285/"><div className="text-xl pl-2 pt-[2px] hover:-translate-y-1 ease-in-out transition-all"><BsLinkedin/></div></a></div>
    </div>
  )
}

export default Contact