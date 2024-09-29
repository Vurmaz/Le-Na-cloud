import React from 'react'
import { motion } from 'framer-motion'
import SvgHolder from '../SvgHolder'
import dynamic from 'next/dynamic'

const LazySVG = dynamic(() => import('../.././public/ladder.svg'), {
  loading: () => <div className='bg-grey w-48 h-48'></div>,
})

export default function ReachUsImage({ color }) {
  return (
    <motion.div 
        className='' 
        style={{ color:`var(--${color})` }}
        initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.4 }}
        viewport={{ once:true }} 
    >
        <SvgHolder
            Icon={LazySVG}
            color={`var(--${color})`}
            alt='service' 
            className=''               
        />                
    </motion.div>
  )
}
