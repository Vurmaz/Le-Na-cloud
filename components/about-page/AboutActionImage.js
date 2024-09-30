import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutActionImage({ variants, classes }) {
  return (
    <motion.div 
        className={`relative ${classes}`}
        viewport={{ once:true }}
        variants={variants}
        initial='initial'
        whileInView='onView'
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
