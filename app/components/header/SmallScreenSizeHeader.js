'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SmallScreenSizeHeader({ data }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const click = () => {
        setIsMenuOpen(!isMenuOpen)
        if(isMenuOpen) {
            document.body.style.overflowY = "scroll"
        } else{            
            document.body.style.overflowY = "hidden"
        }  
    }
    
  return (
    <div className='flex justify-between items-center flex-row px-8 py-2 md:hidden'>
          <Link href={'/'} className=' cursor-pointer'>
            <Image
              src='/logo.png'
              width={60}
              height={60}          
            />
          </Link>
        <RxHamburgerMenu onClick={click} className='h-12 w-12 cursor-pointer'></RxHamburgerMenu>
            <AnimatePresence>
                {
                  isMenuOpen 
                  &&
                  <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} data={data} /> 
                }                
            </AnimatePresence>

    </div>
  )
}
