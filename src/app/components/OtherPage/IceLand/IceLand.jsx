import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const IceLand = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2
            heading="4. ICELAND "
          />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Scarred by a thin crust, Iceland is a landscape dotted with
            geological weirdness. Rivers of boiling grey mud cut through golden
            tree-less valleys, sulphur vents sprout steam like a giant
            atmospheric smoke machine and colourful mountain ranges brighten up
            gloomy arctic days.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            We love Iceland and we’ve visited many times. But the recent volcano
            eruption on the Reykjanes Peninsula could provide a unique travel
            experience for 2024.
          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            There’s already great hiking opportunities around the old
            <Link href={"#"} className="text_blue">Fagradalsfjall</Link> volcano site, and
            when deemed safe to see, the current volcanic eruption could be an
            awesome thing to witness.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Read more in our guide to the best
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                places to visit in Iceland.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/Sigöldugljúfur-canyon-iceland-highlands-3-1024x682.jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            SIGÖLDUGLJÚFUR CANYON, ICELAND
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default IceLand;
