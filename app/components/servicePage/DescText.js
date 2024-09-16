'use client'
import { motion } from 'framer-motion'
import ServiceHeroSvg from './ServiceHeroSvg'
import Svg from '../../../public/amico-2.svg'

export default function DescText({ data, color }) {

  return (
        <motion.div             
            className='w-full lg:w-5/6 mx-auto h-max md:h-screen px-2 md:px-8 flex flex-col-reverse md:grid md:grid-cols-2 pt-16 py-32 gap-2 md:gap-8'
        >
            <motion.div 
                className='p-8 md:p-0' 
                style={{ color:`var(--${color})` }}
                initial={{ opacity:0, x:-200 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.4 }}
                viewport={{ once:true }} 
            >
                <ServiceHeroSvg
                    Icon={Svg}
                    color={`var(--${color})`}
                    alt='service' 
                    className=''               
                />                
            </motion.div>
            <motion.div 
                className='flex flex-col text-center md:text-start justify-center p-4 gap-2 md:gap-8'
                initial={{ opacity:0, x:200 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.4 }} 
                viewport={{ once:true }}               
            >
                <h2 className='text-3xl md:text-3xl lg:text-4xl text-bold' style={{ color:`var(--${color})` }}>Verimliliğinizi arttırın</h2>
                <p className='text-base md:text-lg lg:text-xl ' >{data.description}</p> 
                <motion.button 
                    style={{ backgroundColor:`var(--${color}`}}
                    className='px-4 py-2 w-max rounded-lg text-white text-sm md:text-base mx-auto md:mx-0'
                    whileHover={{ backgroundColor:'var(--text)' }}
                    transition={{ duration:0.4, ease:'easeInOut' }}
                >
                    Bize ulaşın
                </motion.button>
            </motion.div>
            
        </motion.div>
  )
}
