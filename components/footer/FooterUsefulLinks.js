'use client'
import React, { useState, memo } from 'react'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa";
import { motion } from 'framer-motion';

export default memo(function FooterUsefulLinks() {

    const [isOpen, setIsOpen] = useState(false)

    const data = [
        {
            link:'',
            name:'Ana sayfa'
        },
        {
            link:'projects',
            name:'Projelerimiz'
        },
        {
            link:'about',
            name:'Hakkımızda'
        }
    ]

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 cursor-pointer justify-center sm:justify-start p-2 sm:p-0' onClick={()=>setIsOpen(!isOpen)}>
          <h5 className='text-lg sm:text-base font-bold'>Faydalı Linkler</h5>
          <FaAngleDown className='block sm:hidden w-5 h-5' />  
        </div>
        <motion.div 
            className={ `${isOpen ? 'flex flex-col' : 'hidden'} sm:flex flex-col gap-2 sm:!opacity-100` }
            initial={{ opacity:0 }}
            animate={ isOpen ? {opacity:1} : { opacity:0 } }
            transition={{ duration:0.3, ease:'easeInOut' }}            
        >
            {
                data.map((link, i) => {
                    return(
                        <div key={i} className=''>
                            <Link href={`/${link.link}`} className='cursor-pointer'>
                                <h6 className='text-sm'>{link.name}</h6>  
                            </Link>                        
                        </div>     
                    )
                })
            }            
        </motion.div>

    </div>
  )
})
