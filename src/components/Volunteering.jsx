import React from 'react'
import Bg1 from "../assets/backgrounds/bg1.jpg";
import { IoIosArrowDropdown } from "react-icons/io";

const Volunteering = () => {
  return (
    <>
    <div>
      <img className="w-full h-[92vh] overflow-hidden object-cover opacity-50 relative align-middle" src={Bg1} alt="/"/>

        <div className="animate-fade md:text-7xl sm:text-6xl text-4xl font-bold title-text text-white">
          Volunteering
          <a href="#section"><IoIosArrowDropdown className="animate-bounce mx-auto my-4 cursor-pointer" size={40}/></a>
        </div>
    </div>

    <div className="w-full h-[100px] bg-white">
    sadpfoiajsd
    </div>

    </>
  )
}

export default Volunteering