import React from "react";
import { Heading2 } from "../../Heading";
import Link from "next/link";

const Yucatan = () => {
  return (
    <div className="bg-[#ffffff] my-[60px]">
      <div className="w-full lg:px-[30px]">
        <div className="text-part">
          <Heading2 heading="12. YUCATÁN
 " />
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          The Yucatán Peninsula in Mexico is best known for its pristine beaches luring party-savvy visitors for a cocktail-infused break in the sun.


          </p>
          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          But it’s also rich in cultural interest with amazing <Link href="#" className="text_blue">Aztec and Mayan Ruins</Link> showcasing the region’s historic significance. Witness the impressive Chichén Itzá or the jungle-clad Coba ruins.


          </p>

          <p className="text-[19px] md:text-[21px] lg:text-[23px] font-medium montserrat text_primary mt-[20px]">
          In 2024, you may be able to experience one of the region’s newest, yet oldest attractions. Ocomtún is a lost Mayan city that was only discovered in June 2023. It’s still being unearthed but has sparked a renewed interest in Mexico’s historical ruins.


          </p>

          <div className="mb-[50px]">
            <p className="jost font-normal text-[18px] sm:text-[20px] md:text-[23px] text-[#404245] mt-[35px] mb-[25px] ">
            If you’d like to tackle more of the country, read our
              <Link href={"#"} className="font-bold text_blue">
                {" "}
                2-week Mexico itinerary.
              </Link>{" "}
            </p>
          </div>

          {/* img */}
          <div>
            <img
              src="/chichen-itza-yucatan-1024x683.webp"
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </div>

          <figcaption className="jost text-[13px] md:text-[15px] text_primary font-normal mt-2">
          CHICHÉN ITZÁ, YUCATÁN

          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Yucatan;
