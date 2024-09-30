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
            initial={{ opacity:0 }}
            animate={isOpen ? { opacity:1 } : { opacity:0 } }
            transition={{ duration:0.3, ease:'easeInOut' }}                     
        >
{/*             <div className='flex items-center gap-2'> 
                <BsFillTelephoneFill className='w-4 h-4' />
                <h6 className='text-sm'></h6>
            </div> */}
            <div className='flex items-center gap-2'> 
                <MdEmail className='w-4 h-4' />
                <h6 className='text-sm'>lenacloudinfo@gmail.com</h6>
            </div>               
        </motion.div>
     
    </div>  
  )
}
