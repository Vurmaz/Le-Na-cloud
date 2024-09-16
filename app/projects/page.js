import React from 'react'
import Header from '../components/header/header'
import Contact from '../components/contact/Contact'
import Image from 'next/image'
import Link from 'next/link'
import ImageIcons from '../components/projectsPage/ImageIcons'
import Schema from '../components/projectsPage/Schema'

  const getProjects = async() => {
    const response = await fetch(`http://localhost:3000/api/getProjects`, { cache:'no-store' }, {
      method:"GET",
    })
    return response.json()
  }

  const getPrinciples = async() => {
      const response = await fetch('http://localhost:3000/api/getPrinciples', { cache:'no-cache' }, {
          method:'GET'
      })
      return await response.json()
  }  

export default async function ProjectPage() {

  const { data } = await getProjects()
  const { principles } = await getPrinciples()
  
  return (
    <div className=''>        
        <div className=' p-8 flex flex-col gap-4 h-max pt-2 pb-32'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-center text-gradient p-2'>Salesforce Projelerimiz</h1>
          <p className='w-full md:w-4/6 text-center mx-auto text-base md:text-lg lg:text-2xl leading-loose'>{'Başarılı projelerimizle, işletmenizin Salesforce potansiyelini en üst seviyeye çıkarıyoruz. Her biri müşterilerimizin ihtiyaçlarına özel olarak tasarlanmış çözümlerimizle, dijital dönüşüm süreçlerinde fark yaratıyor ve büyümelerini hızlandırıyoruz.'}</p>
        </div>    
        <Schema />
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-4 py-32'>        
          {
          data.map((item, i)=> {
            return(
              <div
                key={i}
                className='p-2 sm:p-4 md:p-8 flex flex-col gap-2 text-center justify-center rounded-lg shadow-xl z-10 w-5/6 mx-auto'
              >
                <Image 
                  src={`/${item.url}.png`}    
                  width={320}
                  height={180}   
                  className='mx-auto px-4'        
                />
                <h5 className='text-xl md:text-2xl'>{item.name}</h5>
                <h6 className='text-base md:text-lg text-gradient font-bold'>{item.title}</h6>
                <p className='line-clamp-3 w-4/6 mx-auto'>{item.desc}</p>
                <Link href={`/projects/${item.id}`} className='text-black underline'>Devamına göz atın</Link>
              </div>
            )
          }) 
          }          
        </div>
        <ImageIcons principles={principles} />         
        <Contact />
    </div>
  )
}
