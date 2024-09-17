'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Svg from '../../public/talk.svg'
import ServiceHeroSvg from './servicePage/ServiceHeroSvg'

export default function ReachMe() {


  return (
    <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full rounded-lg md:gap-8 h-max p-4 text-white mx-auto bg-[--light] shadow-lg'        
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
        <div className='h-48 sm:h-56 md:h-64 lg:h-auto my-0 md:my-auto lg:my-0 mx-auto'>
            <ServiceHeroSvg 
                Icon={Svg}
            />
        </div>    
        <div className='flex flex-col justify-center items-center col-span-2 gap-4 md:gap-12'>            
            <h6 className='text-2xl lg:text-4xl p-0 md:p-4 text-center text-[--primary] '>Detaylı bilgi için hemen iletişime geçin</h6>        
            <motion.button 
                className='text-xs md:text-base p-4 rounded-lg text-center md:text-start w-max cursor-pointer bg-[--primary] shadow-lg outline-none ml-4'
                whileHover={{
                    color:'var(--light)',
                    backgroundColor:'var(--text)'                    
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
