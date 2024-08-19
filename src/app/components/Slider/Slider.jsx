import React from "react";
import Sliders from "./SliderOne";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";

const Slider = () => {
  return (
    <div className=" w-full bg-[#FFFFFF]">
      <div className=" w-[100%] max-w-[1200px] mx-auto px-[16px] sm:px-[80px] sm:py-[80px] py-[40px]">
        <div className=" flex items-center flex-col gap-4">
          <button className=" w-fit Inter bg-[#F4D800] pt-[6px] pr-[60px] pb-[6px] pl-[60px] Inter text-[#000000] sm:text-[23px] text-[19px] font-[500] text-center border-solid border-0 border-t-2 border-r-2 border-b-2  border-l-2 border-[#ffd500] rounded-tl-[50px] rounded-br-[50px]">
            Sharpen Your Edge
          </button>

          <p className=" text-center text-[#000000] sm:text-[40px] text-[26px] font-[700] Inter">
            Join the ranks of our satisfied customers
          </p>
        </div>

        <SliderOne />
        <SliderTwo />
        <div className=" w-full py-24">
          <img
            src="/Samurai/bg-foot.png"
            alt=""
            className=" w-full object-cover object-center "
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
