import React from 'react'
import Image from 'next/image'
import HeroText from './HeroText'

export default function Hero() {
  return (
    <section id='home-home' className="h-auto md:h-screen"
        style={{
            backgroundImage: `url(/bg-1.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",                      
        }}    
    >
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-auto md:h-5/6 px-16'>
        <HeroText />
        <div className='relative h-80 md:h-auto '>
          <Image
            className='pt-4 md:pt-8' 
            src='/tele.png'
            fill
            style={{ objectFit:'contain' }}
            alt={'Salesforce'}                       
          />
        </div>
      </div>        
    </section>
  )
}
