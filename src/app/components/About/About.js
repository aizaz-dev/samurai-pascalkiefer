import React from "react";

const About = () => {
  return (
    <div className=" w-full bg-[#FFFFFF]">
      <div className="about_container w-[100%] max-w-[1200px] mx-auto flex justify-between flex-row ">
        <div className="about_text w-[50%]  px-[16px] sm:ps-[80px] sm:py-[40px] py-[40px] flex flex-col gap-[30px] text-[#4b4f58] font-[500] text-[24px] Inter">
          <h1>Data is everywhere.</h1>
          <p>
            It builds up from various sources, becoming a knot that seems
            impossible to unravel. To top it off, you&apos;re losing business
            opportunities trying to get your head around it.
          </p>
          <h1>But it doesn&apos;t have to be like this.</h1>
          <p>
            With BI Samurai, you get the sharp edge to cut through the knot and
            uncover invaluable clues hiding within the numbers.
          </p>
        </div>
        <div className="about_img w-[50%]  px-[16px]  flex sm:justify-center justify-center pb-8">
          <img
            src="/Samurai/Pascal300x300px.png"
            alt=""
            className=" w-[300px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
