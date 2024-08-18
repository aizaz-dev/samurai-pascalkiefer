import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {Heading} from "../../Heading";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const Usa = () => {
  return (
    <div className="max-w-[1400px] mx-auto w-[90%] mb-5">
      <div className="px-[20px] md:px-[30px] lg:px-[40px] py-[60px]">
        {/* Text Part */}
        <div className="text text-center">
          <Link
            href="#"
            className="jost text-[15px] md:text-[17px] text-center font-medium text_blue"
          >
            USA
          </Link>
          <Heading
            text1={"Indulge in Las Vegas then repent in a"}
            text2={"National Park"}
          />
          <p className="text-[14px] md:text-[17px] font-normal montserrat text_secondary py-[5px] text-center">
            Stars, stripes, and scenery – explore the diverse landscapes of the USA in some of the most engrossing national parks in the country.
          </p>
        </div>
      </div>

      {/* Top 2 Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-4">
        <Link href={"#"} className="relative h-auto">
          <img
            src="/usa-1.webp"
            className="w-full h-full object-cover"
            alt="Hiking in the Dolomites"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
            <h2 className="jost text-[18px] sm:text-[20px] md:text-[26px] font-normal text-white w-[70%] mx-auto">
              Where To Stay In Las Vegas – By Neighbourhood, On & Off The Strip
            </h2>
          </div>
        </Link>

        <Link href={"#"} className="relative h-auto">
          <img
            src="/usa-2.webp"
            className="w-full h-full object-cover"
            alt="Hiking in Zermatt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
            <h2 className="jost text-[18px] sm:text-[20px] md:text-[26px] font-normal text-white w-[70%] mx-auto">
              20 Absolute Best Things To Do In Las Vegas By Area
            </h2>
          </div>
        </Link>
      </div>

      {/* Bottom 4 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[20px] md:gap-y-[80px] pb-[100px] mt-[40px]">
        {/* Image Card */}
        <Link href={"#"} className="md:relative h-auto group">
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
          <img
            src="/usa-3.webp"
            className="w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300 max-md:hidden"
            alt="Country Walks near London"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="md:absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="max-md:hidden text-white text-[2rem] font-extrabold" />
          </div>
          <div className="text-center text-white max-md:border-b pb-[30px]">
            <h2 className="jost text-[18px] mt-[20px] font-normal text_secondary max-md:hover:text-[#006cff] md:text_primary">
              Complete Guide To Visiting Monument Valley in 2024 (+ Tips & Tours)
            </h2>
          </div>
        </Link>

        <Link href={"#"} className="md:relative h-auto group mt-[20px]">
          <TiArrowRight className="md:hidden text-3xl text_blue font-extrabold flex items-center justify-center w-full" />
          <img
            src="/usa-4.jpg"
            className="w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300 max-md:hidden"
            alt="Hiking in Switzerland"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="md:absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem] max-md:hidden" />
          </div>
          <div className="text-center text-white max-md:border-b max-md:pb-[30px]">
            <h2 className="jost text-[18px] font-normal text_secondary max-md:hover:text-[#006cff] md:text_primary">
              18 Best Things To Do In Yellowstone National Park + Map
            </h2>
          </div>
        </Link>

        <Link href={"#"} className="md:relative h-auto group mt-[20px]">
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
          <img
            src="/usa-5.jpg"
            className="w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300 max-md:hidden"
            alt="Lake District Walks"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="md:absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem] max-md:hidden" />
          </div>
          <div className="text-center text-white max-md:border-b max-md:pb-[30px]">
            <h2 className="jost text-[18px] mt-[20px] font-normal text_secondary max-md:hover:text-[#006cff] md:text_primary">
              <Link href="https://anywhereweroam.com/golden-circle-iceland/" target="_self" className="cursor-init">
                14 Best Grand Canyon Viewpoints – North & South Rim
              </Link>
            </h2>
          </div>
        </Link>

        <Link href={"#"} className="md:relative h-auto group mt-[20px]">
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
          <img
            src="/usa-6.webp"
            className="w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300 max-md:hidden"
            alt="Hiking in Cappadocia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="md:absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white max-md:pt-[30px] text-[2rem] max-md:hidden" />
          </div>
          <div className="text-center text-white mt-2 max-md:border-b max-md:pb-[30px]">
            <h2 className="jost text-[18px] font-normal text_secondary max-md:hover:text-[#006cff] md:text_primary">
              Exploring the Majestic Landscapes of Canyonlands National Park
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Usa;
