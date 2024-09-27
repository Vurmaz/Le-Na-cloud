import React from 'react'
import { motion } from 'framer-motion'

export default function AboutTeamText() {
  return (
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
  )
}
