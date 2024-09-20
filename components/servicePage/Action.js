'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Action({ color, data }) {
    const name = (data.name.split('-').join(' ')).toUpperCase()
  return (
    <motion.div 
        className='grid grid-cols-3 h-max md:h-[75vh] w-full px-2 px-0 mx-auto rounded-xl shadow-lg'
        style={{             
            background: `linear-gradient(90deg, var(--${color}) 0%, rgba(230,245,251,1) 100%)` 
        }}
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:0.5, ease:'easeInOut', delay:0.2 }}
        viewport={{ once:true }}
    >
        <div className='relative'>
            <Image  
                src={'/action.jpg'}
                fill               
                alt='action'
                className='object-contain md:object-cover rounded-lg'
            />            
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center p-4 gap-4 md:gap-8'>
            <h2 className='text-xl md:text-5xl text-center font-semibold'>Hemen iletişime geçin size yardım edelim</h2>
            <p className='text-xs md:text-base w-full md:w-5/6'>{data.conclusion.call_to_action} </p>
            <motion.button 
                className='text-xs md:text-lg border-2 shadow-lg w-max py-2 px-4 rounded-lg'
                whileHover={{ backgroundColor:'var(--text)', color:'white'}}
                onClick={()=>{
                    let contact = document.getElementById('service-contact')
                    contact.scrollIntoView({ behavior:'smooth' })
                }}                 
            >Demo talep edin</motion.button>
        </div>
    </motion.div>
  )
}
