import React, { useState } from 'react'
import logo from './../assets/MUNSOClogo.png'
import HeaderItem from './../components/HeaderItem';
import dots from './../assets/dots.png'
import {HiDotsVertical} from "react-icons/hi";
import 'aos/dist/aos.css';
import Aos from 'aos';


function Header() {
  Aos.init();

  const [toggle, setToggle] = useState(false);
  const menu=[
    {
      name:'Home',
    },
    {
      name:'Achievements',
    },
    {
      name: 'Activity',
    },
    {
      name: 'Documents',
    },
    {
      name: 'About Us',
    },
    {
      name: 'Contact',
    },
  ]
  return (
    <div className="flex justify-between items-center p-5 absolute z-10 top-0 w-full">
      <div className="flex items-center gap-8">

      <img src={logo} alt="logo" className="w-[50px] md:w-[80px] object-cover" data-aos="fade-right" data-aos-duration="2000" />

      <div className="hidden md:flex gap-8">
      {menu.map((item)=>(
        <HeaderItem name={item.name}/>
      ))}
      </div>
      <div className="flex gap-3 md:hidden">
      {menu.map((item,index)=>index<3&&(
        <HeaderItem name={item.name}/>
      ))}
      <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={""}/>
        <img src={dots} alt="dots" className=" mix-blend-multiply w-7 translate-y-[-5px] bg-transparent" />
        {toggle? <div className="absolute mt-3 bg-black/60 rounded-md border-[1px] p-3 border-black/70 translate-x-[-85px]">
        {menu.map((item,index)=>index>2&&(
        <HeaderItem name={item.name}/>
      ))}
        </div>:null} 
      </div>
      </div>
      </div>
    </div>
  )
}

export default Header