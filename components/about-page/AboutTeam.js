'use client'
import React, { memo } from 'react'
import { motion } from 'framer-motion'
import data from '@/data/about-date.json'

export default memo(function AboutTeam() {

  return (
    <div className='flex gap-2 px-2 md:px-32'>
        <motion.div 
            className='flex flex-col p-2 md:p-0'
            viewport={{ once:true }}
            initial={{ y:200 }}
            whileInView={{ y:0 }}
            transition={{
                duration:0.6,
                ease:'easeInOut'
            }}
        >
            <h2 className='text-xl md:text-2xl'>Takımla Tanışın</h2>
            <p className='text-xs md:text-base'>{`Salesforce’un Türkiye'deki en güçlü iş ortağı olma vizyonuyla, bulut bilişim ve dijital dönüşüm çözümleri sunarak, müşterilerimizin iş süreçlerini baştan sona dijital dönüşümün gücüyle dönüştürüyoruz. Yalnızca dönüşüm sürecinde değil, Salesforce ekosisteminin gücüyle müşterilerimize sürdürülebilir başarı sağlayan ölçeklenebilir ve dinamik çözümler sunuyoruz. Dijital gelişim ve sürekli optimizasyon ile işlerini bir üst seviyeye taşımak isteyen firmalara stratejik danışmanlık sağlayarak, bulut teknolojilerinde güvenilir bir çözüm ortağı olarak yanlarındayız.`}</p>        
        </motion.div>
        <motion.div 
            className='px-2 md:px-8 border-l-2 border-black flex flex-col gap-2'
            viewport={{ once:true }}
            initial={{ y:-200 }}
            whileInView={{ y:0 }}
            transition={{
                duration:0.5,
                delay:0.1,
                ease:'easeInOut'
            }}
        >
            {
                data.map((item, i) => {
                    return(
                        <div key={i} className='flex flex-col p-2'>
                            <h6 className='text-lg md:text-2xl'>{item.number}</h6>
                            <h6 className='text-xs'>{item.title}</h6>
                        </div>
                    )
                })
            }
        </motion.div>
    </div>
  )
})
