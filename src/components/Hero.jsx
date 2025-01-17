import React from 'react';
import {useState} from 'react';
// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { IoIosArrowDropdown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Vex1 from '../assets/vex1.jpg';
import Vex2 from '../assets/vex2.jpg';
import Vex3 from '../assets/vex3.jpeg';
import Vex4 from '../assets/vex4.jpeg';




const Hero = () => {

  const slides = [Vex1,Vex2,Vex3,Vex4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

/* The Navbar is 8vh tall and the hero is 92vh which makes them together the full height of the screens */

  return (
    <div className="text-white">
      <div className="relative group">
        <div className="w-full h-full relative align-middle">
          <img className="w-full h-[92vh] overflow-hidden object-cover opacity-40 relative align-middle" src={slides[currentIndex]} alt="/"/>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
            <IoIosArrowDropleft onClick={prevSlide} size={40}/>
          </div>
          
          <div className="hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
            <IoIosArrowDropright onClick={nextSlide} size={40}/>
          </div>
        
          <div className="title-text max-w-[800px] mt-[-96px] w-full h-[80%] mx-auto text-center flex flex-col justify-center">
              <p className="text-[#b44417] font-bold py-1">RUTGERS IEEE VEXU DIVISION</p>
            <h1 className="animate-fade md:text-7xl sm:text-6xl text-4xl font-bold">SCAR ROBOTICS</h1>
            <div>
            <a href="#info-section"><IoIosArrowDropdown className="animate-bounce mx-auto my-4 cursor-pointer" size={40}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero