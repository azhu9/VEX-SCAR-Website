import React from 'react';
import {useState, useEffect, useCallback} from 'react';
// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { IoIosArrowDropdown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Vex1 from '../assets/carousel/vex1.jpg';
import Vex2 from '../assets/carousel/vex2.jpg';
import Vex3 from '../assets/carousel/vex3.jpeg';
import Vex4 from '../assets/carousel/vex4.jpeg';

const Hero = () => {

  const slides = [Vex1,Vex2,Vex3,Vex4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [nextSlide]); // Include memoized `nextSlide` in the dependency array

/* The Navbar is 8vh tall and the hero is 92vh which makes them together the full height of the screens */

  return (
    <div className="text-white">
      <div className="z-0 relative group">
        <div className="-z-10 w-full h-full relative align-middle">
          <img className="-z-10 w-full h-[92vh] overflow-hidden object-cover opacity-40 relative align-middle" src={slides[currentIndex]} alt="/"/>
          <div className="z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
            <IoIosArrowDropleft onClick={prevSlide} size={40}/>
          </div>
          
          <div className="z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
            <IoIosArrowDropright onClick={nextSlide} size={40}/>
          </div>
        
          <div className="-z-10 title-text max-w-[800px] mt-[-96px] w-full h-[80%] mx-auto text-center flex flex-col justify-center">
              <p className="-z-10 text-[#b44417] font-bold py-1">RUTGERS IEEE VEXU DIVISION</p>
            <h1 className="-z-10 animate-fade md:text-7xl sm:text-6xl text-4xl font-bold">SCAR ROBOTICS</h1>
            <div>
            <a href="#info-section"><IoIosArrowDropdown className="animate-bounce z-10 mx-auto my-8 cursor-pointer" size={40}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero