import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-10 mb-28 text-sm'>
        <img className='w-full md:w-1/3 lg:max-w-[360px] flex-shrink-0' src={assets.contact_image} alt="Contact" />
        <div className='flex flex-col gap-6 md:w-2/3'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-600 text:lg'>KuntalGudde <br /> Bajal, Mangalore</p>
          <p className='text-gray-600 text-md'>Phone: 87268628 <br />Email: shamanth@gmail.com</p>
          <p className='text-gray-600 font-semibold text-lg'>Careers at PRESCRIPTO</p>
          <p className='text-gray-600'>LEARN MORE ABOUT OUR TEAMS AND JOB OPENINGS</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>EXPLORE JOBS</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
