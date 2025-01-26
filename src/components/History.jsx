import React from 'react';
import Section from "./Section";
import Bg from "../assets/backgrounds/bg.jpg";
import { IoIosArrowDropdown } from "react-icons/io";

import img2019 from "../assets/history/2019-20.png";

const History = () => {

  return (

    <>

      <div>
      <img className="w-full h-[92vh] overflow-hidden object-cover opacity-80 relative align-middle" src={Bg} alt="/"/>

        <div className="animate-fade md:text-7xl sm:text-6xl text-4xl font-bold title-text text-white">
          ABOUT US
          <a href="#section"><IoIosArrowDropdown className="animate-bounce mx-auto my-8 cursor-pointer" size={40}/></a>
        </div>
      </div>

      <div className="bg-white" id="section">
        <Section
        title="2024-25: High Stakes"
        teamNames="SCAR"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="TBD"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        <Section
          title="2023-24: Over Under"
        teamNames="SCAR & SCAR 2"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="Tournament Champion, Robot Skills Champion, Worlds Ranking 17 & 24"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        <Section
        title="2022-23: Spin Up"
        teamNames="SKAR"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="Judges Award, Design Award, Worlds Ranking: 14"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        <Section
        title="2021-22: Tipping Point"
        teamNames="SKAR"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="Judges Award, Design Award, Worlds Ranking: 2"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        <Section
        title="2020-21: Change Up"
        teamNames="SKAR"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="N/A"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        <Section
        title="2019-2020: Tower Takeover"
        teamNames="SKAR & RUSK"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="Tournament Champion, Design Award, Excellence Award, Worlds Ranking: 15"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
        {/* <Section
        title="2017-2018: In the Zone"
        teamNames="RUSK"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="N/A"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        /> */}
        <Section
        title="2016-2017: Starstruck"
        teamNames="RUSK"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        awards="Excellence Award, Worlds Ranking: 15"
        image="https://react.semantic-ui.com/images/image-16by9.png"
        />
      </div>

    </>
  )
}

export default History