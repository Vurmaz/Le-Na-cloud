'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function AboutTexts({ item }) {
      
  return (
    <motion.div         
        className='flex flex-col gap-4 h-max md:h-[65vh] leading-loose'
        initial={{ y:200 }}
        whileInView={{ y:0 }}
        transition={{ duration:0.5 }}
        viewport={{ once:true }}
    >
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-center text-gradient p-2'>{item.title}</h1>
        <p className='w-full md:w-4/6 text-start mx-auto text-xs sm:text-base md:text-base xl:text-xl '>{item.desc}</p>
    </motion.div> 
  )
}
