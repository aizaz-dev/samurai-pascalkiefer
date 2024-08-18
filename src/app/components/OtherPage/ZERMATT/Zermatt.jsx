import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Zermat = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="6. ZERMATT " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Nestled in the Swiss Alps, Zermatt is a picturesque village located
            at the foot of the Matterhorn, one of the most iconic mountains in
            the world. It has some of the best{" "}
            <Link href="#" className="text_blue">hiking in Switzerland</Link>, with
            scenic cable car rides that whisk you to dramatic alpine landscapes.
          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            None are more spectacular than the{" "}
            <Link href="#" className="text_blue">Matterhorn Alpine Crossin</Link>g which
            opened last year. This new high-tech cable car can take you from
            Zermatt all the way to Cervinia in Italy.
          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
            Along the way, take in unparalleled views of the mountains and ski
            in a high-alpine wonderland, 365 days of the year.
          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
              Read more in our guide to the best
              <Link href="#" className="font-bold text_blue">
                {" "}
                things to do in Zermatt.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/hiking-in-zermatt-1024x683.jpg"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
            HIKING NEAR ZERMATT
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Zermat;
