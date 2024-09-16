'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ReachMe() {


  return (
    <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full rounded-lg gap-8 h-max md:h-72 p-4 py-16 md:py-0 text-white mx-auto bg-[--light] shadow-lg'        
        initial={{
            y:300,
            opacity:0
        }}
        whileInView={{
            y:0,
            opacity:1
        }}
        viewport={{ once:true }}
        transition={{ duration:0.4, ease:'easeInOut', delay:0.1 }}
        
    >
        <div className='relative h-48 sm:h-56 md:h-64 lg:h-auto my-0 md:my-auto lg:my-0'>
            <Image 
                src={'/reach.png'}
                fill
                alt='reach'
                className='object-contain'
            />
        </div>    
        <div className='flex flex-col justify-center items-center col-span-2 gap-4 md:gap-2'>            
            <h6 className='text-3xl lg:text-4xl p-0 md:p-4 text-center text-center md:text-start text-[--primary] '>Detaylı bilgi için hemen iletişime geçin</h6>        
            <motion.button 
                className='text-xs md:text-sm p-4 rounded-lg text-center md:text-start w-max cursor-pointer text-[--primary] border-2 border-[--text] outline-none ml-4'
                whileHover={{
                    color:'var(--light)',
                    backgroundColor:'var(--primary)',
                    borderColor:'var(--light)'
                }}
                onClick={()=> {
                    const contact = document.getElementById('home-contact')
                    contact.scrollIntoView({ behavior:'smooth' })
                }}            
            >   Demo Talep edin
            </motion.button>            
        </div>

    </motion.div>
  )
}
