import React from 'react'

const Section = ({title, teamNames, description, awards, image}) => {
  return (
    <div className="w-full p-4">
      <div className="max-w-[1150px] mx-auto grid lg:grid-cols-2 bg-slate-100 rounded-xl">
        <div className="my-auto  m-4">
          <img src={image} className="my-4 rounded-xl" alt="/"/>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-3xl mx-4">
            {title}
          </h2>
          <h3 className="font-semibold text-l mx-4">
            Team Name: {teamNames}
          </h3>
          <p className="p-4">
            {description}
          </p>

          <h3 className="font-semibold mx-4 mb-4">
            Results: {awards}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Section