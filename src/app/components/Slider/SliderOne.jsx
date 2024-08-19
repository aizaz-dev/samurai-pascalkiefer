'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/Samurai/img3.png',
    '/Samurai/img4.png',
    '/Samurai/img6.png',
    '/Samurai/img7.png',
    '/Samurai/img8.png',
    '/Samurai/3.png',

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    nextArrow: <FaCaretRight />,
    prevArrow: <FaCaretLeft />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="relative mt-[40px]">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div 
              key={index}
              className="px-2 flex justify-center items-center"
            >
              <img
                className="h-[150px] max-md:m-auto p-[20px] object-contain cursor-pointer"
                src={src}
                alt={`Image ${index + 1}`}
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-4 text-white">
          {`${currentIndex + 1} of ${images.length}`}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            <FaCaretLeft />
          </button>
          <div className="relative">
            <img
              className="max-w-[90%] max-h-[90%] object-contain"
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
            <div className="absolute right-0 -bottom-7 text-white text-sm bg-opacity-50 px-2 py-1">
              {`${currentIndex + 1} of ${images.length}`}
            </div>
          </div>
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            <FaCaretRight />
          </button>
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default SliderOne;
