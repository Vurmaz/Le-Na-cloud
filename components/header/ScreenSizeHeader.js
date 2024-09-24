'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineExpandMore } from "react-icons/md";
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ServiceMenu from './ServiceMenu';

export default function ScreenSizeHeader({ data }) {

  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false)

  const pathname = usePathname()
  
  const nav = (path) => {       
    const contact = document.getElementById(`${path}-contact`)
    contact.scrollIntoView({ behavior:'smooth' })
    return 
  }

  const click = () => {
    if(pathname.includes('about')) {
      nav('about')
      return
    }
    if(pathname.includes('655')) {      
      nav('single-project')
      return
    }
    if(pathname.includes('projects')) {
        nav('project')
        return
    }      
    if(pathname.includes('services')) {
      nav('service')
      return
    }  
    if(pathname === '/') {
      nav('home')
      return
    }    
  }  

  return (
    <>
      <div className='md:flex items-center justify-between gap-8 w-full mx-auto hidden'>
          <Link href={'/'} className='p-4'>
            <Image
              src='/logo.png'
              width={60}
              height={60}      
              alt='logo'    
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
              <Link href='/about' className='flex items-center'>
                <h6 
                  className='cursor-pointer text-base'
                >
                  Hakkımızda
                </h6> 
              </Link>                  
              </div>                                             
          </div>
          <div className='p-4'>
            <motion.div
              className='cursor-pointer border-2 p-2 px-4 rounded-full bg-[--primary] text-white text-base'
              whileHover={{ backgroundColor:'var(--text)' }}
              transition={{ duration:0.3, ease:'easeInOut' }}
              onClick={click}
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
