import React from 'react'
import Img from '../assets/img.jpg'

const Info = () => {
  return (
      <div className="w-full bg-white py-16 px-4" id="info-section">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className="w-[500px] mx-auto my-4 rounded-lg" src={Img} alt="/"></img>
              <div className="flex flex-col justify-center mx-4">
                  <p className="text-red-500 font-bold">RUTGERS IEEE VEXU DIVISION</p>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Who are we?</h1>
                  <p>VEXU is a collegiate level robotics competition designed to pit your university against others in head to head matches. Each year the Robotics Education & Competition Foundation releases a game for which you must design your robot to be the best, whether through intelligent programming, robust build quality, or killer strategy. It is our job at Rutgers IEEE VEXU to allow students of all backgrounds and majors to design, build, program, and strategize together to put Rutgers on the map of international competitive robotics.</p>
                  <button className="font-medium bg-red-800">Learn More</button>
                  </div>
          </div>
      </div>
  )
}

export default Info