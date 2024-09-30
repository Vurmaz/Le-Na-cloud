import React from 'react'
import { motion } from 'framer-motion'
import SvgHolder from '../SvgHolder'
import Svg from '../.././public/ladder.svg'
import { leftToRightVariants } from '@/libs/variants'

export default function ReachUsImage({ color }) {
  return (
    <motion.div 
        className='md:[--x-from:-100] md:[--x-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]' 
        style={{ color:`var(--${color})` }}
        variants={leftToRightVariants}
        initial='initial'
        whileInView='onView'
        transition={{ duration:0.4 }}
        viewport={{ once:true }} 
    >
        <SvgHolder
            Icon={Svg}
            color={`var(--${color})`}
            alt='service' 
            className=''               
        />                
    </motion.div>
  )
}
