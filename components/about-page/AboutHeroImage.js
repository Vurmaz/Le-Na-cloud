import React from 'react'
import Image from 'next/image'

export default function AboutHeroImage() {
  return (

    <div className='relative w-11/12 md:w-5/6 aspect-[30/13] mx-auto overflow-hidden md:translate-y-[-35%] rounded-lg shadow-lg'>
        <Image 
            src='/about.jpg'                    
            alt='about'
            fill
            className='object-contain '
        />                     
    </div>
  )
}
