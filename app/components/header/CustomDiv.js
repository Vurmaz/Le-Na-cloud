'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function CustomDiv({ title, Icon, setIsOpen, ...props }) {
  return (
    <motion.div
        className='mt-4 flex items-center justify-between w-full p-2 cursor-pointer h-[70px] rounded-lg'
        whileHover={{ translateY:-10 }}
        onClick={()=> title = 'Servislerimiz' ? setIsOpen(true) : ''}
    >
        <h6>{title}</h6>
        {
            Icon
            &&
            <Icon className='w-[52px] h-[52px]' />
        }
    </motion.div>
  )
}
