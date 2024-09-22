'use client'
import React, { useState } from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function FooterContact() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 cursor-pointer justify-center sm:justify-start p-2 sm:p-0' onClick={()=>setIsOpen(!isOpen)}>
          <h5 className='text-lg sm:text-base font-bold'>İletişim</h5>
          <FaAngleDown className='block sm:hidden w-5 h-5' />  
        </div>
        <motion.div 
            className={`${isOpen ? 'flex flex-col' : 'hidden'} sm:flex flex-col gap-2 origin-top sm:!opacity-100`}
            initial={{ opacity:'var(--opacity-from)' }}
            animate={isOpen ? { opacity:0 } : { opacity:1 } }
            transition={{ duration:0.3, ease:'easeInOut' }}                     
        >
            <div className='flex items-center gap-2'> 
                <BsFillTelephoneFill className='w-4 h-4' />
                <h6 className='text-sm'>+90 544 776 4144</h6>
            </div>
            <div className='flex items-center gap-2'> 
                <MdEmail className='w-4 h-4' />
                <h6 className='text-sm'>sadikvurmaz@gmail.com</h6>
            </div>               
        </motion.div>
     
    </div>  
  )
}
