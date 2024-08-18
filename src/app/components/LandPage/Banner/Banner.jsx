import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className=' my-[80px] '>
     <Link href={"#"} className="relative h-auto flex items-center justify-center ">
          <img
            src="/man.webp"
            className="w-full md:h-[630px] object-cover  "
            alt="Road Trip"
          />
          <div className="absolute top-[0%] md:translate-y-[50%]   max-w-[1400px] mx-auto mt-[20px] left-0  right-[0%]   text-white p-4 z-10">
            <div>
              <ul className="jost text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white w-[90%] mx-auto list-none">
                <li className='mt-[10px]'><Link href={"#"} className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>CURIOUS</Link></li>
                <li className='mt-[10px]'><Link href={"#"}  className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>ADVERNTURE</Link></li>
                <li className='mt-[10px]'><Link href={"#"}  className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>WILD LIFE</Link></li>
                <li className='mt-[10px]'><Link href={"#"}  className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>SCENERY</Link></li>
                <li className='mt-[10px]'><Link href={"#"}  className='montserrat text-[16px] sm:text-[19px] md:text-[22px] font-normal text-white hover:text-[#006cff]'>HIKING</Link></li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
  )
}

export default Banner
