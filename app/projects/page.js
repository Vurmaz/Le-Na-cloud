import React from 'react'
import Contact from '../../components/contact/Contact'
import ImageIcons from '../../components/projects-page/ImageIcons'
import Schema from '../../components/projects-page/Schema'
import ProjectsHolder from '../../components/projects-page/ProjectsHolder'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'
import { getPrinciples, getProjects, getFaq } from '../../libs/utils'
import ProjectsHero from '@/components/projects-page/ProjectsHero'

export default async function ProjectPage() {

 /*  const { data } = await getProjects() */
  const principles = await getPrinciples()
  const faqData = await getFaq()
  console.log(principles.data.data)
  return (
    <div className=''>     
        <ProjectsHero />
        <Schema />
       {/*  <ProjectsHolder data={data} /> */}
        <ImageIcons data={principles.data} /> 
        <Faq data={faqData.data} color='primary' />        
        <Contact id={'project-contact'} />
        <Footer color='var(--light)' />
    </div>
  )
}
