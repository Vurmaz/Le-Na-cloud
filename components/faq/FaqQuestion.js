'use client'
import { FaCaretDown } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqQuestion({ item, i, color, activeIndex, setActiveIndex }) {

    const clicked = (i) => {
        setActiveIndex(prev => prev === i ? null : i)
    }
    
  return (
    <motion.div 
        className='w-full md:w-5/6 h-auto border-b-2' 
        style={{ borderColor:`var(--${color})`}}
        initial={{ x:200, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{ duration:0.5, ease:'easeInOut' }}
        viewport={{ once:true }}        
    >
            <div 
                className='flex flex-col cursor-pointer' 
                onClick={()=>clicked(i)}
                style={{ color:`var(--${color})`}}                                        
            >
                <div 
                    className='flex justify-between items-center p-2 md:p-4'
                >
                    <h1 className='text-sm lg:text-base text-[--text] font-semibold'>{item.question}</h1>
                    <motion.div
                        initial={{ transform:'rotate(0deg)'}}
                        animate={{ transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <FaCaretDown className={`w-8 h-8`} /> 
                    </motion.div>            
                </div>  
                <AnimatePresence>
                    {
                        (activeIndex === i) 
                        &&
                        <motion.div 
                            className='p-2 md:py-4 text-xs md:text-base text-start origin-top text-[--text]'
                            style={{  borderColor:`var(--${color})` }}
                            initial={{ scaleY:0 }}
                            animate={{ scaleY:1 }}                            
                            transition={{ duration:0.3, ease:'linear' }}
                        >
                            <p>{item.answer}</p>
                        </motion.div>                                                                     
                    }                                     
                </AnimatePresence>                                                          
            </div>
        </motion.div>
  )
}
