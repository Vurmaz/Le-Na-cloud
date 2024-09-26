'use client'
import React, { useState } from 'react'
import ContactForm from './Form'
import FormText from './FormText'
import { motion } from 'framer-motion'
import Toaster from '../Toast'

export default function Contact({ id, color }) {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id={id} className='h-max md:h-screen grid grid-cols-1 md:grid-cols-2 p-8 gap-2 '>
        <motion.div 
          className=' flex items-center justify-center my-auto'
          initial={{ y:100, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, ease:'easeInOut' }}

        >
            <FormText />
        </motion.div>
        <motion.div 
          className='my-auto'
          initial={{ y:100, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          viewport={{ once:true }} 
          transition={{ duration:0.6, ease:'easeInOut', delay:0.2 }}       
        >
            <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} color={color} />
        </motion.div>
        <Toaster isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
