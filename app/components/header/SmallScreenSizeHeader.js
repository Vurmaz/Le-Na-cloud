'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SmallScreenSizeHeader({ data }) {

    const [isOpen, setIsOpen] = useState(false)

    const click = () => {
        setIsOpen(!isOpen)
        if(isOpen) {
            document.body.style.overflowY = "scroll"
        } else{            
            document.body.style.overflowY = "hidden"
        }  
    }
    
  return (
    <div className='flex justify-between items-center flex-row px-8 py-2 md:hidden'>
          <div >
            <Image
              src='/logo.png'
              width={60}
              height={60}          
            />
          </div>
        <RxHamburgerMenu onClick={click} className='h-12 w-12 cursor-pointer'></RxHamburgerMenu>
            <AnimatePresence>
                {
                        isOpen 
                        &&
                        <Menu isOpen={isOpen} data={data} /> 

                }                
            </AnimatePresence>

    </div>
  )
}
