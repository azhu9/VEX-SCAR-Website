// src/pages/History.js
import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaTrophy, FaUsers, FaUserTie, FaUserCog } from "react-icons/fa";
import Bg from "../assets/backgrounds/bg.webp";
import YouTubePlayer from "./YouTubePlayer"; // Adjust path as needed
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Don't forget the styles
import "../index.css";

import img2425 from "../assets/history/24-25.JPG";
import worlds25 from "../assets/history/vexbots.webp";
import img2324 from "../assets/carousel/vex2.jpg";
import img2223 from "../assets/history/22-23.jpg";
import img2021 from "../assets/history/20-21.png";
import img1920 from "../assets/history/19-20.png";
import img1819 from "../assets/history/18-19.jpg";
import img1718 from "../assets/history/17-18.jpg";

export const historyData = [
  {
    title: "2024-25: High Stakes",
    teamNames: "SCAR",
    description: "",
    captains: "Mahdhav Rawal, Jouan Yu",
    leads: "Andy Zhu, Marco Hu, Ivan Shi",
    awards: "Worlds Ranking: 25",
    image: [worlds25, img2425],
  },
  {
    title: "2023-24: Over Under",
    teamNames: "SCAR & SCAR 2",
    description: "",
    captains: "Kyle De Guzman, Brian Chen",
    leads: "Jouan Yu, Mahdhav Rawal, Khoi Dinh, Andy Zhu",
    awards:
      "Tournament Champion, Robot Skills Champion, Worlds Ranking: 17 & 24",
    image: [img2324],
  },
  {
    title: "2022-23: Spin Up",
    teamNames: "SKAR",
    description: "",
    captains: "Jack Lowry",
    leads: "Zach Soriano, Kyle De Guzman",
    awards: "Judges Award, Design Award, Worlds Ranking: 14",
    image: [img2223],
  },
  {
    title: "2021-22: Tipping Point",
    teamNames: "SKAR",
    description: "Led by Jack Lowry and Agam Modasiya.",
    captains: "",
    leads: "",
    awards: "Judges Award, Design Award, Worlds Ranking: 2",
    videoId: "8isLmoizb6A",
  },
  {
    title: "2020-21: Change Up",
    teamNames: "SKAR",
    description: "",
    awards: "N/A",
    image: [img2021],
  },
  {
    title: "2019-2020: Tower Takeover",
    teamNames: "SKAR & RUSK",
    description: "",
    awards:
      "Tournament Champion, Design Award, Excellence Award, Worlds Ranking: 15",
    image: [img1920],
  },
  {
    title: "2018-2019: Turning Point",
    teamNames: "RUSK",
    description: "",
    captains: "Timothy Petersen, Mathew Chan",
    leads: "Israel Jackson, Peter Doroshenko",
    awards:
      "Tournament Champion, Design Award, Excellence Award, Worlds Ranking: 15",
    image: [img1819],
  },
  {
    title: "2017-2018: In the Zone",
    teamNames: "RUSK",
    description: "",
    captains: "Kevin Quizhpi, Rupesh Chinta",
    leads: "Hari Vijayakumar, Atul Srivastava",
    awards: "N/A",
    image: [img1718],
  },
  {
    title: "2016-2017: Starstruck",
    teamNames: "RUSK",
    description: "",
    awards: "Excellence Award, Worlds Ranking: 15",
    videoId: "9f9nFUleKmE",
  },
];
const DetailItem = ({ icon, label, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-start text-gray-700">
      <span className="text-blue-500 mt-1 mr-3">{icon}</span>
      <div>
        <p className="font-bold">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};
const History = () => {
  return (
    <>
      <div>
        <img
          className="-z-10 w-full h-[calc(100vh-80px)] mt-[80px] overflow-hidden object-cover opacity-80 relative align-middle"
          src={Bg}
          alt="/"
          loading="lazy"
        />
        <div className="z-10 animate-fade md:text-7xl sm:text-6xl text-4xl font-bold title-text text-white">
          ABOUT US
          <a href="#section">
            <IoIosArrowDropdown
              className="animate-bounce mx-auto my-8 cursor-pointer"
              size={40}
            />
          </a>
        </div>
      </div>

      {/* History Timeline Section */}
      <div className="bg-gray-50 py-20" id="history-timeline">
        <div className="container mx-auto px-6">
          {historyData.map((season, index) => (
            <div
              key={season.title}
              className={`flex flex-col md:flex-row items-center mb-20 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 p-4">
                {season.videoId ? (
                  <YouTubePlayer videoId={season.videoId} />
                ) : season.image && season.image.length > 1 ? (
                  <div className="rounded-lg overflow-hidden shadow-2xl history-carousel relative z-10">
                    <Carousel
                      showThumbs={false}
                      infiniteLoop
                      autoPlay
                      stopOnHover
                      transitionTime={500}
                      interval={5000}
                      showStatus={false}
                    >
                      {season.image.map((imgSrc, i) => (
                        <div key={i}>
                          <img
                            src={imgSrc}
                            alt={`${season.title} showcase ${i + 1}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                ) : season.image && season.image.length === 1 ? (
                  <img
                    src={season.image[0]}
                    alt={season.title}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gray-200 rounded-lg shadow-2xl flex items-center justify-center">
                    <p className="text-gray-500">No Media Available</p>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 p-4 md:px-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {season.title}
                </h2>
                <h3 className="text-xl font-semibold text-blue-600 mb-6">
                  {season.teamNames}
                </h3>

                {season.description && (
                  <p className="text-gray-600 mb-6 italic">
                    "{season.description}"
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <DetailItem
                    icon={<FaUserTie size={20} />}
                    label="Captains"
                    value={season.captains}
                  />
                  <DetailItem
                    icon={<FaUserCog size={20} />}
                    label="Leads"
                    value={season.leads}
                  />
                  <DetailItem
                    icon={<FaTrophy size={20} />}
                    label="Awards"
                    value={season.awards}
                  />
                  <DetailItem
                    icon={<FaUsers size={20} />}
                    label="Teams"
                    value={season.teamNames}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default History;
