import React from 'react'
import Image from 'next/image'


export default function Card({ Icon, title, desc, color }) {
  
  return (
    <div className='flex flex-col gap-2 sm:gap-4 w-fit min-w-[169px] md:min-w-0 md:w-full p-4 border-2 border-slate-200 shadow-lg rounded-lg'>        
        <div 
          className={`p-2 rounded-lg`} 
          style={{ backgroundColor:`var(--dark-${color })`, color:`var(--${color })` }}
        >
          <Icon className={`w-8 h-8 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] mx-auto z-10 relative`} />
        </div>
        <h6 className='text-xs md:text-sm text-center text-[--text]'>{title}</h6>         
    </div>
  ) 
}
