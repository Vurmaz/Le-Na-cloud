import React from 'react'
import IconRenderer from '../IconRenderer'

export default function ImageIcons({ data }) {
    console.log(data)
  return (  
    <div 
        className='h-screen w-11/12 gap-4 lg:gap-8 flex flex-col md:flex-row items-center justify-center bg-image relative px-8 md:my-16'
        style={{
            backgroundImage: `url(/office-workers-2.jpg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",                      
        }}
    >
        {
            data.map((item, i)=> {   
                console.log(item)             
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
  )
}
