import React from 'react'
import IconRenderer from '../IconRenderer'
import Image from 'next/image'

export default function ImageIcons({ data }) {
    
  return (  
    <div 
        className='h-screen w-full relative'
    >
        <Image
            src="/office-workers-2.jpg"
            alt="Projelerimiz"
            fill          
            className="z-0 object-center object-cover"
        />   
        <div className='gap-4 lg:gap-8 flex flex-col md:flex-row items-center justify-center bg-image relative px-8 md:my-16'> 
        {
            data.map((item, i)=> {                               
                return (
                    <div 
                        key={i}
                        className='flex flex-col text-[--light] justify-center items-center text-center gap-2 z-10'
                    >
                        <IconRenderer iconName={item.icon} className='md:w-16 md:h-16 w-12 h-12' />
                        <h2 className='text-sm text-lg font-semibold'>{item.name}</h2>
                        <p className='text-xs text-bse'>{item.desc}</p>
                    </div>                    
                )
            })
        }
        </div> 
    </div>   
  )
}
