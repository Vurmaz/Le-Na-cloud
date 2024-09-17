import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import IconRenderer from '../IconRenderer';

export default function Schema() {

    const data = [
        {
            id:'1',
            step:'ADIM 1',
            icon:'FaLightbulb',
            color:'data',
            title:'Dijital Dönüşüm İhtiyaçlarının ve Stratejilerinin Belirlenmesi',
            desc:'Le-Na Cloud, mevcut sorunlarınızı analiz eder ve Salesforce’un bu süreçleri nasıl iyileştireceğini keşfeder. Net hedefler ve stratejiler belirlenerek dijital dönüşümün temelleri atılır.'
        },
        {
            id:'2',
            step:'ADIM 2',
            icon:'GrOptimize',
            color:'commerce',
            title:'Salesforce Entegrasyonu ve Süreçleri Dijitalleştirme',
            desc:'Salesforce devreye girer, tüm süreçler dijitalleşir. Ekipler, manuel işlemlerden kurtulup daha verimli bir şekilde çalışmaya başlar. Veriler güvenli şekilde entegre edilir, iş akışları hız kazanır.'
        },
        {
            id:'3',
            step:'ADIM 3',
            icon:'MdSelfImprovement',
            color:'einstein',
            title:'Sürekli Gelişim ve Dönüşüm',
            desc:'Dijitalleşme tamamlandıkça işler hızlanır, ancak dönüşüm devam eder. Şirket büyüdükçe, Salesforce yeni özelliklerle desteklenir ve süreçler sürekli optimize edilir.'
        },        
    ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 px-4 md:px-16 gap-4'>
        {
            data.map((item) => {
                return (
                    <div className='flex gap-4 shadow-lg border-2 p-2 rounded-lg bg-[--light]' key={item.id}>
                        <div 
                            className='flex flex-col gap-2'
                            style={{ color:`var(--${item.color}`} }
                        >
                            <IconRenderer iconName={item.icon} className='md:w-16 md:h-16 w-12 h-12 text-[--primary]' />
                            <h6 className='text-sm md:text-lg font-semibold'>{item.step}</h6>
                            <h1 className='text-sm md:text-xl text-[--primary]'>{item.title}</h1>
                            <p className='text-sm text-[--text]'>{item.desc}</p>
                        </div>                               
                    </div>                    
                )
            })
        }     
    </div>
  )
}
