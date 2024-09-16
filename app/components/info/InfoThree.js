'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
/* px-2 sm:px-8 pb-32 md:py-8 */
export default function InfoThree() {
  return (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-4 w-11/12 h-[85vh] mx-auto py-32 md:py-0'>
   
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
            <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mx-auto md:mx-0 text-[--primary]'>Salesforce Nedir?</h1>        
            <motion.p className={`w-full md:w-full lg:w-5/6 text-center md:text-start text-xs sm:text-base md:text-sm lg:text-sm xl:text-base leading-loose`}>
                Salesforce, işletmelerin müşteri ilişkileri yönetimini (CRM) optimize etmelerine yardımcı olan bir bulut tabanlı platformdur. Web sitenize entegre edildiğinde, müşteri verilerini toplamanıza, analiz etmenize ve bu verileri etkili bir şekilde yönetmenize olanak tanır. Salesforce, satış süreçlerini otomatikleştirme, müşteri etkileşimlerini izleme ve pazarlama kampanyalarını optimize etme gibi işlevlerle müşteri memnuniyetini artırarak iş büyümesini destekler.
            </motion.p>
        </motion.div> 
        <motion.div 
            className='flex flex-col items-center gap-8 overflow w-4/6 md:w-full mx-auto'
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
                alt=''
                className=' my-auto rounded-lg shadow-lg'

            />  
        </motion.div>                    
    </div>  
  )
}
