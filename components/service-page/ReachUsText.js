'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ReachUsTextButton from './ReachUsTextButton'

export default function ReachUsText({ data, color }) {
  return (
    <motion.div 
        className='flex flex-col text-center md:text-start justify-center p-4 gap-2 md:gap-8'
        initial={{ opacity:0, x:100 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.4 }} 
        viewport={{ once:true }}               
    >
        <h2 className='text-3xl md:text-3xl lg:text-4xl text-bold' style={{ color:`var(--${color})` }}>Verimliliğinizi arttırın</h2>
        <p className='text-base md:text-lg lg:text-xl ' >{data.description}</p> 
        <ReachUsTextButton color={color} />
    </motion.div>
  )
}
