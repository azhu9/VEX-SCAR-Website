import React from 'react';
import {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
// import {vex1} from '../assets/vex1.jpg'



const Hero = () => {

  const slides = [
    {
      url: '../assets/vex1.jpg',      
    },
    // {
    //   url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    // },
    // {
    //   url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    // },

    // {
    //   url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    // },
    // {
    //   url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    // },
  ];

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


  return (
    <div className="text-white">
      <div className=" h-screen w-full m-auto relative group">
        {/* <div style={{    backgroundImage: `url(${slides[currentIndex]?.url ? slides[currentIndex].url : ''})`,}} */}
        <div id="test"
        className="w-full h-full bg-center bg-cover duration-300 relative align-middle">
          <div className="hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>
          
          <div className="hidden z-10 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div>
        
          <div className="title-text max-w-[800px] mt-[-96px] w-full h-[80%] mx-auto text-center flex flex-col justify-center">
              <p className="text-[#b44417] font-bold py-1">RUTGERS IEEE VEXU DIVISION</p>
            <h1 className="animate-fade md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">SCAR ROBOTICS</h1>
            <p className="animate-fade md:text-5xl sm:text-4xl text-l font-bold">VEXU TEAM</p>
            <div>
                <button className="delay-500 animate-fades bg-red-500 font-bold text-black"> Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero