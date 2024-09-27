'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutVision({ item }) {
  
  return ( 
    <div className='grid grid-cols-3 gap-8 md:px-4 lg:px-32 h-auto md:h-max py-4 md:py-32'>
      <motion.div 
        className='flex justify-start p-4'
        viewport={{ once:true }}
        initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{
          duration:0.6,
          ease:'easeInOut'
        }}
      >
        <h1 className='text-lg md:text-4xl text-gradient'>{item.title}</h1>        
      </motion.div>
      <motion.div 
        className='col-span-2 p-4'
        viewport={{ once:true }}
        initial={{ opacity:0, y:200 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{
          duration:0.6,
          ease:'easeInOut'
        }}        
      >
        <p className='text-xs md:text-base md:leading-loose'>{item.desc}</p>
      </motion.div>
    </div>
  )
}
