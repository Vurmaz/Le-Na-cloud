'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { belowToTopVariants } from '@/libs/variants'

export default function DescTitle({ data, color }) {

    const firstLetter = (data.name.split('-').join(' '))[0].toUpperCase()    
    const rest = (data.name.slice(1)).split('-').join(' ')

  return (
    <motion.h1 
        className='text-center text-3xl md:text-4xl lg:text-5xl text-bold mt-16
        md:[--y-from:100] md:[--y-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]
        ' 
        style={{ color:`var(--${color}` }}
        variants={belowToTopVariants}
        initial='initial'
        whileInView='onView'
        viewport={{ once:true }}
        transition={{ duration:0.5 }}
    >Peki {firstLetter + rest} ne işe yarar?</motion.h1>
  )
}
