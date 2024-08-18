import React from "react";
import Link from "next/link";


const Dust = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px] ">
        <div className="text-part">
          <p className="text-[23px] font-medium montserrat text_primary">
            Dust off your bucket list with our guide to the best places to visit
            in 2024. We cover the hottest trends, the newest openings, and some
            perennial favourites to help you decide where to go in 2024.
          </p>
          <div className="mb-[50px]">
            <p className="jost font-normal text-[15px] md:text-[17px] text-[#404245] mt-[35px] mb-[25px] ">
              By - <Link href="#" className="text_blue">Paul</Link> | Published -{" "}
              <Link href="#" className="text_primary"> 22 Dec 2023</Link> | Go to -{" "}
              <Link href="#" className="text-[#006cff]">Comments & Questions</Link>
            </p>
            <img src="/cirlcle-img.webp" className="w-[50px] h-[50px]" alt="" />
          </div>
          <div>
            <p className="montserrat text-[15px] sm:text-[17px] md:text-[18px] font-medium text_primary mt-[18px] ">
              In 2023 travel had a reawakening. In 2024, it promises to reignite
              our wanderlust like never before.
            </p>
            <p className="montserrat text-[15px] sm:text-[17px] md:text-[18px] font-medium text_primary mt-[18px] ">
              Research shows that 27% of people plan to spend more on travel in
              2024 than they did in 2023.
            </p>
            <p className="montserrat text-[15px] sm:text-[17px] md:text-[18px] font-medium text_primary mt-[18px] ">
              The hottest travel trends for 2024 are all about incorporating a
              personal interest into your travel plans. Heading abroad to see
              your favourite artist, visiting a city based on a solid restaurant
              recommendation or traveling for a sports event are popular ways to
              decide where to go in 2024.
            </p>
            <p className="montserrat text-[15px] sm:text-[17px] md:text-[18px] font-medium text_primary mt-[18px] ">
              We’ve put together our list of the best places to travel to in
              2024. We cover the foodies, the adventure-lovers, the hikers, the
              budget-seekers, and many more.
            </p>
          </div>
          {/* img */}
          <div className="img">
            <img
              src="/morocco-travel-guide.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
            <figcaption className="jost text-[15px] text_primary font-normal mt-2">ESSAOUIRA, MOROCCO</figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dust;
