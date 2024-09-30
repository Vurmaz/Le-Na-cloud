'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { leftToRightVariants } from '@/libs/variants'

export default function InfoCardInfo() {
  return (
    <motion.div 
        className='hidden md:flex flex-col items-start w-5/6 mx-auto justify-center gap-4
        md:[--x-from:-100] md:[--x-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]
        '
        variants={leftToRightVariants}
        initial='initial'
        whileInView='onView'
        viewport={{ once:true }}
        transition={{
            duration:0.5,
            ease:'easeInOut',
            delay:0.2
        }}       
    >     
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mx-auto md:mx-0 text-[--primary]'>Sorunlarınızı Çözelim</h1>                          
        <motion.p 
            className={`w-full md:w-full lg:w-5/6 text-center md:text-start text-xs sm:text-base md:text-sm lg:text-base lg:text-base xl:text-base leading-loose`}
        >
            Salesforce çözümleri üreten bir firma olarak, iş süreçlerinizi dijitalleştirerek müşteri ilişkilerinizi güçlendiren, satışları artıran ve operasyonları optimize eden entegre çözümler sunuyoruz. Salesforce’un güçlü CRM platformunu kullanarak, müşteri verilerinizi tek bir merkezde toplar, analiz eder ve etkili stratejiler geliştirmenizi sağlarız. Bu sayede, satış süreçlerinizi hızlandırır, müşteri memnuniyetini artırır ve işinizi büyütürüz.
        </motion.p>
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
    </motion.div>
  )
}
