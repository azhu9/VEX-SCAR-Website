import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/scar.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

/* 
 - I am using <Link> for external pages since it does not refresh the page
 - The <a> tags are for internal links that scroll the page down which also do not refresh the pages
 - If <a> tags were used for external links they would refresh the entire page.
*/

  return (
    <div className="bg-black sticky top-0">
    <div className=' z-50 bg-black flex justify-between items-center h-[8vh] max-w-[1440px] mx-auto px-4 text-white'>
        {/* <Link to="/home"> */}
          <img src={Logo} className="lg:w-1/6 md:w-1/4 w-44 z-99"  alt="logo"/>
        {/* </Link> */}
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/about">About Us</Link></li>
            <li className='p-4'><Link to="/volunteering">Volunteering</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>


        </ul>
        <div onClick={handleNav} className="block md:hidden z-99">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size ={25}/>}
        </div>
        
        <div className={`${ !nav ? 'z-50 fixed left-0 top-0 w-[100%] h-full bg-gray-800 border-r border-gray-700 drop-shadow-xl ease-in-out duration-300' : 'fixed left-[-100%]'}`}>
        
        <div onClick={handleNav} className="block md:hidden h-[8vh] py-1 m-4 fixed top-0 right-0">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size ={25}/>}
        </div>
        <div className="flex items-center justify-center text-white text-xl h-full">
          <ul className="p-4 text-center space-y-8">
          <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/about">About Us</Link></li>
            <li className='p-4'><Link to="/volunteering">Volunteering</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>
          </ul>
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar