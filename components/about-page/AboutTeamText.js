import React from 'react'
import { motion } from 'framer-motion'
import { belowToTopVariants } from '@/libs/variants'

export default function AboutTeamText() {
  return (
    <motion.div 
        className='flex flex-col p-2 md:p-0
        md:[--y-from:100] md:[--y-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]
        '
        variants={belowToTopVariants}
        viewport={{ once:true }}
        initial='initial'
        whileInView='onView'
        transition={{
            duration:0.6,
            ease:'easeInOut'
        }}
    >
        <h2 className='text-xl md:text-2xl'>Takımla Tanışın</h2>
        <p className='text-xs md:text-base'>{`Salesforce’un Türkiye'deki en güçlü iş ortağı olma vizyonuyla, bulut bilişim ve dijital dönüşüm çözümleri sunarak, müşterilerimizin iş süreçlerini baştan sona dijital dönüşümün gücüyle dönüştürüyoruz. Yalnızca dönüşüm sürecinde değil, Salesforce ekosisteminin gücüyle müşterilerimize sürdürülebilir başarı sağlayan ölçeklenebilir ve dinamik çözümler sunuyoruz. Dijital gelişim ve sürekli optimizasyon ile işlerini bir üst seviyeye taşımak isteyen firmalara stratejik danışmanlık sağlayarak, bulut teknolojilerinde güvenilir bir çözüm ortağı olarak yanlarındayız.`}</p>        
    </motion.div>
  )
}
