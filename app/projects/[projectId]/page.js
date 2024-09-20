import React from 'react'
import Image from 'next/image'
import SingleProject from '@/components/singleProjectPage/SingleProject'
import Footer from '@/components/footer/Footer'
import { getProject } from '../../../libs/utils'


export default async function SingleProjectPage({ params }) {

    const { data } = await getProject(params.projectId)

  return (
    <div>
      {
        data.map((project) => {
          return(
            <SingleProject key={project.id} project={project} />
          )
        })
      }
      <Footer color='white' />
    </div>
  )
}
