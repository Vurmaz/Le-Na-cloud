import React from 'react'
import Header from '../components/header/header'
import Contact from '../components/contact/Contact'
import Image from 'next/image'
import Link from 'next/link'
import ImageIcons from '../components/projectsPage/ImageIcons'
import Schema from '../components/projectsPage/Schema'
import ProjectsHolder from '../components/projectsPage/ProjectsHolder'
import Faq from '../components/faq/Faq'

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

  const getFaq = async() => {
    const response = await fetch(`http://localhost:3000/api/getFaq`, {
      method:"GET",
    })
    return response.json()

  }  

export default async function ProjectPage() {

  const { data } = await getProjects()
  const { principles } = await getPrinciples()
  const faqData = await getFaq()
  
  return (
    <div className=''>        
        <div className=' p-8 flex flex-col gap-4 h-max pt-8'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-center text-gradient p-2'>Salesforce Projelerimiz</h1>
          <p className='w-full md:w-4/6 text-center mx-auto text-base md:text-lg lg:text-2xl leading-loose'>{'Başarılı projelerimizle, işletmenizin Salesforce potansiyelini en üst seviyeye çıkarıyoruz. Her biri müşterilerimizin ihtiyaçlarına özel olarak tasarlanmış çözümlerimizle, dijital dönüşüm süreçlerinde fark yaratıyor ve büyümelerini hızlandırıyoruz.'}</p>
        </div>    
        <Schema />
        <ProjectsHolder data={data} />
        <ImageIcons principles={principles} /> 
        <Faq data={faqData.data} color='primary' />        
        <Contact />
    </div>
  )
}
