'use client'
import React from 'react'
import AboutActionImage from './AboutActionImage'
import AboutActionText from './AboutActionText'
import { memo } from 'react'

export default memo(function AboutAction() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 h-max md:h-80 gap-2 px-2'>
        <AboutActionImage x={-100} />
        <AboutActionText />
        <AboutActionImage x={100} />
    </div>
  )
})
