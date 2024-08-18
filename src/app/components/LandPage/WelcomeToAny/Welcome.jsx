import React from "react";
import Image from "next/image";
import {Heading} from "../../Heading";
import CircleButton from "../CircleButton/CircleButton";

const Welcome = () => {
  return (
    <div className="main_Container bg-[#f7f7f7]  max-w-[1400px] px-[20px] md:px-[30px] lg:px-[40px] mx-auto">
        <div className="md:w-[90%] mx-auto flex flex-wrap lg:flex-nowrap max-lg:flex-col-reverse max-lg:gap-y-8 gap-x-[60px] lg:gap-x-[60px]  py-[40px] justify-between items-center ">
      {/* img */}
      <div className="img_part h-auto">
        <img src="/anywhere.webp" alt="Anywhere We Roam"  className=" object-cover"  />
      </div>
      {/* text */}
      <div className="text_part text-center">
      <Heading text1={"Welcome to"} text2={"Anywhere We Roam"} />
        <p className="text-[16px] md:text-[18px] montserrat font-normal text_primary py-[20px]">
          Anywhere We Roam is a resource to help you travel better, featuring
          epic road trips, stunning hiking destinations, and our favourite
          cities.
        </p>

        <p className="text-[16px] md:text-[18px] montserrat font-normal text_primary mb-[15px] mt-[20px]">Paul & Mark.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">
          <div className="text-[14px] font-medium text_primary jost">
            <p>
              <strong>BLOGGER OF THE YEAR</strong>
            </p>
            <p>British Guild of Travel Writers (2022)</p>
          </div>
          <div className="text-[14px] font-medium text_primary jost">
            <p>
              <strong>BLOGGER OF THE YEAR</strong>
            </p>
            <p>TravMedia Awards (2021)</p>
          </div>
          <div className="text-[14px] font-medium text_primary jost">
            <p>
              <strong>BLOGGER OF THE YEAR</strong>
            </p>
            <p>Blogosphere Awards (2021)</p>
          </div>
          <div className="text-[14px] font-medium text_primary jost">
            <p>
              <strong>BLOGGER OF THE YEAR</strong>
            </p>
            <p>Travel Media Awards (2020)</p>
          </div>
        </div>
      </div>
      </div>
      <CircleButton />
    </div>
  );
};

export default Welcome;
