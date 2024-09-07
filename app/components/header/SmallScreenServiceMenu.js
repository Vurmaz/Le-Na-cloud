import React from 'react'
import IconRenderer from '../IconRenderer'
import { motion } from 'framer-motion'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function SmallScreenServiceMenu({ data, setIsOpen }) {
  return (
    <motion.div
      className='flex flex-col items-start justify-start text-[--text] w-full h-full gap-2 p-2 left-0 right-0 bottom-0 top-20 overflow-hidden	bg-[--light] fixed zk z-100 origin-left' 
      initial={{ scaleX:0 }}
      animate={{ scaleX:1 }}
      exit={{ scaleX:0 }}
      transition={{
        duration:0.5, ease:'easeInOut'
      }}      
    >
      <motion.div 
        className='flex items-center cursor-pointer w-full p-2'
        whileHover={{
          translateY:-8
        }}
        onClick={()=>setIsOpen(false)}
      >
        <MdOutlineKeyboardArrowLeft className='w-12 h-12 ' />  
        <h6>Geri Dön</h6>
      </motion.div>
      
        {
          data.map((item, i) => {
            return(
              <motion.div 
                key={i}
                className='flex gap-4 p-2 text-lg cursor-pointer w-full rounded-lg'
                whileHover={{
                  backgroundColor:'var(--text)',
                  color:'var(--light)'
                }}
              >
                <IconRenderer iconName={item.Icon} color={item.color} className='w-8 h-8' />
                <h6>{item.name}</h6>
              </motion.div>
            )
          })
        }
        
    </motion.div>
  )
}
