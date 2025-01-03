import React from 'react'

import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
}
from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-red-800">
        <div className="max-w-[1150px]  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div className="flex my-6 justify-between items-center">
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer