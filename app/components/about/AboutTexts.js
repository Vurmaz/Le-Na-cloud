'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export default function AboutTexts({ item }) {

    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, 600])    
  return (
    <motion.div         
        className='flex flex-col gap-4 h-[65vh] md:h-screen leading-loose'
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.5, delay:0.2 }}
        viewport={{ once:true }}
        style={{ y }}

    >
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-center text-gradient p-2'>{item.title}</h1>
        <p className='w-full md:w-4/6 text-center mx-auto text-xs sm:text-lg md:text-xl '>{item.desc}</p>
    </motion.div> 
  )
}
