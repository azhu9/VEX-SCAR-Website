import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/scar.png';

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-[8vh] max-w-[1440px] mx-auto px-4 text-white'>
        {/* <Logo className="lg:w-1/6 md:w-1/4 w-44 z-10" alt="/"/> */}
        <img src={Logo} className="lg:w-1/6 md:w-1/4 w-44 z-10" alt="logo"/>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Awards</li>
            <li className='p-4'>Sponsors</li>
            <li className='p-4'>Contact</li>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size ={25}/>}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-blue-700 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='p-4 my-20'>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4 border-b border-gray-600'>Awards</li>
              <li className='p-4 border-b border-gray-600'>Sponsors</li>
              <li className='p-4'>Contact</li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar