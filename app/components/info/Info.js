'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import InfoOne from './InfoOne'
import InfoTwo from './InfoTwo'
import InfoThree from './InfoThree'
import Line from './Line'
import InfoCards from './InfoCards'
import InfoCardInfo from './InfoCardInfo'

export default function Info() {
  return (
    <div className='h-auto scroll-mt-16'>
      <div className='h-auto md:h-screen flex flex-col-reverse md:grid md:grid-cols-2 lg:px-16'>
        <InfoCardInfo />
        <InfoCards />
      </div>    
      <div className='h-auto'> 
        <InfoTwo /> 
      </div>
      <div className='h-auto '> 
        <InfoThree />
      </div>          
    </div>
  )
}
