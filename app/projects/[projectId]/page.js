import React from 'react'
import Image from 'next/image'
import SingleProject from '@/app/components/singleProjectPage/SingleProject'
import Footer from '@/app/components/footer/Footer'

const getProject = async(id) => {        
    const response = await fetch(`http://localhost:3000/api/getProjects/${id}`, { cache:'no-cache' }, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
        return await response.json() 
                     
}

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
