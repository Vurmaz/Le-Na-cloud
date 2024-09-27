import React from 'react'

export default function AboutTeamItem({ item }) {
  return (
    <div className='flex flex-col p-2'>
        <h5 className='text-lg md:text-2xl'>{item.number}</h5>
        <h6 className='text-xs'>{item.title}</h6>
    </div>
  )
}
