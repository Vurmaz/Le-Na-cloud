'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function DescTitle({ data, color }) {

    const firstLetter = (data.name.split('-').join(' '))[0].toUpperCase()    
    const rest = (data.name.slice(1)).split('-').join(' ')
  return (
    <motion.h1 
        className='text-center text-3xl md:text-4xl lg:text-5xl text-bold mt-16' 
        style={{ color:`var(--${color}` }}
        initial={{ y:200, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        viewport={{ once:true }}
        transition={{ duration:0.5 }}
    >Peki {firstLetter + rest} ne işe yarar?</motion.h1>
  )
}
