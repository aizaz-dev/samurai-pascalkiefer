import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Nambia = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px] ">
        <div className="text-part">
          <Heading2 heading="2. NAMIBIA" />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary">
            The raw and unspoiled landscapes of Namibia offer an unparalleled
            experience for meaningful travel. From the otherworldly dunes of the
            Namib Desert to the wildlife-rich{" "}
            <Link href={"#"} className="text_blue">Etosha National Park</Link>, the country
            boasts an abundance of natural wonders.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            As sustainability becomes an increasingly important feature of our
            lives, Namibia is a great place to visit in 2024. Mix unique nature
            encounters with people who have changed their lives to tackle
            conservation issues.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Our 2-week{" "}
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                things to do in Nambia
              </Link>{" "}
              covers the best of this fascinating country.
            </p>
          </div>

          {/* img */}
          <div className="img">
            <img
              src="/namibia-experiences-01a-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
            <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
              SOSSUSVLEI, NAMIBIA
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nambia;
