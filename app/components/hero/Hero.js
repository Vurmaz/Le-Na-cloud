import React from 'react'
import Image from 'next/image'
import HeroText from './HeroText'
import HeroImages from './HeroImages'


export default function Hero() {
  return (
    <section id='home-home' className="h-auto md:h-screen">
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 h-4/6'>
        <HeroText />
        <div className='relative h-80 sm:h-96 md:h-auto'>
          <Image
            className=''
            src='/newone.png'
            fill
            style={{ objectFit:'contain' }}
            alt='Salesforce'
            
          />
        </div>
      </div>
        <HeroImages />
    </section>
  )
}
