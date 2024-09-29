import React from 'react'
import Image from 'next/image'

export default function ActionImage() {
  return (
        <div className='relative'>
            <Image  
                src={'/action.jpg'}
                fill               
                alt='İletişime geçin'
                className='object-contain md:object-cover rounded-lg'
            />            
        </div>
  )
}
