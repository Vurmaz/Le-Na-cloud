'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroText() {
  return (
    <div className='w-full h-auto text-black flex flex-col gap-4 justify-center md:pl-8  xl:pl-16 md:mt-16'>        
        <h1 className='text-center text-3xl  sm:text-4xl xl:text-5xl mt-4 md:text-left text-gradient py-2' >Dijital dönüşüm ile işinizi dönüştürün</h1>
        <p className='mx-auto md:mx-0 text-center text-xs sm:text-base w-5/6 md:text-left leading-relaxed	'> Salesforce gücünüzü maksimuma çıkarın
          verimliliğinizi artırın, büyümenizi hızlandırın.
          Salesforce yönetiminde uzman ekibimizle, iş süreçlerinizi optimize edin, müşteri ilişkilerinizi güçlendirin ve dijital dönüşümünüzü hızlandırın. Le-Na Cloud ile işinizi bulutun ötesine taşıyın.
        </p>        
        <motion.button 
          className='mx-auto md:mx-0 bg-[--primary] text-xs sm:text-base py-2 px-4 sm:px-8 rounded-full text-white shadow w-4/6 sm:w-3/6 lg:w-2/6 whitespace-nowrap	'
          whileHover={{
            backgroundColor:'var(--hovered)'
          }}
          onClick={() => {
            let contact = document.getElementById('home-contact')
            contact.scrollIntoView({ behavior:'smooth' })
          }}
        >Demo Talebi</motion.button>
    </div>
  )
}
