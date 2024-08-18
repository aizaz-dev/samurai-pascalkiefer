import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const LavesGas = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="5. LavesGas " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            As the centre of hedonistic pleasures, Las Vegas is what you make of
            it. Party all weekend, enjoy mind-blowing architecture or visit
            off-the-strip, local attractions.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Las Vegas is great to visit any year, but there are a few extra
            reasons to go in 2024. The Sphere is Sin City’s newest attraction.
            Standing at over 360ft tall, this music and entertainment venue
            features a high-definition wraparound video wall creating a unique
            virtual environment.
          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Fontainebleau is the newest{" "}
            <Link href={"#"} className="text_blue">luxury hotel in Vegas</Link>. At 56
            stories, it’s the tallest building in the city with a vibe
            reminiscent of the South Florida nightlight scene
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Read more in our guide to the best
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                places to visit in LavesGas.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/las-vegas-flamingo-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            LAS VEGAS
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default LavesGas;
