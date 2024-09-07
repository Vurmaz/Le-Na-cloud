import React from 'react'
import Card from './Card'
import { MdOutlineSell } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { FaChartArea } from "react-icons/fa";

export default function HeroImages() {

  const data = [
    {   Icon:MdOutlineSell, 
        title:'Satış Optimasyonu', 
        color:'sales',
        desc:'Satış ekiplerinin müşteri adaylarını takip etmesine, fırsatları yönetmesine ve satış süreçlerini hızlandırmasına yardımcı olur.'
    },
    {   Icon:RiCustomerService2Line, 
        title:'Müşteri Hizmetleri', 
        color:'service',
        desc:'Müşteri taleplerini, şikayetlerini ve destek süreçlerini yönetir, müşteri memnuniyetini artırmayı hedefler.'
    },
    {   Icon:FiShoppingBag, 
        title:'Pazarlama Otomasyonu', 
         color:'marketing',
        desc:'Pazarlama kampanyalarını planlamayı, yürütmeyi ve sonuçlarını analiz etmeyi kolaylaştırır.'
    },   
    {   Icon:GrUserManager, 
        title:'Müşteri Yönetimi', 
        color:'commarce',
        desc:'Müşterilere ait bilgileri ve etkileşimleri merkezi bir sistemde toplar, bu sayede müşteri ilişkilerini daha iyi yönetmeyi sağlar.'
    },  
    {   Icon:FaChartArea, 
        title:'Analitik ve Raporlama', 
        color:'einstein',
        desc:'İşletmelerin verilerini analiz etmelerine ve bu verilerden anlamlı içgörüler elde etmelerine olanak tanır.'
    },    
  ]

  return (
    <div className='hidden md:flex flex-wrap flex-row md:grid mt-4 md:mt-0 md:grid-cols-5 justify-center gap-4 px-2 md:px-8 py-4 relative'>
      {
        data.map((card, index) => {
          return(
            <Card key={index} Icon={card.Icon} title={card.title} description={card.desc} color={card.color}/>
          )
        })
      }
    </div>
  )
}
