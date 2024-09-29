import React from 'react'
import { motion } from 'framer-motion'
import SvgHolder from '../SvgHolder'
import Svg from '../.././public/ladder.svg'

export default function ReachUsImage({ color }) {
  return (
    <motion.div 
        className='' 
        style={{ color:`var(--${color})` }}
        initial={{ opacity:0, x:-200 }}
        whileInView={{ opacity:1, x:0 }}
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
