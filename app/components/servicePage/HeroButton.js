'use client'
import React from 'react'
import { motion } from 'framer-motion'


export default function HeroButton({ color }) {
  return (
        <motion.button             
            className='w-max md:w-2/6 bg-transparent p-2 rounded-lg text-black mx-auto md:mx-0 border-2 border-black outline-none'
            whileHover={{ backgroundColor:`var(--text)`, color:'white' }}
            onClick={()=>{
                let contact = document.getElementById('service-contact')
                contact.scrollIntoView({ behavior:'smooth' })
            }}
        >Mesaj atın 
        </motion.button>        
  )
}
