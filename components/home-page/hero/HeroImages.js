import React from 'react'
import Image from 'next/image'

export default  function HeroImages() {
  
  return (
    <div className='relative h-80 md:h-auto '>
      <Image
        className='pt-4 md:pt-8' 
        src='/tele.png'
        fill
        style={{ objectFit:'contain' }}
        alt='Salesforce'      
        priority                 
      />
    </div>
  )
}
