import React from 'react';
import Link from 'next/link';
import { TbLocation } from "react-icons/tb";


const CircleButton = () => {
  return (
    <div className='max-w-[1400px] mx-auto '>
        <div className='bg-[#f7f7f7] px-[80px] pt-[60px]'>
            <div className='flex justify-center items-center'>
                <Link href={"#"} className='bg-[#303133] p-3 text-white rounded-full border-l border-r'><TbLocation className="text-2xl" />
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default CircleButton
