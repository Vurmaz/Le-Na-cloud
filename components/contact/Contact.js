'use client'
import React from 'react'
import ContactForm from './Form'
import FormText from './FormText'
import { motion } from 'framer-motion'

export default function Contact({ id }) {
  
  return (
    <div id={id} className='h-max md:h-screen grid grid-cols-1 md:grid-cols-2 p-8 gap-2 '>
        <motion.div 
          className=' flex items-center justify-center my-auto'
          initial={{ x:-200, opacity:0 }}
          whileInView={{ x:0, opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, ease:'easeInOut', delay:0.1 }}

        >
            <FormText />
        </motion.div>
        <motion.div 
          className='my-auto'
          initial={{ x:200, opacity:0 }}
          whileInView={{ x:0, opacity:1 }}
          viewport={{ once:true }} 
          transition={{ duration:0.6, ease:'easeInOut', delay:0.1 }}       
        >
            <ContactForm />
        </motion.div>
    </div>
  )
}
