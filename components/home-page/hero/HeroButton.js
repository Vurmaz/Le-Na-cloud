'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroButton() {
  return (
    <motion.button 
        className='mx-auto md:mx-0 bg-[--primary] text-sm sm:text-base py-2 px-4 sm:px-8 rounded-full text-white shadow w-4/6 sm:w-3/6 lg:w-2/6 whitespace-nowrap'
        whileHover={{
        backgroundColor:'var(--hovered)'
        }}
        onClick={() => {
            let contact = document.getElementById('home-contact')
            contact.scrollIntoView({ behavior:'smooth' })
        }}
    >Demo Talebi</motion.button>
  )
}
