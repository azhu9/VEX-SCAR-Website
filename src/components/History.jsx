import React, {useState} from 'react';
import Accordion from "./Accordion";

const History = () => {

  return (
    <div className="w-full bg-white flex justify-center">
      <div className="p-4 rounded-lg max-w-[1150px] mx-6 ">
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2024-25: High Stakes - SCAR"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2023-24: Over Under - SCAR, SCAR2"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2022-23: Spin Up - SKAR"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2021-22: Tipping Point - SKAR"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2020-21: Change Up - SKAR"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
        <div className="bg-gray-200 border-2 border-black mt-1 rounded-lg">
          <Accordion 
            title="2019-20: Tower Takeover - SKAR, RUSK"
            answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          />
        </div>
      </div>
    </div>
  )
}

export default History