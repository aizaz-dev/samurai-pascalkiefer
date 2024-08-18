import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Japan = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="15. JAPAN
 " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Japan has a harmonious blend of ancient traditions and modern technology. From the beautiful temples and gardens to the energy of Tokyo and Osaka, Japan is a cool place to visit.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Over the last two years, the Japanese currency has weakened over 30% against the US dollar. Inflation remains low compared to other countries, so prices have barely risen.  


          </p>



          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Japan is a surprisingly great value destination for 2024.
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/chion-in-temple-kyoto-1024x683 (1).webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          CHION-IN TEMPLE, KYOTO
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Japan;
