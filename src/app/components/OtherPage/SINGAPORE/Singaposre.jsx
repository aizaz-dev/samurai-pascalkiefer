import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Singaposre = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="9. SINGAPORE " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            In recent decades, few cities have seen as much change as Singapore.
            Transformed from a colonial outpost to a garden city at the heart of
            Asia, Singapore’s journey has been remarkable. It’s a fantastic city
            stopover with a diverse culture, a healthy obsession with food and
            the most green spaces of any other city.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Read more in our guide to the best
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                things to do in Singapore.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/things-to-do-in-singapore-1024x683.jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            SINGAPORE
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Singaposre;
