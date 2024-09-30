'use client'
import { memo } from "react";
import { MdOutlineSell } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { FaChartArea } from "react-icons/fa";
import InfoCard from './InfoCard';
import { motion } from 'framer-motion';

export default memo(function InfoCards() {

  const data = [
    {   Icon:MdOutlineSell, 
        title:'Müşteri Verilerinin Yönetimi', 
        color:'sales',
        desc:'CRM sistemleri, müşteri bilgilerini (iletişim bilgileri, geçmiş satın almalar, tercihler) ve istenilen diğer tüm bilgileri merkezi bir veri tabanında toplar ve düzenler.'
    },
    {   Icon:RiCustomerService2Line, 
        title:'Satış ve Pazarlama Süreçlerini Optimize Etme', 
        color:'service',
        desc:'CRM, satış süreçlerini takip eder, potansiyel müşterileri yönetir ve pazarlama kampanyalarını kişiselleştirir.'
    },
    {   Icon:FiShoppingBag, 
        title:'Otomasyon', 
         color:'marketing',
        desc:'Rutin ve tekrarlayan iş süreçlerini otomatikleştirir. Bu, satış, pazarlama ve müşteri hizmetleri görevlerinin daha hızlı ve hatasız bir şekilde yürütülmesini sağlar.'
    },   
    {   Icon:FaChartArea, 
        title:'Veri Analitiği ve Yapay Zeka', 
        color:'einstein',
        desc:'Yapay zeka (Einstein AI) ve veri analitiği ile derinlemesine analizler yapar, öngörüler sağlar ve iş stratejilerini destekler.'
    },    
  ]

  const variants = {
    initial:{ opacity:0, x:100 },
    show:{
      opacity:1,
      x:0,
      transition: {        
        ease:'easeInOut',
        duration:0.5,        
        staggerChildren:0.5
      }
    } 

  }

  return (
    <motion.div 
      className='grid grid-cols-2 gap-2 p-2 md:p-8 h-full md:h-5/6 py-16 md:py-0 px-0 sm:px-8 md:px-2'      
      variants={variants}
      initial='initial'
      whileInView='show'
      viewport={{ once:true }}      
    >
      {
        data.map((card, index) => {
          return(
            <InfoCard key={index} Icon={card.Icon} title={card.title} desc={card.desc} color={card.color}/>
          )
        })
      }        
    </motion.div>
  )
})
