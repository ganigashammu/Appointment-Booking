import React from 'react' 
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm'> 
        {/* Left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Connecting you with trusted healthcare professionals for seamless and secure appointments. Experience reliable, convenient access to top doctors and take a step towards better health.
          </p>
        </div>
        
        {/* Center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>987654321</li>
            <li>shamanth@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
