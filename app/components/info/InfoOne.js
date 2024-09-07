import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function InfoOne() {
  return (
    <div className='md:grid md:grid-cols-2 flex flex-col-reverse p-8 h-auto md:h-screen py-32 md:py-8 gap-4'  >
        <motion.div 
            className='flex flex-col items-start justify-center gap-4 px-8'
            initial={{ x:-300, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{
                duration:0.5,
                ease:'easeInOut',
                delay:0.2
            }}       

        >     
        <h1 className='text-2xl sm:text-3xl  lg:text-4xl text-center mx-auto md:mx-0 text-[--primary]'>Sorunlarınızı Çözelim</h1>                          
            <motion.p 
                className={`w-full md:w-full lg:w-5/6 text-center md:text-start text-xs sm:text-base md:text-sm lg:text-base lg:text-base xl:text-xl leading-loose`}
            >
               Salesforce çözümleri üreten bir firma olarak, iş süreçlerinizi dijitalleştirerek müşteri ilişkilerinizi güçlendiren, satışları artıran ve operasyonları optimize eden entegre çözümler sunuyoruz. Salesforce’un güçlü CRM platformunu kullanarak, müşteri verilerinizi tek bir merkezde toplar, analiz eder ve etkili stratejiler geliştirmenizi sağlarız. Bu sayede, satış süreçlerinizi hızlandırır, müşteri memnuniyetini artırır ve işinizi büyütürüz.
            </motion.p>
        </motion.div>
        <motion.div 
            className='my-auto'
            initial={{ x:300, opacity:0 }}
            whileInView={{ x:0, opacity:1 }}
            viewport={{ once:true }}
            transition={{
                duration:0.5,
                ease:'easeInOut',
                delay:0.2
            }}               
        >
            <Image
                src='/1.jpg'
                width={550}
                height={550}
                alt='nedir?'                
                className='rounded-lg px-8 md:px-0 mx-auto'
            />  
        </motion.div>        
    </div>  
  )
}
