'use client'
import Link from 'next/link';
import { motion } from 'framer-motion'
import IconRenderer from '../IconRenderer';

export default function ServiceMenu({ data, setIsServiceMenuOpen }) {
  
  return (
    <motion.div         
        className='h-max w-full bg-white origin-top z-50'
        onHoverStart={()=>setIsServiceMenuOpen(true)}
        onHoverEnd={()=>setIsServiceMenuOpen(false)}           
        initial={{ scaleY:0 }}
        animate={{ scaleY:1 }}
        exit={{ scaleY:0 }}
        transition={{
            duration:0.5, ease:'easeInOut', delay:0.2
        }}
    >
      <div className='grid grid-cols-3 grid-rows-3 gap-8 p-4 text-white w-4/6 mx-auto'>
          {
            data.map((item) => {
               let href = (item.name.split(' ').join('-')).toLowerCase()
              return(
               
                <Link href={`/services/${href}`}>
                  <motion.div 
                      key={item.id} 
                      className='flex flex-col gap-2 mx-auto w-4/6 mx-auto cursor-pointer rounded-lg p-2'
                      style={{ color:`var(--${item.color})` }}
                      whileHover={{
                        backgroundColor:'var(--grey)',                    
                      }}
                      transition={{
                        duration:0.3, ease:'linear'
                      }}
                    >
                      <IconRenderer iconName={item.Icon} className='w-10 h-10 mx-auto' />
                      <h1 className='text-base text-[--text] text-center'>{item.name}</h1>
                  </motion.div>                  
                </Link>
               )
            })
          }        
      </div>

    </motion.div>
  )
}
