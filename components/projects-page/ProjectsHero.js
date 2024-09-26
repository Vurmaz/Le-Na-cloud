import React from 'react'
import Image from 'next/image'

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-screen ">      
      <Image
        src="/red.webp"
        alt="Hakkımzda"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        priority={true}
        className="z-0"
      />      
      <div className='grid grid-cols-1 md:grid-cols-2 absolute h-screen'>
        <div className='p-8 flex flex-col my-auto gap-4 h-max pt-8 pb-16'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-center text-gradient p-2 font-bold'>Salesforce Projelerimiz</h1>
          <p className='w-full md:w-4/6 text-center mx-auto text-base md:text-lg lg:text-xl leading-loose'>{'Başarılı projelerimizle, işletmenizin Salesforce potansiyelini en üst seviyeye çıkarıyoruz. Her biri müşterilerimizin ihtiyaçlarına özel olarak tasarlanmış çözümlerimizle, dijital dönüşüm süreçlerinde fark yaratıyor ve büyümelerini hızlandırıyoruz.'}</p>
        </div>    
        <div className='hidden'>
        </div> 
    </div>            
    </section>        
  )
}
