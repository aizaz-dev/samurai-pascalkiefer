import React from "react";

const Hero = () => {
  return (
    <div className="w-full sm:h-[550px] h-[400px]">
      <div className="w-full h-full bg-cover bg-no-repeat bg-center flex items-center bg-[url('/Samurai/herobg.jpg')]">
        <div className="w-full h-full bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="w-full max-w-[1200px] mx-auto sm:px-[80px] px-[16px]">
            <div className="w-full h-[300px] text-white">
              <h1 className="Inter font-[700] sm:text-[60px] text-[26px]">
                For Power BI,
              </h1>
              <h1 className="Inter font-[700] sm:text-[60px] text-[26px]">
                you need a Samurai
              </h1>
              <p className="Inter font-[500] sm:text-[24px] text-[20px]">
                Make smarter, data-driven decisions that lead to success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
