import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {ReactComponent as Logo} from '../assets/logo.svg';

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-white'>
        {/* <h1 className='w-full text-3xl font-bold text-[#b44417]'>SCAR</h1> */}
        <Logo className="lg:w-1/6 md:w-1/4 w-44"/>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Awards</li>
            <li className='p-4'>Sponsers</li>
            <li className='p-4'>Contact</li>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size ={25}/>}
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          {/* <h1 className='w-full text-3xl font-bold text-[#b44417] m-4'>SCAR</h1> */}
          <Logo className="w-44 h-24 px-4"/>
            <ul className='uppercase p-4'>
              <li className='p-4 border-b border-gray-600'>Home</li>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4 border-b border-gray-600'>Awards</li>
              <li className='p-4 border-b border-gray-600'>Sponsers</li>
              <li className='p-4'>Contact</li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar