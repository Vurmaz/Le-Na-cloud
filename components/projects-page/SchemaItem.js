'use client'
import React from 'react'
import { motion } from 'framer-motion'
import IconRenderer from '../IconRenderer';
import { belowToTopVariants } from '@/libs/variants';

export default function SchemaItem({ item }) {
  return (
    <motion.div 
        className='flex gap-4 shadow-lg border-2 p-2 rounded-lg bg-[--light]
        md:[--y-from:100] md:[--y-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]
        ' 
        key={item.id}
        variants={belowToTopVariants}
        initial='initial'
        whileInView='onView'
        viewport={{ once:true }}
        transition={{ duration:0.4, ease:'easeInOut' }}
    >
        <div 
            className='flex items-center flex-col gap-2'
            style={{ color:`var(--${item.color}`} }
        >
            <IconRenderer iconName={item.icon} className='md:w-16 md:h-16 w-12 h-12 text-[--primary]' />
            <h6 className='text-sm md:text-lg font-semibold'>{item.step}</h6>
            <h1 className='text-sm md:text-xl text-[--primary]'>{item.title}</h1>
            <p className='text-sm text-[--text]'>{item.desc}</p>
        </div>                               
    </motion.div>   
  )
}
