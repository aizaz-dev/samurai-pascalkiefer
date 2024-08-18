import React from "react";
import {Heading} from "../../Heading";

const Find = () => {
  return (
    <div className="bg-[rgb(247,247,247)]">
      <div className="max-w-[1400px] mx-auto md:w-[90%] px-[20px] md:px-[30px] lg:px-[40px]">
        <div className="py-[60px]">
          <div className="md:w-[60%] mx-auto mb-[30px]">
            {/* text */}
            <div className="text-center">
              <Heading
                text1={"Find some inspiration for your next big"}
                text2={"getaway"}
              />
            </div>
            <p className="text-[15px] md:text-[17px] mt-[10px] montserrat font-normal text-center text_secondary">
              Embark on an adventure across the UK, find a soul-satisfying road
              trip, or visit a budget-friendly destination in 2024.
            </p>
          </div>

          {/* images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-3">
            {/* Image 1 */}
            <div className="relative h-auto">
              <img
                src="/birtin-1.webp"
                className="w-full h-full object-cover rounded-xl"
                alt="Hiking in the Dolomites"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-[5%] left-0 right-0 text-center text-white p-4">
                <h2 className="jost text-[17px] font-normal text-white">
                  25 Best Places To Visit In The UK For Dramatic Scenery &
                  Historic Charm
                </h2>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative h-auto">
              <img
                src="/birtin-2.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt="Hiking in Zermatt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-[5%] left-0 right-0 text-center text-white p-4 max-md:p-6 max-md:hover:text-[#006cff]">
                <h2 className="jost text-[17px] font-normal md:text-white">
                  Best Road Trips In The World For 2024
                </h2>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative h-auto">
              <img
                src="/birtin-3.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt="Hiking in Zermatt"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-[5%] left-0 right-0 text-center text-white p-4">
                <h2 className="jost text-[17px] font-normal text-white">
                  15 Exciting Places To Visit in 2024
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Image */}
      <div className="w-full">
        <img
          src="/fingbgImg.png"
          className="w-full transform scale-y-[-1]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Find;
