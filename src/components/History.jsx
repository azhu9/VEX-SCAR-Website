import React from 'react';
import Section from "./Section";
import Bg from "../assets/backgrounds/bg.jpg";
import { IoIosArrowDropdown } from "react-icons/io";

import img2425 from "../assets/history/24-25.JPG";
import img2324 from "../assets/carousel/vex2.jpg";
import img2223 from "../assets/history/22-23.jpg";
// import img2122 from "../assets/history/21-22.webp";
import img2021 from "../assets/history/20-21.png";
import img1920 from "../assets/history/19-20.png";
import img1819 from "../assets/history/18-19.jpg";
import img1718 from "../assets/history/17-18.jpg";



const History = () => {

  return (

    <>
      <div>
      <img className="-z-10 w-full h-[92vh] overflow-hidden object-cover opacity-80 relative align-middle" src={Bg} alt="/"/>

        <div className="-z-10 animate-fade md:text-7xl sm:text-6xl text-4xl font-bold title-text text-white">
          ABOUT US
          <a href="#section"><IoIosArrowDropdown className="animate-bounce mx-auto my-8 cursor-pointer" size={40}/></a>
        </div>
      </div>

      <div className="bg-white" id="section">
        <Section
        title="2024-25: High Stakes"
        teamNames="SCAR"
        description="The High Stakes season is currently being played and our team is preparing for the World Championship with a qualifcation through our #28 Skills ranking in the world. Our season has been successful and rewarding with a big thanks to your new sponser Whismy Tech supplying us with parts and a generous donation."
        captains="Mahdhav Rawal, Jouan Yu"
        leads="Andy Zhu, Marco Hu, Ivan Shi"
        awards="TBD"
        image={img2425}
        />
        <Section
        title="2023-24: Over Under"
        teamNames="SCAR & SCAR 2"
        description=""
        captains="Kyle De Guzman, Brian Chen"
        leads="Jouan Yu, Mahdhav Rawal, Khoi Dinh, Andy Zhu"
        awards="Tournament Champion, Robot Skills Champion, Worlds Ranking 17 & 24"
        image={img2324}
        />
        <Section
        title="2022-23: Spin Up"
        teamNames="SKAR"
        description=""
        captains="Jack Lowry"
        leads="Zach Soriano, Kyle De Guzman"
        awards="Judges Award, Design Award, Worlds Ranking: 14"
        image={img2223}
        />
        {/* <YoutubePlayer videoId="8isLmoizb6A" /> */}
        <Section
        title="2021-22: Tipping Point"
        teamNames="SKAR"
        description=""
        captains=""
        leads=""
        awards="Judges Award, Design Award, Worlds Ranking: 2"
        videoId="8isLmoizb6A"
        />
        <Section
        title="2020-21: Change Up"
        teamNames="SKAR"
        description=""
        awards="N/A"
        image={img2021}
        />
        <Section
        title="2019-2020: Tower Takeover"
        teamNames="SKAR & RUSK"
        description=""
        awards="Tournament Champion, Design Award, Excellence Award, Worlds Ranking: 15"
        image={img1920}
        />
        <Section
        title="2018-2019: Turning Point"
        teamNames="RUSK"
        description=""
        captains="Timothy Petersen, Mathew Chan"
        leads="Israel Jackson, Peter Doroshenko"
        awards="Tournament Champion, Design Award, Excellence Award, Worlds Ranking: 15"
        image={img1819}
        />
        <Section
        title="2017-2018: In the Zone"
        teamNames="RUSK"
        description=""
        captains="Kevin Quizhpi, Rupesh Chinta"
        leads="Hari Vijayakumar, Atul Srivastava"
        awards="N/A"
        image={img1718}
        />
        <Section
        title="2016-2017: Starstruck"
        teamNames="RUSK"
        description=""
        awards="Excellence Award, Worlds Ranking: 15"
        videoId="9f9nFUleKmE"
        />
      </div>

    </>
  )
}

export default History