'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutHero() {

    const [heroHeight, setHeroHeight] = useState(0)

    useEffect(()=> {
        const heroElement = document.getElementById('about-hero');
        if(heroElement) {
            setHeroHeight(heroElement.clientHeight)
        }

    }, [heroHeight])
    
  return ( 
    <div className=' h-auto text-white'>
        <div id='about-hero' className='flex flex-col gap-2 md:h-[65vh] h-max bg-[--primary] pt-8 pb-8 md:pb-0'>
            <h1 className='text-2xl md:text-4xl text-center w-full md:w-4/6 mx-auto'>Salesforce Mükemmelliği ile İşinizi Güçlendirin </h1>
            <p className='text-sm w-5/6 md:w-1/2 mx-auto text-center'>{`Sertifikalı uzmanlardan oluşan ekibimiz, müşteri ilişkilerinizi dönüştürmeye, operasyonları kolaylaştırmaya ve büyümeyi teşvik etmeye kendini adamıştır. Salesforce'un tüm potansiyelini ortaya çıkarmak ve işinizi ileriye taşımak için bizimle iş ortaklığı yapın.`}</p>
            <motion.button 
            className='mt-6 bg-[--light] sm:text-base rounded-full text-[--text] shadow w-max h-max p-4 mx-auto whitespace-nowrap'
            whileHover={{
                backgroundColor:'var(--hovered)',
                color:'var(--light)'
            }}
            onClick={() => {
                let contact = document.getElementById('home-contact')
                contact.scrollIntoView({ behavior:'smooth' })
            }}
            >Demo Talebi</motion.button>
        </div>
            <div className='mt-8 md:mt-0 md:translate-y-[-35%]'>
                <img 
                    src={'/about.jpg'}                    
                    alt='about'
                    className='object-contain w-11/12 md:w-5/6 h-auto mx-auto rounded-lg shadow-lg'
                />            
            </div>           

    </div>
  )
}
