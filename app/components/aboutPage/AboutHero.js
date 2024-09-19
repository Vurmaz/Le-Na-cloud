'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {

    const ref = useRef(null)
    const [heroHeight, setHeroHeight] = useState(0)

    useEffect(()=> {
        const heroElement = document.getElementById('about-hero');
        if(heroElement) {
            setHeroHeight(heroElement.clientHeight)
        }

    }, [heroHeight])
    console.log(heroHeight)
  return ( 
    <div className=' h-auto text-white'>
        <div id='about-hero' className='flex flex-col gap-2 h-[65vh] bg-[--primary] pt-8'>
            <h1 className='text-2xl md:text-4xl text-center w-full md:w-4/6 mx-auto'>Biz yaratıcı ve tecrübeli ekibizmle fikirlerinizi gerçeğe dönüştürüyoruz</h1>
            <p className='text-sm w-5/6 md:w-1/2 mx-auto  text-center'>Yıllar süren tecrübemiz ile sektöre ve indüstüriye hakımiyetimzle dailşxc oadsad lşdsdlasşdl askdkalsdlka daslşödşaölsdşölaşölsd asmldmasdlkaskdölşasdşlöaşlödsölşasml klmaskasdlşöşl</p>
            <motion.button 
            className='mt-8 bg-[--light] sm:text-base rounded-full text-[--text] shadow w-max h-max p-2 mx-auto whitespace-nowrap	'
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
            <div className=' translate-y-[-45%] md:translate-y-[-35%]'>
                <img 
                    src={'/about.jpg'}                    
                    alt='about'
                    className='object-contain w-11/12 md:w-5/6 h-auto mx-auto rounded-lg shadow-lg'
                />            
            </div>           

    </div>
  )
}
