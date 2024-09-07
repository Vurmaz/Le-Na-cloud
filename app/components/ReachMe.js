'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ReachMe() {


  return (
    <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-2 w-5/6 lg:w-4/6 rounded-lg gap-8 h-max md:h-96 p-4 py-16 md:py-0 text-white mx-auto bg-[--primary] shadow-lg'        
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
        <div className='relative h-48 sm:h-56 md:h-64 lg:h-auto'>
            <Image 
                src={'/reach.png'}
                fill
                alt='reach'
                className='object-contain'
            />
        </div>    
        <div className='flex flex-col justify-center'>
            <h6 className='text-3xl lg:text-4xl p-0 md:p-4 text-balance text-center md:text-start md:leading-loose'>Bize ulaşın size en uygun çözümü sunalım</h6>
            <motion.h6 
                className='underline text-sm md:text-base p-4 rounded-lg text-center md:text-start bg-transparent text-white w-full cursor-pointer'
                whileHover={{
                    color:'var(--text)',
                    translateY:-5
                }}
                onClick={()=> {
                    const contact = document.getElementById('home-contact')
                    contact.scrollIntoView({ behavior:'smooth' })
                }}            
            >   Demo Talep edin
            </motion.h6>            
        </div>

    </motion.div>
  )
}
