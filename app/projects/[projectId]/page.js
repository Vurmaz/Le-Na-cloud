import React from 'react'
import SingleProject from '@/components/singleProjectPage/SingleProject'
import Footer from '@/components/footer/Footer'
import { getProject } from '../../../libs/utils'
import { notFound } from 'next/navigation'
import Contact from '@/components/contact/Contact'

export default async function SingleProjectPage({ params }) {

  const { data } = await getProject(params.projectId)
  
  if (!data) {
    notFound()
  }

  return (
    <div className='bg-[--light]'>
      {
        data.map((project) => {
          return(
            <SingleProject key={project.id} project={project} />
          )
        })
      }
      <Contact id={'single-project-contact'} color='light' />
      <Footer color='white' />
    </div>
  )
}
