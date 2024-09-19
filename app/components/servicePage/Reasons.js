'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function Reasons({ reason, color }) {

  return (
    <motion.div 
      className='p-2 md:p-4 w-5/6 flex flex-col gap-4 border-t-8 shadow-lg rounded-xl mx-auto max-w-[510px] sm:last:col-span-1 md:last:col-span-2 '
      style={{ borderColor:`var(--${color})`}}
      initial={{ opacity: 0, y:150 }}
      whileInView={{ opacity:1, y:0 }}
      transition={{ duration:0.5, ease:'easeInOut' }}
      viewport={{ once:true }}
    >
          <h6 
            className='text-base md:text-2xl font-bold'            
          >
            {reason.title}
          </h6>
          <p className='text-xs md:text-base'>{reason.description}</p>        
    </motion.div>
  )
}
