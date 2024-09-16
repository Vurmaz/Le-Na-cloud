import React from 'react'
import Image from 'next/image'
import HeroText from './HeroText'
import HeroImages from './HeroImages'


export default function Hero() {
  return (
    <section id='home-home' className="h-auto md:h-screen"
        style={{
            backgroundImage: `url(/bg-1.png)`,  // coming from public folder
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",                      
        }}    
    >
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-auto md:h-4/6 px-16'>
        <HeroText />
        <div className='relative h-80 sm:h-96 md:h-auto '>
          <Image
            className=''
            src='/tele.png'
            fill
            style={{ objectFit:'contain' }}
            alt='Salesforce'
            
          />
        </div>
      </div>
{/*       <div className='bg-[--light] mt-12'>
        <HeroImages />
      </div> */}
        
    </section>
  )
}
