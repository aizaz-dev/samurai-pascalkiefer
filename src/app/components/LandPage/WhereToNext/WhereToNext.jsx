import React from "react";
import Link from "next/link";
import { Heading } from "../../Heading";

const WhereToNext = () => {
  return (
    <div className="max-w-[1400px] mx-auto my-[60px] px-[20px] md:px-[30px] lg:px-[40px]">
      <div className="w-full md:w-[70%] mx-auto text-center">
        <Heading text1={"Where to next?"} />
        {/* paragraph */}
        <div className="montserrat text-[16px] md:text-[18px] font-normal text_primary text-center my-[20px]">
          <p className="my-[10px]">
            Follow us on <span><Link href="#" className="text-[#276bca] hover:text-[#006cff] transition-all">Instagram</Link></span> to keep up to date with our
            travels or find out more about us on our <Link href="#" className="text-[#276bca] hover:text-[#006cff] transition-all">about</Link> page.
          </p>
          <p className="my-[40px]">
            Otherwise, just have a click around. Our <Link href="#" className="text_blue">explore</Link> page is a good
            place to start, or, if you know where you’d like to go, check out
            our <Link href="#" className="text-[#276bca] hover:text-[#006cff] transition-all">places</Link> page.
          </p>
          <p className="my-[10px]">
            If you are ready to start booking your next trip, head over to our
            <Link href="#" className="text-[#276bca] hover:text-[#006cff] transition-all"> resources</Link> page for some helpful links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhereToNext;
