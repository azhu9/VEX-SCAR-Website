import React from 'react'
import Nnl from '../assets/sponsors/nnl.png';
import Whimsy from '../assets/sponsors/whimsy.png';
import Reng from '../assets/sponsors/reng.png';

import Lockheed from "../assets/companies/Lockheed.png";
import Merck from "../assets/companies/Merck.png";
import Boring from "../assets/companies/Boring-Company.png";
import Northrop from "../assets/companies/Northrop.png";
import Deutsche from "../assets/companies/Deutsche-Bank.png";
import Epic from "../assets/companies/Epic.png";
import Uwash from "../assets/companies/UWash.png";
import Rutgers from "../assets/companies/Rutgers.png";


const companies =[
  { name: "Lockheed", logo: Lockheed },
  { name: "Merck", logo: Merck },
  { name: "Boring-Company", logo: Boring },
  { name: "Northrop", logo: Northrop },
  { name: "Deutsche", logo: Deutsche },
  { name: "Epic", logo: Epic },
  { name: "UWash", logo: Uwash },
  { name: "Rutgers", logo: Rutgers },
]

const Sponsor = () => {
  return (
    <div className="w-full py-16 text-white px-8" id="sponser-section">
      <div className="max-w-[1150px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want to Sponsor our team?</h1>
          <p className="">Type in your email and send us a message!</p>

          <h2 className="md:text-2xl sm:text-xl text-l font-bold py-2">Current Sponsors</h2>
            <div className="w-[80%] lg:mx-0 mx-auto p-4 rounded-lg my-16" >
                  <div className="flex flex-wrap justify-around items-center">
                    {/* Sponsor 1 */}
                    <div className=" w-40 h-30">
                      <img
                        src={Nnl}
                        alt="Naval Nuclear Laboratory"
                        className="max-h-full max-w-full object-contain mx-auto grayscale invert brightness-50"
                      />
                    </div>
                    {/* Sponsor 2 */}
                    <div className=" w-40 h-30">
                      <img
                        src={Whimsy}
                        alt="Whimsy Tech"
                        className="max-h-full max-w-full object-contain mx-auto grayscale invert brightness-50"
                      />
                    </div>
                    {/* Sponsor 3 */}
                    <div className=" w-40 h-30">
                      <img
                        src={Reng}
                        alt="Rutgers Engineering"
                        className="max-h-full max-w-full object-contain mx-auto grayscale invert brightness-50"
                      />
                    </div>
                </div>
          </div>
            
        </div>
        <div className="my-4">

            <form class="max-w-lg mx-auto py-16" name="form" action="https://formspree.io/f/xeoeeegn" method="POST">            <div class="relative z-0 w-full mb-5 group">
               
            </div>
            
            <div class="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="firstName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name*</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="lastName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name*</label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                  <input type="tel" name="telephone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                  <input type="text" name="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                  <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
              </div>
            </div>
            <div class="mb-5">
                <label for="message" class="block mb-2 text-sm text-gray-500 dark:text-gray-400">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    rows="4" 
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
            </div>
            <button className="font-medium text-l bg-red-800" type="submit">Submit</button>

          </form>
        </div>

      </div>

    <div className="max-w-[1150px] mx-auto">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pb-4">Our Alumni Network</h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 max-w-screen-lg mx-auto m-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex items-center justify-center grayscale p-6"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-16 max-w-full invert brightness-50"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sponsor