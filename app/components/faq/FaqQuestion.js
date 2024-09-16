'use client'
import { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqQuestion({ item, i, color }) {

    const [activeIndex, setActiveIndex] = useState(null)
    const clicked = (i) => {
        setActiveIndex(activeIndex === i ? '' : i)
    }

  return (
    <div className='w-5/6 h-auto border-b-2' style={{ borderColor:`var(--${color})`}}>
            <motion.div 
                className='flex flex-col cursor-pointer' 
                onClick={()=>clicked(i)}
                style={{ color:`var(--${color})`}}                                        
            >
                <motion.div 
                    className='flex justify-between items-center p-2 md:p-4'
                >
                    <h1 className='text-base md:text-lg text-[--text]'>{item.question}</h1>
                    <motion.div
                        initial={{ transform:'rotate(0deg)'}}
                        animate={{ transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <FaCaretDown className={`w-8 h-8`} /> 
                    </motion.div>
            
                </motion.div>  
                <AnimatePresence>
                    {
                        (activeIndex === i) 
                        &&
                        <motion.div 
                            className='p-2 md:py-4 md:px-8 text-xs md:text-base text-start origin-top text-[--text]'
                            style={{  borderColor:`var(--${color})` }}
                            initial={{ scaleY:0 }}
                            animate={{ scaleY:1 }}
                            exit={{ scaleY:0 }}
                            transition={{ duration:0.3, ease:'linear' }}
                        >
                            <p>{item.answer}</p>
                        </motion.div>                            
                    }                                     
                </AnimatePresence>                                                          
            </motion.div>
        </div>
  )
}
