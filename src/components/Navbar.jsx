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
    <div className='flex justify-between items-center h-[8vh] max-w-[1440px] mx-auto px-4 text-white'>
        {/* <Link to="/home"> */}
          <img src={Logo} className="lg:w-1/6 md:w-1/4 w-44 z-10"  alt="logo"/>
        {/* </Link> */}
        <ul className='hidden md:flex'>
            <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/about">About Us</Link></li>
            <li className='p-4'><Link to="/volunteering">Volunteering</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>


        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size ={25}/>}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-blue-700 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='p-4 my-20'>
            <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/about">About Us</Link></li>
            <li className='p-4'><Link to="/volunteering">Volunteering</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar