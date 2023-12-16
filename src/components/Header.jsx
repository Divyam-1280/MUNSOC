import React, { useState } from "react";
import logo from "./../assets/MUNSOClogo.png";
import HeaderItem from "./../components/HeaderItem";
import dots from "./../assets/dots.png";
import "aos/dist/aos.css";
import Aos from "aos";

function Header() {
  Aos.init();

  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      id: "",
    },
    {
      name: "Achievements",
      id: "#Achievements",
    },
    {
      name: "Activity",
      id: "#Activity",
    },
    {
      name: "Documents",
      id: "#Documents",
    },
    {
      name: "About Us",
      id: "#About",
    },
    {
      name: "Contact",
      id: "#Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center p-5 absolute z-10 top-0 w-full">
      <div className="flex items-center gap-8 md:ml-8">
        <img
          src={logo}
          alt="logo"
          className="w-[50px] md:w-[80px] object-cover"
          data-aos="fade-right"
          data-aos-duration="2000"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <a href={item.id}>
              <HeaderItem name={item.name} />
            </a>
          ))}
        </div>
        <div className="flex gap-3 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <a href={item.id}>
                  <HeaderItem name={item.name} />
                </a>
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} />
            <img
              src={dots}
              alt="dots"
              className=" mix-blend-multiply w-7 translate-y-[-10px] bg-transparent"
            />
            {toggle ? (
              <div className="absolute mt-3 bg-black/60 rounded-md border-[1px] p-3 border-black/70 translate-x-[-85px]">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <a href={item.id}>
                        <HeaderItem name={item.name} />
                      </a>
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
