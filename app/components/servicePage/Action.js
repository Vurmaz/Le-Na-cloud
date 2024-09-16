'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Action({ color, data }) {
    const name = (data.name.split('-').join(' ')).toUpperCase()
  return (
    <div 
        className='grid grid-cols-3 h-max md:h-96 w-11/12 md:w-5/6 lg:w-4/6 px-2 px-0 mx-auto rounded-xl shadow-lg'
        style={{             
            background: `linear-gradient(90deg, var(--${color}) 0%, rgba(230,245,251,1) 100%)` 
        }}
    >
        <div className='relative'>
            <Image  
                src={'/action.jpg'}
                fill               
                alt='action'
                className='object-contain md:object-cover'
            />            
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center p-4 gap-4'>
            <h2 className='text-xl md:text-4xl'>{name}</h2>
            <p className='text-xs md:text-base'>{data.conclusion.call_to_action} </p>
            <motion.button 
                className='text-xs md:text-base border-2 shadow-lg w-max py-2 px-4 rounded-lg'
                whileHover={{ backgroundColor:'var(--text)', color:'white'}}
            >Demo talep edin</motion.button>
        </div>
    </div>
  )
}
