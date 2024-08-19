import Link from "next/link";
import React from "react";
import { GoStarFill } from "react-icons/go";

const Reviews = () => {
  return (
    <div className=" w-full bg-[#FFFFFF]">
      <div className=" w-[100%] max-w-[1200px] mx-auto flex sm:flex-row flex-col">
        <div className=" sm:w-[50%] w-full px-[16px] sm:px-[80px] sm:py-[80px] py-[40px]  text-[#000000] font-[500] text-[24px] Inter">
          <h1>
            With BI Samurai, you can slice through complexity with precision and
            clarity. Your journey towards sharper business decisions starts
            here.
          </h1>
        </div>
        <div className=" sm:w-[50%] w-full px-[16px] sm:px-[80px] flex items-center justify-center pb-8">
          <div className="flex flex-col justify-start px-4 cursor-pointer">
            <div className=" bg-[#FFFFFF] rounded-t-lg border border-solid border-[#f3f3f3] flex flex-col justify-center items-center ">
              <Link
                href="https://clutch.co/profile/bi-samurai?utm_source=widget&utm_medium=9&utm_campaign=widget&utm_content=num_reviews&utm_term=bisamurai.com#reviews"
                target="_blank"
              >
                <div className="flex gap-2 justify-center items-center font-medium text-[22px] Inter py-1 text-[#17313b]">
                  <div className="div text-[18px] text-[#e62415]">
                    <GoStarFill />
                  </div>
                  <div className="div text-[22px] mb-[6px] pl-[5px]">5.0/5</div>
                </div>
                <div className="text-red-600 text-[10px] pb-2 hover:underline text-center">
                  3 REVIEWS
                </div>
              </Link>
            </div>
            <Link
              href="https://clutch.co/profile/bi-samurai?utm_source=widget&utm_medium=9&utm_campaign=widget&utm_content=num_reviews&utm_term=bisamurai.com#reviews"
              target="_blank"
            >
              <div className="bg-[#17313B] rounded-b-lg text-center">
                <div className="text-[8px] px-7 py-2 Inter font-medium text-[#fff]">
                  Powered by Clutch
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
