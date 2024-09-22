'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function SmallNavMenu({ title, Icon, setIsOpen, setIsMenuOpen, isMenuOpen }) {

  const router = useRouter()
  const pathname = usePathname()
  
  const nav = (path) => {
    setIsMenuOpen(false)
    if(isMenuOpen) {
        document.body.style.overflowY = "scroll"
    } else{            
        document.body.style.overflowY = "hidden"
    }      
    const contact = document.getElementById(`${path}-contact`)
    contact.scrollIntoView({ behavior:'smooth' })
    return 
  }


  const click = () => {
    switch(title){
      case 'Servislerimiz' :
        setIsOpen(true)
        break;
        
      case 'Projelerimiz' :
        router.push('/projects')
        setIsMenuOpen(false)
        if(isMenuOpen) {
            document.body.style.overflowY = "scroll"
        } else{            
            document.body.style.overflowY = "hidden"
        }          
        break;

      case 'Hakkımızda' :
        router.push('/about');
        setIsMenuOpen(false)
        if(isMenuOpen) {
            document.body.style.overflowY = "scroll"
        } else{            
            document.body.style.overflowY = "hidden"
        }             
        break;
        
      case 'İletişime Geçin' :
        if(pathname.includes('about')) {
            nav('about')
        }
        if(pathname.includes('projects')) {
            nav('project')
        }      
        if(pathname.includes('services')) {
          nav('service')
        }  
        if(pathname === '/') {
          nav('home')
        }
        break;
    }
  }

  return (
    <motion.div
        className='mt-4 flex items-center justify-between w-full p-2 cursor-pointer h-[70px] rounded-lg'
        whileHover={{ translateY:-10 }}
        onClick={click}
    >
        <h6>{title}</h6>
        {
            Icon
            &&
            <Icon className='w-[52px] h-[52px]' />
        }
    </motion.div>
  )
}
