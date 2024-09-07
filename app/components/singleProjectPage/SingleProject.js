import React from 'react'
import Image from 'next/image'

export default function SingleProject({ project }) {
  return (
    <div
        className='p-8 flex flex-col bg-[--light] items-center gap-4'
    >
        <Image 
            src={`/${project.url}.png`}
            width={400}
            height={375}
            alt={project.name}
        />
        <h2 className='text-4xl text-gradient text-bold'>{project.name}</h2>
        <h3 className='text-3xl'>{project.title}</h3>
        <p className='w-4/6 leading-loose text-lg'>{project.desc}</p>
    </div>
  )
}
