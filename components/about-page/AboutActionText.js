'use client'
import { motion } from 'framer-motion'

export default function AboutActionText() {
  return (
    <motion.div 
        className='col-span-2 order-first md:order-none bg-[--primary] text-white pt-2 md:pt-8 flex flex-col gap-2 rounded-lg p-4 md:p-0'
        viewport={{ once:true }}
        initial={{ y:100, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{
            duration:0.5,
            ease:'easeInOut'
        }}
    >
        <h2 className='text-lg md:text-3xl lg:text-4xl text-center'>Dijital Başarısınız için Bizimle olun</h2>
        <p className='text-xs md:text-sm text-center'>Bizimle iletişime geçin hemen başıraya ilk adımı atın</p>
        <motion.button 
            className='mt-2 md:mt-8 bg-[--light] text-xs sm:text-base rounded-full text-[--text] shadow w-max h-max p-4 mx-auto whitespace-nowrap'
            whileHover={{
                backgroundColor:'var(--hovered)',
                color:'var(--light)'
            }}
            onClick={() => {
                let contact = document.getElementById('home-contact')
                contact.scrollIntoView({ behavior:'smooth' })
        }}
        >Demo Talebi</motion.button>            
    </motion.div>
  )
}
