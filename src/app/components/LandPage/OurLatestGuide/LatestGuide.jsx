import React from "react";
import Heading from "../../Heading";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";

const LatestGuide = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto mb-5 my-8 md:w-[90%] px-[20px] md:px-[30px] lg:px-[40px] ">
        <div className="py-[60px]">
          {/* Images Grid */}
          <div className="grid grid-cols-1  md:grid-cols-4 gap-x-[20px] sm:gap-y-[80px] pb-[100px]">
            {/* Image Card */}
            <Link href={"#"} className="relative h-auto group p-[20px] ">
              <img
                src="/hiking3.webp"
                className="w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
                alt="Country Walks near London"
              />
              <div className="absolute border-b   inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-[20px]">
                <FiArrowRight className="text-black text-[2rem]" />
              </div>
              <div className="text-center text-black">
                <p className="text-start font-normal text-[12px] jost text_primary mt-4 hidden md:flex ">
                  4 Aug 2024
                </p>
                <p className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary hover:text-[#006cff] mt-[20px]  font-normal md:text-black">
                  Oxford Day Trip – Perfect 1-Day Itinerary (+ Local Tips & Map){" "}
                </p>
              </div>
            </Link>

            <Link
              href={"#"}
              className="md:relative h-auto group  max-md:border-b max-md:p-[20px] "
            >
              <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

              <img
                src="/hiking4.webp"
                className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
                alt="Hiking in Switzerland"
              />
              <div className="absolute   inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-[20px]">
                <FiArrowRight className="text-black text-[2rem]" />
              </div>
              <div className="text-center text-black">
                <p className="text-start font-normal text-[12px] jost text_primary mt-4 hidden md:flex">
                  4 Aug 2024
                </p>
                <p className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary hover:text-[#006cff] mt-[20px] font-normal md:text-black">
                  15 Best Things To Do In Rye On A Day Trip Or Weekend Break{" "}
                </p>
              </div>
            </Link>

            <Link
              href={"#"}
              className="md:relative h-auto group  max-md:border-b max-md:p-[20px] "
            >
              <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

              <img
                src="/hiking5.webp"
                className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
                alt="Lake District Walks"
              />
              <div className="absolute   inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-[20px]">
                <FiArrowRight className="text-black text-[2rem]" />
              </div>
              <div className="text-center text-black">
                <p className="text-start font-normal text-[12px] jost text_primary mt-4 hidden md:flex">
                  4 Aug 2024
                </p>
                <p className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary hover:text-[#006cff] mt-[20px]  font-normal md:text-black">
                  Where To Stay In Las Vegas – By Neighbourhood, On & Off The
                  Strip{" "}
                </p>
              </div>
            </Link>

            <Link
              href={"#"}
              className="md:relative h-auto group  max-md:border-b max-md:p-[20px] "
            >
              <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

              <img
                src="/hiking6.webp"
                className="max-md:hidden w-full h-full object-cover group-hover:backdrop-blur-sm group-hover:brightness-75 transition duration-300"
                alt="Hiking in Cappadocia"
              />
              <div className="absolute   inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-[20px]">
                <FiArrowRight className="text-black text-[2rem]" />
              </div>
              <p className="text-start font-normal text-[12px] jost text_primary mt-4 hidden md:flex">
                4 Aug 2024
              </p>
              <div className="text-center text-black">
                <p className="jost text-[14px] sm:text-[16px] md:text-[18px] text_secondary hover:text-[#006cff] font-normal mt-[20px] md:text-black">
                  How To Hike Sassolungo In The Dolomites (Instructions & Map){" "}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestGuide;
