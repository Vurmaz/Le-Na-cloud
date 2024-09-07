'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InfoTwo() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-2 sm:px-8 h-auto h-auto md:h-screen pb-32 md:py-8 gap-4'>
        <motion.div 
            className='flex flex-col items-center gap-8 overflow'
            initial={{ x:-300, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{
                duration:0.5,
                ease:'easeInOut',
                delay:0.2
            }}               
        >
            <Image
                src='/2.jpg'
                height={550}
                width={550}
                alt=''
                className='my-auto'

            />  
        </motion.div>   
        <motion.div 
            className='flex flex-col items-start justify-center px-8 py-4 gap-2'
            initial={{ x:300, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{
                duration:0.5,
                ease:'easeInOut',
                delay:0.2
            }}                           
        >     
            <h1 className='text-2xl sm:text-3xl  lg:text-4xl text-center mx-auto md:mx-0 text-[--primary]'>Salesforce Nedir?</h1>        
            <motion.p className={`w-full md:w-full lg:w-5/6 text-center md:text-start text-xs sm:text-base md:text-sm lg:text-base lg:text-base xl:text-xl leading-loose top-24`}>
                Salesforce, işletmelerin müşteri ilişkileri yönetimini (CRM) optimize etmelerine yardımcı olan bir bulut tabanlı platformdur. Web sitenize entegre edildiğinde, müşteri verilerini toplamanıza, analiz etmenize ve bu verileri etkili bir şekilde yönetmenize olanak tanır. Salesforce, satış süreçlerini otomatikleştirme, müşteri etkileşimlerini izleme ve pazarlama kampanyalarını optimize etme gibi işlevlerle müşteri memnuniyetini artırarak iş büyümesini destekler.
            </motion.p>
        </motion.div>             
    </div>  
  )
}
