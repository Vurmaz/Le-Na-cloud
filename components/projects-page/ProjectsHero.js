import React from 'react'

export default function ProjectsHero() {
  return (
    <div 
        className=' h-screen grid grid-cols-1 md:grid-cols-2'
        style={{
            backgroundImage: `url(/red.webp)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",                      
        }}            
    >
        <div className='p-8 flex flex-col my-auto gap-4 h-max pt-8 pb-16'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center text-gradient p-2 font-bold'>Salesforce Projelerimiz</h1>
        <p className='w-full md:w-4/6 text-center mx-auto text-base md:text-lg lg:text-xl leading-loose'>{'Başarılı projelerimizle, işletmenizin Salesforce potansiyelini en üst seviyeye çıkarıyoruz. Her biri müşterilerimizin ihtiyaçlarına özel olarak tasarlanmış çözümlerimizle, dijital dönüşüm süreçlerinde fark yaratıyor ve büyümelerini hızlandırıyoruz.'}</p>
        </div>    
        <div className='hidden'>
        {/* image */}
        </div>        
    </div>   
  )
}
