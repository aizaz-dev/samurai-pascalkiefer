import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Istanbul = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="11. ISTANBUL
 " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Istanbul is one of our favourite cities in Europe. Soak up the vibrancy of this important historical centre while admiring sublime art, cool neighbourhoods, local restaurants, and friendly Turkish culture. We’ve covered all our favourite <Link href={"#"} className="text_blue">things to do in Istanbul</Link> here, but there is one excellent reason to visit in 2024.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Istanbul Modern opened in May 2023 after an 8-year refurbishment. The new location on the banks of the Bosporus is an architectural marvel and the perfect venue for the gallery’s incredible collection of modern art.


          </p>

      

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Put your trip together with our
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                Istanbul itinerary.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/things-to-do-istanbul-39-1024x683.jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          SÜLEYMANIYE MOSQUE, ISTANBUL
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Istanbul;
