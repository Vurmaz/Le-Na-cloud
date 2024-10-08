'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowDropRightLine } from "react-icons/ri";
import SmallNavMenu from './SmallNavMenu';
import SmallScreenServiceMenu from './SmallScreenServiceMenu';

export default function SmallMenu({ isMenuOpen, setIsMenuOpen, data }) {
  const [isOpen, setIsOpen] = useState(false)

  const [navs, setNavs] = useState([
    { title:'Servislerimiz', Icon: RiArrowDropRightLine },
    { title:'Projelerimiz', Icon:'' },
    { title: 'Hakkımızda', Icon:'' },
    { title: 'İletişime Geçin', Icon:'' }
  ])

  return (
      <motion.div 
          className='flex flex-col items-start justify-start gap-2 px-8 py-4 text-3xl md:text-4xl text-black w-full h-full left-0 right-0 bottom-0 top-20 overflow-hidden	bg-[--light] fixed zk z-50 origin-right' 
          initial={{ scaleX:0 }}
          animate={{ scaleX:1 }}
          exit={{ scaleX:0 }}
          transition={{
            duration:0.5, ease:'easeInOut'
          }}
      >      
        {
          navs.map((nav, i) => {
            return(
              <SmallNavMenu 
                title={nav.title} 
                Icon={nav.Icon} 
                key={i} 
                setIsOpen={setIsOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                isMenuOpen={isMenuOpen}                  
              />
            )
          })
        }   
        <AnimatePresence>
          {
            isOpen
            &&
            <SmallScreenServiceMenu data={data} setIsOpen={setIsOpen} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          }             
        </AnimatePresence>             
      </motion.div>      
  )
}
