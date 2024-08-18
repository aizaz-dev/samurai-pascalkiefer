import React from "react";
// import Heading from "../../Heading";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const RoadTrip = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="w-full l">
        <img src="/boardrtipImage.png" className="w-full transform scale-x-[-1]" alt="" />
      </div>
      <div className="max-w-[1400px] md:w-[90%] mx-auto px-[20px] md:px-[30px] lg:px-[40px] py-[60px]">
        {/* text part */}
        <div className="text text-center">
          <Link href="#" className="jost text-[15px] md:text-[17px] text-center font-medium text_blue">
            ROAD TRIPS
          </Link>
          {/* <Heading text1={"Take an epic road trip through deserts,"} text2={"mountains & canyons"} /> */}
          <p className="text-[14px] md:text-[17px] font-normal montserrat text_secondary py-[5px] text-center">
            Experience sublime scenery, wildlife encounters and diverse cultures on our favourite road trips.
          </p>
        </div>
      </div>
      {/* image part */}
      <div className="main_container grid grid-cols-1 max-md:gap-y-[10px] md:grid-cols-2">
        {/* Image 1 */}
        <Link href={"#"} className="relative h-auto">
          <img src="/roadtrip1.webp" className="w-full h-full object-cover" alt="Road Trip" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-xl"></div>
          <div className="absolute bottom-0 left-0 text-center right-0 text-white p-4 z-20">
            <div className="flex items-center justify-center gap-x-[5px] max-md:hidden">
              <span className="block border jost font-normal text-[10px] md:text-[11px] px-[2px]">ITALY</span>
              <span className="block border jost font-normal text-[11px] px-[2px]">DOLOMITES</span>
            </div>
            <div>
              <h2 className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white w-[90%] mx-auto">
                10-Day Morocco Itinerary – Road Trip Guide + Map
              </h2>
            </div>
          </div>
        </Link>

        {/* Image 2 */}
        <Link href={"#"} className="relative h-auto">
          <img src="/roadtrip2.webp" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-xl"></div>
          <div className="absolute bottom-0 left-0 text-center right-0 text-white p-4 z-20">
            <div className="max-md:hidden">
              <span className="jost border font-normal text-[11px] px-[2px]">AUSTRALIA</span>
            </div>
            <div>
              <h2 className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white w-[90%] mx-auto">
                Complete Great Ocean Road Itinerary + Maps, Tips & Accommodation
              </h2>
            </div>
          </div>
        </Link>

        {/* Image 3 */}
        <Link href={"#"} className="md:relative h-auto">
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
          <img src="/roadtrip3.webp" className="w-full h-full object-cover max-md:hidden" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-xl md:block hidden"></div>
          <div className="md:absolute bottom-0 left-0 right-0 text-center text_secondary max-md:p-6 md:text-white max-md:border-b p-4 z-20">
            <div className="text max-md:hidden">
              <span className="jost border font-normal text-[11px] px-[2px]">MOROCCO</span>
            </div>
            <div>
              <h2 className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text_secondary max-md:hover:text-[#006cff] md:text-white w-[90%] mx-auto">
                10-Day Morocco Itinerary – Road Trip Guide + Map
              </h2>
            </div>
          </div>
        </Link>

        {/* Image 4 */}
        <Link href={"#"} className="md:relative h-auto">
          <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
          <img src="/roadtrip4.webp" className="w-full h-full object-cover bg-opacity-50 max-md:hidden" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-xl md:block hidden"></div>
          <div className="md:absolute bottom-0 left-0 right-0 text-center border-b w-full text_secondary md:text-white max-md:p-6 p-4 z-20">
            <div className="text-center max-md:hidden">
              <span className="jost border font-normal text-[11px] px-[2px]">NAMIBIA</span>
            </div>
            <div>
              <h2 className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text_secondary max-md:hover:text-[#006cff] md:text-white w-[90%] mx-auto">
                Namibia Road Trip: 2-Week Namibia Itinerary + Map & Tips
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoadTrip;
