import React from "react";
import { FiArrowRight } from "react-icons/fi";
// import Heading from "../../Heading";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const Hiking = () => {
  return (
    <div className="max-w-[1400px] mx-auto md:w-[90%] mb-5 px-[20px] md:px-[30px] lg:px-[40px] py-[60px]">
      <div className="">
        {/* Text Part */}
        <div className="text text-center">
          <Link
            href="#"
            className="jost text-[15px] md:text-[17px] text-center font-medium text_blue"
          >
            HIKING
          </Link>
          {/* <Heading
            text1={"Strap on your hiking boots for a date"}
            text2={"with nature"}
          /> */}
          <p className="text-[14px] md:text-[17px] font-normal montserrat text_secondary py-[5px] text-center">
            Peak Experiences: Ascend sublime trails in some of our favorite
            hiking destinations in the world.
          </p>
        </div>
      </div>

      {/* Top 2 Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-auto group">
          <img
            src="/hiking1.webp"
            className="w-full h-full object-cover"
            alt="Hiking in the Dolomites"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 text-center text-white p-4">
            <h2 className="jost text-[18px] sm:text-[20px] md:text-[26px] font-normal text-white w-[70%] mx-auto">
              9 Brilliant Day Hikes In The Dolomites
            </h2>
          </div>
        </div>

        <div className="relative h-auto group">
          <img
            src="/hiking2.webp"
            className="w-full h-full object-cover"
            alt="Hiking in Zermatt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black60 text-center text-white p-4">
            <h2 className="jost text-[18px] sm:text-[20px] md:text-[26px] font-normal text-white w-[70%] mx-auto">
              12 Best Hikes In Zermatt (Easy, Medium & Challenging + Map)
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom 4 Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:bg-black gap-x-[20px] lg:gap-y-[80px] pb-[100px] p-[40px]">
        <Link
          href={"#"}
          className="md:relative h-auto group max-md:border-b max-md:p-6"
        >
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

          <img
            src="/hiking3.webp"
            className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
            alt="Country Walks near London"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem]" />
          </div>
          <div className="text-center text-white mt-2">
            <h2 className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary max-md:hover:text-[#006cff] mt-[20px] font-normal md:text-white">
              14 Beautiful Country Walks Near London By Car Or Train
            </h2>
          </div>
        </Link>

        <Link
          href={"#"}
          className="md:relative h-auto group max-md:border-b max-md:p-6"
        >
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

          <img
            src="/hiking4.webp"
            className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
            alt="Hiking in Switzerland"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem]" />
          </div>
          <div className="text-center text-white mt-2">
            <h2 className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary max-md:hover:text-[#006cff] mt-[20px] font-normal md:text-white">
              12 Best Hikes In Switzerland (+ Maps & Instructions)
            </h2>
          </div>
        </Link>

        <Link
          href={"#"}
          className="md:relative h-auto group max-md:border-b max-md:p-6"
        >
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

          <img
            src="/hiking5.webp"
            className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
            alt="Lake District Walks"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem]" />
          </div>
          <div className="text-center text-white mt-2">
            <h2 className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary max-md:hover:text-[#006cff] mt-[20px] font-normal md:text-white">
              15 Best Lake District Walks (Easy, Medium & Challenging)
            </h2>
          </div>
        </Link>

        <Link
          href={"#"}
          className="md:relative h-auto group max-md:border-b max-md:p-6"
        >
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

          <img
            src="/hiking6.webp"
            className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
            alt="Hiking in Cappadocia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiArrowRight className="text-white text-[2rem]" />
          </div>
          <div className="text-center text-white mt-2">
            <h2 className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary max-md:hover:text-[#006cff] font-normal mt-[20px] md:text-white">
              The 3 Best Trails For Hiking In Cappadocia + Maps & Instructions
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hiking;
