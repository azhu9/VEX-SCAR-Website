import React from 'react'
import { FaTrophy, FaGlobeAmericas } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";
import { BsTools } from "react-icons/bs";



const Awards = () => {
  return (
    <div className="bg-white w-full px-8 pb-8">
        <hr class="w-36 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-black"/>
        <div className=" h-full max-w-[1150px] mx-auto m-4" >
            <h1 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold py-4 my-5">Awards and Achievements</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="mx-auto p-4 rounded-lg">
                     <FaTrophy className="mx-auto m-4" size={80}/>
                    <p>Tournament Champions x2</p>
                </div>
                <div className="mx-auto p-4 rounded-lg">
                    <RiMedalLine className="mx-auto m-4" size={80}/>
                    <p>Excellence Award x2</p>
                </div>
                <div className="mx-auto p-4 rounded-lg">
                    <BsTools className="mx-auto m-4" size={80}/>
                    <p>Design Award x3</p>
                </div>
                <div className="mx-auto p-4 rounded-lg">
                    <FaGlobeAmericas className="mx-auto m-4" size={80}/>
                    <p>100% Worlds Qualifications</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards