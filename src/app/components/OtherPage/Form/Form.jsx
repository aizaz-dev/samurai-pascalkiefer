'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full lg:px-[30px] my-[60px]">
      <div className="mb-4">
        <h2 className='jost font-bold text_primary text-[19px] md:text-[21px] lg:text-[23px] mb-[20px]'>LEAVE A COMMENT </h2>
        <label htmlFor="comment" className="montserrat text-[15px] md:text-[16px] lg:text-[18px] text_primary mb-4">
          Your email address will not be published.
        </label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
         
          className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
          rows="5"
        ></textarea>
      </div>

      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label htmlFor="name" className="montserrat text-[15px] md:text-[16px] lg:text-[18px] text_primary mb-4">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label htmlFor="email" className="montserrat text-[15px] md:text-[16px] lg:text-[18px] text_primary mb-4">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
            className="form-checkbox"
          />
          <Link href={"#"} className="ml-2 text-sm text_primary">Save my name, email, and website in this browser for the next time I comment.</Link>
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#ececec] text_primary text-[15px] jost font-[400] py-2 px-4 rounded outline-none"
      >
        Post Comment
      </button>
    </form>
  );
};

export default Form;
