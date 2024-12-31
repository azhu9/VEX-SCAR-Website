import React from 'react'

const Contact = () => {
  return (
    <div className="w-full py-16 text-white px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-l font-bold py-2">Want to Sponser our team?</h1>
          <p className="">Type in your email and send us a message!</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-white text-black font-medium mx-4">Submit Email</button>
            
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, deleniti!</p>
        </div>

      </div>
    </div>
  )
}

export default Contact