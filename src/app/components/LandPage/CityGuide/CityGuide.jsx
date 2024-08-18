'use client';
import React from "react";
import {Heading} from "../../Heading";
import Link from "next/link";

const CityGuide = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7]">
        <div>
          <img src="/guidebg.png" className="w-full" alt="" />
        </div>
        <div className="max-w-[1400px] w-[90%] mx-auto mb-5 md:w-[90%] py-[60px]">
          <div className="px-[20px] md:px-[30px] lg:px-[40px]">
            {/* Text Part */}
            <div className="text text-center">
              <Link
                href="#"
                className="jost text-[15px] md:text-[17px] text-center font-medium text_blue"
              >
                CITY GUIDES
              </Link>
              <Heading text1={"Book your next European City break"} />
              <p className="text-[17px] font-normal montserrat text_secondary py-[5px] lg:w-[50%] mx-auto text-center mb-[30px]">
                Embark on a European city break, from world-renowned capitals to overlooked gems.
              </p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-[100px] lg:grid-cols-4">
              <div className="relative h-auto">
                <img
                  src="/city-1.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in the Dolomites"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    20 Unmissable Things To Do In Vienna (+ Map & Local Tips)
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-2.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Zermatt"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    17 Best Things To Do In Lisbon (+ Map & Tips)
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-3.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Madrid"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    Here’s what to do in Madrid on your next visit
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-4.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Málaga"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    16 Best Things To Do In Málaga, Spain (+ Map & Tips)
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-5.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Paris"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    65 Ultimate Things To Do In Paris (2024)
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-6.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Florence"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    19 Absolute Best Things to Do In Florence (+ Map & Tips)
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-7.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in Marrakech"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    The Most Captivating & Interesting Things to do in Marrakech
                  </h2>
                </div>
              </div>

              <div className="relative h-auto bg-gradient-to-b from-black/50 via-black/30 to-transparent">
                <img
                  src="/city-8.jpg"
                  className="w-full h-full object-cover"
                  alt="Hiking in Istanbul"
                />
                <div className="text-center mt-2">
                  <h2 className="jost text-[17px] font-normal text-secondary">
                    20 Unmissable Things To Do In İstanbul, Turkey
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityGuide;
