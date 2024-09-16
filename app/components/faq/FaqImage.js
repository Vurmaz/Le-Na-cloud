import React from 'react'
import ServiceHeroSvg from '../servicePage/ServiceHeroSvg'
import Svg from '../../../public/questions.svg'

export default function FaqImage({ color }) {
    
  return (
    <div className='flex items-center justify-start' style={{ color:`var(--${color})`}}>
        <ServiceHeroSvg 
            Icon={Svg}
            color={`var(--${color})`}
            alt='SSS'                         
        />
    </div>
  )
}
