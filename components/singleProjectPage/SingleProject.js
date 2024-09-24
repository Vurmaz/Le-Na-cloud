import React from 'react'
import Image from 'next/image'

export default function SingleProject({ project }) {
  return (
    <div
        className='p-8 flex flex-col bg-[--light] items-center gap-8'
    >
        <Image 
            src={`/${project.url}.png`}
            width={400}
            height={375}
            alt={project.name}
        />
        <h2 className='text-2xl text-center md:text-4xl text-gradient font-bold'>{project.name}</h2>
        <h3 className='text-xl text-center w-full md:w-4/6 md:text-3xl font-semibold'>{project.title}</h3>
        <p className='text-start w-full md:w-4/6 leading-loose text-sm md:text-lg whitespace-pre-line	'>{project.desc}</p>
    </div>
  )
}
