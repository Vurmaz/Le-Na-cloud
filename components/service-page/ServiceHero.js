import React from 'react'
import HeroButton from './HeroButton'
import ServiceHeroSvg from './ServiceHeroSvg'
import Svg from '../.././public/ai.svg'

export default function ServiceHero({ data, color }) {

  return (
        <div             
            className="grid grid-cols-1 md:grid-cols-2 h-max md:h-screen px-2 gap-4 md:gap-0 px-2 xl:px-32 pt-4"
        >
            <div className="flex flex-col gap-8 items-start md:items-start justify-center px-8 text-[--text]">                
                <h1 className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center md:text-start font-semibold  '>{data.title}</h1>
                <p className='text-sm md:text-base text-center md:text-base md:text-start'>{data.introduction}</p>
                <HeroButton color={color} />
            </div>
            <div style={{ color:`var(--${color}`}} className="mx-auto my-auto w-full">
              <ServiceHeroSvg 
                  Icon={Svg}                  
              />
            </div>
            
      </div>
  )
}
