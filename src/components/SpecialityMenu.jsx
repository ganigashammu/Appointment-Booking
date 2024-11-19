import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex  flex-col items-center gap-4 py-16 text-gray-800 ' id ='speciality'>
      <h1 className='text-3xl font-medium'>
        Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>  
            Browse through our extensive list of trsuted doctors, schedule your appointment free
            <div className='flex sm:justify-center gap-4 pt-5 w-full '>
                {specialityData.map((item,index)=>(
                    <Link onClick={()=>window.scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:scale-105 transition-all duration-500 gap-2' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-24 sm:w-24 mb-2' src ={item.image}/>
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </p>
      
    </div>
  )
}

export default SpecialityMenu
