import React from 'react'
  import Image from "next/image"
  import Link from 'next/link'
import HeroButton from './HeroButton'

export default function ServiceHero({ data, color }) {

  return (
        <div 
            style={{ background: `radial-gradient(circle, var(--${color}) 0%, rgba(230,245,251,1) 100%)`}} 
            className="grid grid-cols-1 md:grid-cols-2 h-max md:h-screen pt-16 md:pt-4 px-2 gap-4 md:gap-0 px-2 xl:px-32 bg-[--slack]"
        >
            <div className="flex flex-col gap-8 items-start md:items-start justify-start md:pt-32  px-8 text-[--text]">                
                <h1 style={{ }} className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start font-semibold  '>{data.title}</h1>
                <p className='text-sm md:text-base text-center md:text-base md:text-start'>{data.introduction}</p>
                <HeroButton color={color} />
            </div>
            <div className="mx-auto my-auto w-full md:my-auto xl:my-0 md:pt-16">
              <Image 
                  className='contain'
                  src='/hero.svg'
                  width={600}
                  height={600}
              />
            </div>
            
      </div>
  )
}
