'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InfoThree() {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4 w-11/12 md:w-5/6 h-[85vh] mx-auto py-32 md:py-0'>
        <motion.div 
            className='flex flex-col items-start justify-center gap-2 md:pl-2 lg:pl-8 xl:px-16'
            initial={{ x:300, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{
                duration:0.5,
                ease:'easeInOut',
                delay:0.2
            }}                           
        >     
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mx-auto md:mx-0 text-[--primary]'>CRM Nedir?</h1>        
            <motion.p className={`w-full md:w-full lg:w-5/6 text-start md:text-start text-xs sm:text-base md:text-sm lg:text-sm xl:text-base leading-loose`}>
                CRM (Müşteri İlişkileri Yönetimi), işletmelerin müşterileriyle olan tüm etkileşimlerini yönetmek için kullandığı strateji ve teknolojilerdir. Amacı, müşteri memnuniyetini ve sadakatini artırarak satışları ve kârlılığı yükseltmektir. CRM sistemleri, müşteri verilerini toplar ve analiz eder, böylece daha etkili pazarlama, satış ve müşteri hizmetleri sağlar. İşletmeler, müşterilerinin ihtiyaçlarını daha iyi anlayarak onlara kişiselleştirilmiş deneyimler sunabilirler.
            </motion.p>
        </motion.div> 
        <motion.div 
            className='flex flex-col items-center gap-8 overflow w-5/6 md:w-4/6 md:w-full mx-auto'
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
                src='/office-workers-2.jpg'
                height={600}
                width={600}
                alt='Crm nedir?'
                className=' my-auto rounded-lg shadow-lg'

            />  
        </motion.div>                    
    </div>  
  )
}
