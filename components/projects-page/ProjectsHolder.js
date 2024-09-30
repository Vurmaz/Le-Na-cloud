import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectsHolder({ data }) {
  
  return (
    <div className='h-max md:h-screen'>
        <h1 className='text-center text-2xl md:text-5xl pt-4 pb-8 text-gradient font-semibold'>Müşterilerimize hazırladığımız projelerimiz</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-4 '>        
            {
              data.map((item, i)=> {
                return(
                    <ProjectItem item={item} key={i} />
                )
              }) 
            }          
        </div>        
    </div>

  )
}
