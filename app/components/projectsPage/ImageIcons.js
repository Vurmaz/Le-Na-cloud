import React from 'react'

import IconRenderer from '../IconRenderer';


export default function ImageIcons({ principles }) {



  return (
    <div 
        className='h-screen  gap-8 flex items-center justify-center bg-image relative'
        style={{
            backgroundImage: `url(/office-workers-2.jpg)`,  // coming from public folder
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",                      
        }}
    >
        {
            principles.map((item, i)=> {
                return (
                    <div 
                        key={i}
                        className='flex flex-col text-[--light] justify-center items-center text-center gap-2 z-10'
                    >
                        <IconRenderer iconName={item.icon} className='w-16 h-16' />
                        <h2>{item.name}</h2>
                        <p>{item.desc}</p>
                    </div>
                    
                )
            })
        }
    </div>   
  )
}
