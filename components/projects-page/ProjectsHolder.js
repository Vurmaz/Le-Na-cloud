import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsHolder({ data }) {
  return (
    <div className='h-max md:h-screen '>
        <h1 className='text-center text-2xl md:text-5xl pt-4 pb-8 text-gradient font-semibold'>Müşterilerimize hazırladığımız projelerimiz</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-4 '>        
            {
            data.map((item, i)=> {
              return(
                  <div
                    key={i}
                    className='p-2 sm:p-4 md:p-8 flex flex-col gap-2 text-center justify-center rounded-lg shadow-xl z-10 w-5/6 mx-auto bg-[--light] text-[--text]'
                  >
                    <Image 
                        src={`/${item.url}.png`}    
                        width={320}
                        height={180}   
                        className='mx-auto px-4'     
                        alt={item.name} 
                    />
                    <h5 className='text-xl md:text-2xl '>{item.name}</h5>
                    <h6 className='text-base md:text-lg font-bold '>{item.title}</h6>
                    <p className='line-clamp-3 w-4/6 mx-auto'>{item.desc}</p>
                    <Link href={`/projects/${item.id}`} className='text-black underline'>Devamına göz atın</Link>
                  </div>
              )
              }) 
              }          
        </div>        
    </div>

  )
}
