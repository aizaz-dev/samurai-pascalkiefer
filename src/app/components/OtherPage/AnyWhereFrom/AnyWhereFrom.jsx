import React from "react";
import Link from "next/link";

const AnyWhereFrom = () => {
  return (
    <div className="w-full h-[500px] mx-auto  ">
      <div className="lg:px-[30px]">
        <div className="grid grid-cols-2">
          <div className="pic">
            <img src="/paul-mark-1.webp" alt="" className="w-full h-full"/>
          </div>
          <div className="text bg-[#ececec] p-[20px] text-center ">
            <h6 className="text-[19px] sm:text-[21px] md:text-[23px] font-semibold jost text_primary my-[20px]">
              <strong>ANYWHERE WE ROAM</strong> IS <br />
              READER-SUPPORTED
            </h6>
            <p className="text-[15px] md:text-[17px] montserrat text_primary font-normal my-[20px]">
              When you buy through links on our site, we may earn a small
              affiliate commission at no extra cost to you.
            </p>
            <p  className="text-[15px] md:text-[17px] montserrat text_primary font-normal my-[20px]">Thanks for your support.</p>
            <p  className="text-[15px] md:text-[17px] montserrat text_primary font-normal my-[20px]">
              You can also{" "}
              <Link href="#" className="text_blue">
                buy us a coffee
              </Link>
              , and follow us on{" "}
              <Link href="#" className="text_blue">
                Instagram
              </Link>{" "}
              or{" "}
              <Link href="#" className="text_blue">
                Facebook
              </Link>
            </p>
            <p  className="text-[15px] md:text-[17px] montserrat text_primary font-normal my-[20px]">- Paul & Mark.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyWhereFrom;
