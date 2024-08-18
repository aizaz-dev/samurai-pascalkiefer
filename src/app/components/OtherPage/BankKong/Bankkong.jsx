import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const BankKong = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className=" w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="3. BANGKOK" />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Bangkok is a chaotic city with a romantic mix of old and new.
            Ancient temples and floating markets provide a glimpse into a bygone
            era; rooftop bars, bargain shopping, and a heady club scene indulge
            your hedonistic side.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            It’s the city’s dining prowess that makes it an excellent
            destination for 2024. There are 6 new Michelin-starred restaurants
            that are worth checking out. Unique to the high-end dining scene,
            Michelin restaurants in Bangkok can often represent great value for
            money.
          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            The new one Michelin star restaurants are: Indee Bangkok, Samrub
            Samrub Thai, Resonance Bangkok, Nawa, Mia and Wana Yook.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              We can help you put your trip together with our
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                3-day Bangkok itinerary.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div className="img grid grid-cols-2 gap-x-[10px]">
            <div>
            <img
              src="/bangkok-2024-1-768x1024.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
            </div>
            <div>
            <img
              src="/bangkok-2024-2-768x1024.webp"
              alt=""
              className="w-full h-[590px] object-cover"
            />
            </div>
            </div>
            <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
              FLOATING MARKETS, BANGKOK
            </figcaption>
          
        </div>
      </div>
    </div>
  );
};

export default BankKong;
