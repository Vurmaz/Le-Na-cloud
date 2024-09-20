import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import IconRenderer from '../IconRenderer';

export default function ServiceCard({ name, Icon, desc, color }) {
    const href = (name.split(' ').join('-')).toLowerCase()
    
  return (
    <motion.div 
      className='cursor-pointer flex flex-col gap-4 w-5/6 p-4 h-64 md:h-72 max-w-[320px] shadow-xl mx-auto border-radiuses border-t-8 border-2 justify-evenly sm:last:col-span-2 md:last:col-span-1 z-20'    
      style={{  color:`var(--${color})`, borderColor:`var(--${color})` }} 
      initial={{ y:300, opacity:0 }}
      whileInView={{ y:0, opacity:1 }}
      viewport={{ once:true }}
      whileHover={{        
        translateY:-20,        
      }}
      transition={{
        duration:0.6,
        ease:'easeInOut',
        delay:0.2,
        translateY: { 
          duration:0.3,
          ease:'linear',                 
        }
      }}
    > 
      <Link href={`/services/${href}`} className='flex flex-col h-full justify-between' >
        <div className='bg-white w-max p-4 rounded-full mx-auto tp'>
          <IconRenderer iconName={Icon} className={`w-12 h-12 lg:w-16 lg:h-16 `} />
        </div>          
          <h6 className='text-2xl sm:text-xl md:text-xl lg:text-4xl text-center'>{name}</h6>
          <p className='text-[--text] text-sm sm:text-sm lg:text-base text-center'>{desc}</p>                  
      </Link>        
    </motion.div>
  )
}
