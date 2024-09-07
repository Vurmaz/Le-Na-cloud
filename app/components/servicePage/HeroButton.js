'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroButton() {
  return (
        <motion.button 
            className='w-2/6 bg-[--text] p-2 rounded-lg text-white mx-auto md:mx-0'
            whileHover={{ translateY:-10 }}
            onClick={()=>{
                let contact = document.getElementById('service-contact')
                contact.scrollIntoView({ behavior:'smooth' })
            }}
        >Mesaj atın 
        </motion.button>        
  )
}
