import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Antalys = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="8. ANTALYA" />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Located on an idyllic stretch of coastline on the Turkish Riviera, Antalya has been enticing visitors since the Pergamon kings bequeathed their empire to the Romans.

.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Blessed with a well-preserved old town, evocative ancient ruins, golden beaches, and 300 days of sun a year, Antalya is fast becoming a sought-after holiday destination.


          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          It’s also a very cost-effective place to go in 2024, where you can find a high-quality resort with all the facilities at a very affordable price. In fact, prices in Antalya have dropped an estimated 12%. 


          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Read about the cool
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                things to do in Antalya.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/things-to-do-antalya-turkey-1024x683.jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          ANTALYA, TÜRKIYE
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Antalys;
