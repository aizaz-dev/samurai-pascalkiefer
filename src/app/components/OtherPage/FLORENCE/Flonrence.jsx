import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Flonrence = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="13. FLORENCE
 " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          As the birthplace of the Renaissance, Florence continues to enchant visitors with its artistic treasures and architectural marvels. But Florence is also a city of today. A thirst for culture exists in crafty cocktail bars and aging tavernas. In unassuming chapels with era-defining art and quiet streets with humble restaurants.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          In 2024, there are plenty of great reasons to go. Attend the Maggio Musicale Fiorentino Festival, the oldest in Italy. Dress up for the medieval fantasy event, Vinci Unicorn Festival, or shop at the BIAF Antiques Biennial.


          </p>

     

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Read more here – bes
              <Link href="#" className="font-bold text_blue">
                {" "}
                things to do in Florence.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/Duomo-Florence-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          FLORENCE, ITALY

          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Flonrence;
