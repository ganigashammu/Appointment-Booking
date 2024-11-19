import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className="w-full md:max-w-[360px]" src ={assets.about_image}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto your Trusted Partner in Managing Healthcare Needs Covieniently And Efficiently.At Prescripto we understand the challenges individuals face when it comes to scheduling Doctor appointments and Managing their Healthcare records</p>
          <p>Prescripto is commited to excellence in Healthcare Tehncilogy. We Continously strive to enchance our platform, Integrating the latest advancements to improve user Experience and Deliver Superior Service whether you are booking your First appoitnment or Managing ongoing care, Prescripto is here to supoort you every step of the way</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision at prescripto is to create a seamless Healthcare Experience for every user. We Aim to bridge the Gap between patients and Healthcare Providers, Making it Easieer for you to access the care you needm when you need</p>
        </div>
      </div>
      <div>
        <p>WHY <span className='text-gray-700 font-semibold '> CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICIENCY</b>
          <p>Streamlined appointment scheduling that fits into your busy LifeStyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE</b>
        <p>Access to a network of trsuted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  )
}

export default About
