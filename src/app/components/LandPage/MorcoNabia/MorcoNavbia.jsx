import React from 'react';
import Link from 'next/link';

const MorcoNavbia = () => {
  return (
    <div className='my-[60px]'>
      <Link href={"#"} className="relative h-auto">
        <img
          src="/lion.jpg"
          className="w-full h-[290px] object-cover"
          alt="Road Trip"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute top-0 mt-[20px] left-0 right-0 text-white p-4 z-10 max-w-[1400px] mx-auto w-[90%]">
          <div>
            <ul className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white list-none">
              <li className='mt-[10px]'>
                <Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>MOROCOO</Link>
              </li>
              <li className='mt-[10px]'>
                <Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>TURKEY</Link>
              </li>
              <li className='mt-[10px]'>
                <Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>SOUTH AFRICA</Link>
              </li>
              <li className='mt-[10px]'>
                <Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>ITALY</Link>
              </li>
              <li className='mt-[10px]'>
                <Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>SWITZERLAND</Link>
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MorcoNavbia;
