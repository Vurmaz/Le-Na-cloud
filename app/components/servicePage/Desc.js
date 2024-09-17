'use client'
import Reasons from './Reasons'
import DescText from './DescText'
import { motion } from 'framer-motion'

export default function Desc({ data, color }) {
        const name = (data.name.split('-').join(' '))[0].toUpperCase()
        
  return (
    <div className=''>
        <DescText data={data} color={color} />        
        <div>
            <motion.h1 
                className='text-center text-3xl md:text-4xl lg:text-5xl text-bold mt-16' 
                style={{ color:`var(--${color}` }}
                initial={{ y:200, opacity:0 }}
                whileInView={{ y:0, opacity:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.5 }}
            >Peki {name + data.name.slice(1)} ne işe yarar?</motion.h1>
            <div 
                className='grid grid-cols-2 p-4 gap-2 md:gap-16 mx-auto py-8 sm:py-16 lg:py-32' 
            >
                {
                    data.reasons.map((reason, i) => {
                        return (
                            <Reasons reason={reason} color={color} key={i}  />
                        )
                    })
                }
            </div>            
        </div>

    </div>
  )
}
