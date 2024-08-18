import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Madrid = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="7. MADRID " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            As a major cultural capital of Europe, Madrid is always a great
            destination for a weekend break. The Prado, the Thyssen-Bornemisza,
            and the Reina Sofía, are 3 of the most renowned art galleries in
            Europe.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Madrid continues to be an excellent place to visit in 2024. Gastro
            Festival celebrates the culinary diversity of the city, the Madrid
            Flamenco Festival in May will showcase singing and dance, and the
            Mad Cool Festival will feature some of the biggest artists from
            across the globe.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Read what you can get up to in our guide to the best
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                things to do in Madrid.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/royal-palace-madrid-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            ROYAL PALACE, MADRID
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Madrid;
