'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineExpandMore } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';
import ServiceMenu from './ServiceMenu';

export default function ScreenSizeHeader({ data }) {

  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false)

  return (
    <>
      <div className='md:flex items-center justify-between gap-8 w-full mx-auto hidden'>
          <Link href={'/'} className='p-4'>
            <Image
              src='/logo.png'
              width={60}
              height={60}          
            />
          </Link>
          <div className='flex gap-8 h-24'>              
              <motion.div 
                  className='flex items-center cursor-pointer'
                  onHoverStart={()=>setIsServiceMenuOpen(true)}
                  onHoverEnd={()=>setIsServiceMenuOpen(false)}                   
              >
                  <motion.h6 className='text-base'>Servislerimiz</motion.h6>
                  <MdOutlineExpandMore className='w-4 h-4' />                      
              </motion.div>              
              <Link href='/projects' className='flex items-center'>
                <h6 className='cursor-pointer text-base'>Projelerimiz</h6>
              </Link>  
              <div className='flex items-center'>
                <h6 
                  className='cursor-pointer text-base border-2'
                  onClick={()=>{
                    const about = document.getElementById('about')
                    about.scrollIntoView({ behavior:'smooth' })
                  }}
                >
                  Hakkımızda
                </h6>                   
              </div>                                             
          </div>
          <div className='p-4'>
            <motion.div
              className='cursor-pointer border-2 p-2 px-4 rounded-full bg-[--primary] text-white text-base'
              whileHover={{ backgroundColor:'var(--text)' }}
              transition={{ duration:0.3, ease:'easeInOut' }}
              onClick={()=> {
                const contact = document.getElementById('home-contact')
                contact.scrollIntoView({ behavior:'smooth' })
              }}
            >              
                DEMO TALEBİ                          
            </motion.div>              
          </div>
                   
      </div>       
                <AnimatePresence>
            {
              isServiceMenuOpen
              &&
              <ServiceMenu data={data} setIsServiceMenuOpen={setIsServiceMenuOpen} /> 
            }                                         
          </AnimatePresence>   
    </>

  )
}
