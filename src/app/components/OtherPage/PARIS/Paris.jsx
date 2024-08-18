import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Paris = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className=":px-[30px]">
        <div className="text-part">
            <Heading2 heading="1. Paris" />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary">
            France is blessed with iconic monuments, pretty villages, glorious
            countryside, and some of the best beaches in Europe. The capital
            remains an eternal favourite for people who love romance, art, and
            history.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary">
            However, in 2024 Paris will shine even brighter. The Summer Olympics
            will be held from July 26 to August 11 and they’re sure to add
            further energy to an already vibrant city. In an Olympics first, the
            opening ceremony will take place on the Seine, meaning free
            admission for more spectators than in previous years.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Find all the best <Link href={"#"} className="font-bold text_blue"> things to do in Paris</Link> during your visit.
            </p>
          </div>
         
          {/* img */}
          <div className="img">
            <img
              src="/paris-things-to-do.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
            <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            PARIS, FRANCE
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paris;
