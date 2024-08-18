import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="lg:px-[36px]">
    <div className="w-full bg-[#ececec] h-full mt-[40px] py-[60px] ">
      <div className="px-[36px]">
        {/* img1 */}
        <div>
          <img src="/bangkok-2024-1-768x1024.webp" alt="" />
          <div className="text">
            <p className="montserrat text-[15px] text-[#152222] font-normal"></p>
            We are Paul & Mark, two curious & adventurous travellers who provide
            practical information to help you make the most of your travels.
          </div>
          <div className="buy_coffe bg-[#FFDD00] w-fit px-2 py-2 rounded-lg mt-[30px]">
            <Link href="#">
              <p>buy me a coffe</p>
            </Link>
          </div>
        </div>
        {/* related to guide  */}
        <p className="mt-[78px] mb-[10px] border-b border-black  py-3">RELATED GUIDES</p>
        {/* img-1 */}
        <div className="mt-[50px]  py-[5px]">
          <div>
            <img src="/birtin-4.jpg" alt="" />
          </div>
          <div className="pt-2">
            <Link href={"#"}>
              20 Essential Places To Visit In Switzerland + What To Do & Map
            </Link>
          </div>
        </div>

        {/* img-2 */}
        <div className="mt-[20px] py-[5px]">
          <div>
            <img src="/city-3.webp" alt="" />
          </div>
          <div  className="pt-2">
            <Link href={"#"}>
              20 Essential Places To Visit In Switzerland + What To Do & Map
            </Link>
          </div>
        </div>
        {/* img-3 */}
        <div className="mt-[20px] py-[5px]">
          <div  className="pt-2">
            <img src="/chion-in-temple-kyoto-1024x683.webp" alt="" />
          </div>
          <div>
            <Link href={"#"}>
              20 Essential Places To Visit In Switzerland + What To Do & Map
            </Link>
          </div>
        </div>
        {/* img-4 */}
        <div className="mt-[20px] py-[5px]">
          <div>
            <img src="/chion-in-temple-kyoto-1024x683 (1).webp" alt="" />
          </div>
          <div  className="pt-2">
            <Link href={"#"}>
              20 Essential Places To Visit In Switzerland + What To Do & Map
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
