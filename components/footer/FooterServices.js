'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function FooterServices({ data }) {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center justify-center sm:justify-start gap-2 cursor-pointer p-2 sm:p-0' onClick={()=>setIsOpen(!isOpen)}>
          <h5 className='text-lg sm:text-base font-bold'>Servislerimiz</h5>
          <FaAngleDown className='block sm:hidden w-5 h-5' />  
        </div>
        <motion.div 
            className={`${isOpen ? 'flex flex-col' : 'hidden'} sm:flex sm:flex-col gap-2 origin-top sm:!opacity-100`}
            initial={{ opacity:0 }}
            animate={ isOpen ? { opacity:1 } : { opacity:0 } }
            transition={{ duration:0.3, ease:'easeInOut' }}
        >
            {
                data.map((service, i) => {
                    const href = (service.name.split(' ').join('-')).toLowerCase()

                    return (
                        <div key={i}>
                            <Link href={`/services/${href}`} className='cursor-pointer'>
                                <h6 className='text-sm'>{service.name}</h6>  
                            </Link>                        
                        </div>                    
                    )
                })
            }              
        </motion.div>
          
    </div>    

  )
}
