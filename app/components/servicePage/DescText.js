'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function DescText({ data }) {

    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '144%'])

  return (
        <motion.div 
            style={{ y }} 
            className='w-5/6 mx-auto h-screen  px-8  flex justify-start items-start'
        >
            <p className='text-xl md:text-3xl lg:text-4xl text-center' >{data.description}</p>
        </motion.div>
  )
}
