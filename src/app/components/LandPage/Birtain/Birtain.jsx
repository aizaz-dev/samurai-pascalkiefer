import React from "react";
import {Heading} from "../../Heading";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";

const Birtain = () => {
  return (
    <>
  
      <div className=" bg-[#f7f7f7]">
      <div className="w-full l">
   <img src="/birtainimg.png" className="w-full" alt="" />
   </div>
        <div className="max-w-[1400px] md:w-[90%] mx-auto mb-5 px-[20px] md:px-[30px] lg:px-[40px] py-[60px]">
          <div className="">
            {/* Text Part */}
            <div className="text text-center">
              <Link
                href="#"
                className="jost text-[15px] md:text-[17px] text-center font-medium text_blue"
              >
                BRITAIN
              </Link>
              <Heading
                text1={"See the best of London and beyond"}
                text2={"with our Britain guides "}
              />
              <p className="text-[17px] font-normal montserrat text_secondary py-[5px] lg:w-[50%] mx-auto text-center mb-[30px]">
                Enjoy the best experiences in some superb UK destinations along
                with our recommendations for where to stay.
              </p>
            </div>

            {/* Images1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
              <div className="relative h-auto">
                <img
                  src="/birtin-1.webp"
                  className="w-full h-full object-cover"
                  alt="Hiking in the Dolomites"
                />
                <div className="absolute bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 text-center text-white p-4">
                  <h2 className="jost text-[17px] font-normal text-white">
                    23 Best Things To Do In London (+ Map & Tips)
                  </h2>
                </div>
              </div>
              {/* img2 */}
              <div className="md:relative h-auto">
                <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />

                <img
                  src="/birtin-2.jpg"
                  className="w-full h-full object-cover max-md:hidden"
                  alt="Hiking in Zermatt"
                />
                <div className="md:absolute md:bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text_secondary md:text-white max-md:border-b p-4 max-md:p-6 max-md:hover:text-[#006cff] ">
                  <h2 className="jost text-[17px] font-normal md:text-white">
                    16 Best Things To Do In The Cotswolds (+ Map & Tips)
                  </h2>
                </div>
              </div>
              {/* img3 */}
              <div className="relative h-auto">
                <img
                  src="/birtin-3.jpg"
                  className="w-full h-full object-cover"
                  alt="Hiking in Zermatt"
                />
                <div className="absolute bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text-white p-4">
                  <h2 className="jost text-[17px] font-normal text-white">
                    19 Best Things To Do In Cornwall (+ Map & Tips)
                  </h2>
                </div>
              </div>
              {/* img4 */}
              <div className="relative h-auto">
                <img
                  src="/birtin-4.jpg"
                  className="w-full h-full object-cover"
                  alt="Hiking in Zermatt"
                />
                <div className="absolute bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text-white p-4">
                  <h2 className="jost text-[17px] font-normal text-white">
                    20 Best Things To Do In The Lake District (+ Map & Tips)
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" bg-[#E9E9E9] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px]">
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-4 py-[40px] ">
            {/* img5 */}
            <div className="md:relative h-auto">
              <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
              <img
                src="/birtin-5.webp"
                className="w-full h-full object-cover max-md:hidden"
                alt="Hiking in Zermatt"
              />
              <div className="md:absolute md:bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text_secondary md:text-white max-md:border-b p-4 max-md:hover:text-[#006cff]">
                <h2 className="jost text-[17px] font-normal md:text-white">
                  Best Places To Stay In London (2024 Area Guide) + Map
                </h2>
              </div>
            </div>
            {/* img6 */}
            <div className="relative h-auto">
              <img
                src="/birtin-6.jpg"
                className="w-full h-full object-cover"
                alt="Hiking in Zermatt"
              />
              <div className="absolute md:bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text-white p-4">
                <h2 className="jost text-[17px] font-normal text-white">
                  Best Places To Stay In The Cotswolds (2024 Area Guide) + Map
                </h2>
              </div>
            </div>
            {/* img7 */}
            <div className="md:relative h-auto">
              <TiArrowRight className="md:hidden text-3xl text_blue flex items-center justify-center w-full" />
              <img
                src="/birtin-7.jpg"
                className="w-full h-full object-cover max-md:hidden"
                alt="Hiking in Zermatt"
              />
              <div className="md:absolute md:bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text_secondary md:text-white max-md:border-b p-4 max-md:hover:text-[#006cff]">
                <h2 className="jost text-[17px] font-normal md:text-white">
                  Best Places to Stay in Cornwall (2024 Area Guide) + Map
                </h2>
              </div>
            </div>
            {/* img8 */}
            <div className="relative h-auto">
              <img
                src="/birtin-8.webp"
                className="w-full h-full object-cover"
                alt="Hiking in Zermatt"
              />
              <div className="absolute bg-gradient-to-t from-black to-transparent opacity-70 bottom-0 left-0 right-0 bg-black60 backd text-center text-white p-4">
                <h2 className="jost text-[17px] font-normal text-white">
                  Best Places To Stay In The Lake District (2024 Area Guide) +
                  Map
                </h2>
              </div>
            </div>
          </div>
   
        
        <div className="w-full">
      <img src="/birtainbg-2.png" className="w-full" alt="" />
          </div>
          </div>  
      </div>
    </>
  );
};

export default Birtain;
