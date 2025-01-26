import React from 'react'
import Bg1 from "../assets/backgrounds/bg1.jpg";
import Volunteer from "../assets/volunteer.jpg"
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';


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

    <div className="w-full bg-white py-16 px-4" id="info-section">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className="w-[500px] mx-auto my-4 rounded-lg" src={Volunteer} alt="/"></img>
              <div className="flex flex-col justify-center mx-4">
                  <p className="text-red-500 font-bold">RUTGERS IEEE VEXU DIVISION</p>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Need volunteers?</h1>
                  <p>Are you a team or organization hosting a VEX competition and in need of volunteers? Rutgers SCAR helps run several V5RC events around New Jersey with refereeing, scorekeeping, judging and more. Get in contact below.</p>
                  <Link to="/contact">
                    <button className="font-medium bg-red-800">Contact Us</button>
                  </Link>
                  </div>
          </div>
      </div>

    </>
  )
}

export default Volunteering