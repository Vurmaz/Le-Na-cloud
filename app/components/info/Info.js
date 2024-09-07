'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import InfoOne from './InfoOne'
import InfoTwo from './InfoTwo'

export default function Info() {
  return (
    <div className='h-auto scroll-mt-16'>
        <div>          
          <InfoOne />
        </div>
        <div>
          <InfoTwo /> 
        </div>
        
    </div>
  )
}
