'use client'
import React from 'react'
import ServiceHeroSvg from '../service-page/ServiceHeroSvg'
import Svg from '../.././public/questions.svg'
import { motion } from 'framer-motion'

export default function FaqImage({ color }) {
    
  return (
    <motion.div 
      className='flex w-5/6 sm:w-full md:h-screen mx-auto' 
      style={{ color:`var(--${color})`}}
      initial={{ x:-200, opacity:0 }}
      whileInView={{ x:0, opacity:1 }}
      transition={{ duration:0.5, ease:'easeInOut' }}
      viewport={{ once:true }}
    >
        <ServiceHeroSvg 
            Icon={Svg}
            color={`var(--${color})`}
            alt='SSS'                                   
        />
    </motion.div>
  )
}
