import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Moroco = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="14. MOROCCO " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          After their historic performance in the World Cup, there’s been a renewed interest in going to Morocco. But the devastating earthquake in 2023 is probably the most important reason to visit this fascinating country.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Many of the areas impacted by the earthquake in the <Link href={"#"} className="text_blue">Atlas Mountains</Link> rely on tourism and visiting in 2024 is one of the best ways to support the recovery efforts.


          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          In addition to doing some good, you’ll enjoy the enchanting hospitality of the Moroccan people and visit some incredible places.


          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Read about the bes
              <Link href="#" className="font-bold text_blue">
                {" "}
                places to visit in Morocco
              </Link>
              to start planning your trip{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/ouarzazate-morocco-travel-1-1024x683 (1).jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          OUARZAZATE, MOROCCO

          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Moroco;
