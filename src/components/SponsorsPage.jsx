import React from 'react'

import Nnl from '../assets/sponsors/nnl.png';
import Whimsy from '../assets/sponsors/whimsy.png';
import Reng from '../assets/sponsors/reng.png';
import Polymaker from "../assets/sponsors/polymaker.avif"
import Ieee from "../assets/sponsors/ieee-logo.webp"
import Solidworks from "../assets/sponsors/solidworks.svg" 

import tiers from "../assets/sponsors/tiers.png"

import { MdOutlineFileDownload } from "react-icons/md";

const sponsorData = [Nnl, Whimsy, Reng, Polymaker, Ieee, Solidworks];


const SponsorsPage = () => {
  return (
    <div className=" bg-white min-h-screen">
      <div
        className="text-center mb-16 mx-8 pt-32"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Thank you to our Sponsors and Partners
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are grateful for the support of our generous sponsors who make our club possible.
        </p>
      </div>

      <div className="max-w-5xl lg:mx-auto h-full sm:mx-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center">
          {sponsorData.map((data, index) => (
          <img className="p-8" key={index} src={data} alt=""/>
          ))}
        </div>
      </div>

      <div className=" max-w-3xl mx-auto mt-20 pb-8">
        <h1 className="text-4xl font-bold text-center my-4">Our Sponsorship Tiers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center">
          If you would like to sponsor Rutgers VEXU Robotics, contact us at vexu.rutgersieee@gmail.com
        </p>
       
          <img src={tiers} alt="" className="mx-auto"/>
          <a className="cursor-pointer" href="../assets/sponsors/Sponsorship-Packet.pdf" download="Sponsorship-Packet">
            <div className="bg-[#1a1919] hover:bg-gray-200 duration-400 hover:text-black text-white p-3 font-geist rounded-b-lg border-black border-1 ease-in-out">
              Download the Sponsorship Packet
              <MdOutlineFileDownload className="float-right hover:text-black" size={25}/>
            </div>
          </a>
      </div>
    </div>
  )
}

export default SponsorsPage