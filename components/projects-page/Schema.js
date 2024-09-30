import React, { memo } from 'react'
import IconRenderer from '../IconRenderer';
import { belowToTopVariants } from '@/libs/variants';
import { motion } from 'framer-motion';
import SchemaItem from './SchemaItem';

export default memo(function Schema() {

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
            icon:'TbUserScreen',
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
    <div className='px-4 md:px-16 w-5/6 sm:w-11/12 md:w-5/6 mx-auto py-16 flex flex-col gap-8 h-max md:h-screen'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center text-gradient p-4 font-semibold'>Adım adım başarıya</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-16'>
            {
                data.map((item) => {
                    return (
                        <SchemaItem item={item} key={item.id} />
                    )
                })
            }     
        </div>        
    </div>
  )
})
