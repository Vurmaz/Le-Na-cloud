import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutActionImage({ x }) {
  return (
    <motion.div 
        className='relative'
        viewport={{ once:true }}
        initial={{ opacity:0, x:x }}
        whileInView={{ opacity:1, x:0 }}
        transition={{
            duration:0.8,
            ease:'easeInOut'
        }}            
    >
        <Image 
            src={'/last2.jpg'}
            fill
            alt='takım'
            className='object-cover rounded-lg shadow-lg'
        />
    </motion.div>
  )
}
