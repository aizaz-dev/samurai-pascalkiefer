import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Wales = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="10. WALES
 " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Wales is famous for rugged coastlines, mountain regions, historic castles, rugby and sheep. But it’s also developing a sturdy reputation for single malt whisky.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          Five distilleries have now been awarded a geographical indication for single malt whisky. They are Penderyn, In The Welsh Wind, Da Mhile, Coles and the new addition in late 2023, Aber Falls.  


          </p>

       

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            Now is a great time to enjoy a bracing
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                coastal walk in Pembrokeshire, 
              </Link>{" "}
              or the charming colourful town of
              <Link href={"#"} className="text_blue"> Tenby</Link>
              and finish the day with a quality tipple.
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/things-to-do-pembrokeshire-36-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          CAREW CASTLE, WALES
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Wales;
