import React from 'react'
  import Image from "next/image"
  import Link from 'next/link'
import HeroButton from './HeroButton'

export default function ServiceHero({ data, color }) {

  return (
        <div 
            style={{ background: `linear-gradient(0deg, var(--light) 0%, var(--${color}) 100%)` }} 
            className="grid grid-cols-1 md:grid-cols-2 h-max md:h-screen pt-16 md:pt-4"
        >
            <div className="flex flex-col gap-8 items-start md:items-start justify-start md:pt-32  px-8 text-[--text]">                
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-start text-white  '>{data.title}</h1>
                <p className='text-sm md:text-lg text-center md:text-base md:text-start'>{data.introduction}</p>
                <HeroButton />
            </div>
            <div className="mx-auto md:my-auto xl:my-0">
              <Image 
                  className='contain'
                  src='/service.png'
                  width={600}
                  height={600}
              />
            </div>
      </div>
  )
}
