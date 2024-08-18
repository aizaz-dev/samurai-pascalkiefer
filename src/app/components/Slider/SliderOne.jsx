import React from 'react';
import Marquee from 'react-fast-marquee';

const SliderOne = () => {
  return (
    <Marquee
      speed={30}
      direction="right"
      pauseOnHover={true}
      gradientColor={[255, 213, 0]}
      className='flex mt-[40px]'
    >
      
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img2.png" alt="alt" />
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img3.png" alt="alt" />
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img4.png" alt="alt" />
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img6.png" alt="alt" />
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img7.png" alt="alt" />
      <img className='w-[100px] sm:w-[120px] md:w-[140px] xl:w-[188px] h-auto pr-[50px]' src="/Samurai/img8.png" alt="alt" />
      
    </Marquee>
  );
};

export default SliderOne;
