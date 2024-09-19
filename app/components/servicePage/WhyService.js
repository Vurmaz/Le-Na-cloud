'use client'
import { MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdSmartToy } from "react-icons/md";
import { GiScales } from "react-icons/gi";
import { motion} from "framer-motion";


export default function WhyService({ data, color }) {

    const icons = [MdSmartToy, MdOutlineSecurity, GiScales, BiSupport]

  return (
    <motion.div 
        className='h-max md:h-screen py-16 p-4 text-center px-2 lg:px-16 flex flex-col justify-center gap-4 lg:gap-8 w-full lg:w-11/12 xl:w-5/6 m-auto'
        initial={{ opacity:0, y:300 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.5, ease:'easeInOut' }}
    >
        <h1 
            style={{ color:`var(--${color})`}} 
            className='text-3xl sm:text-4xl md:text-5xl'
        >
            {data.conclusion.title}
        </h1>
        <h6 className='text-lg sm:text-xl md:text-xl px-8 md:px-0'>{data.conclusion.description}</h6>
        <div 
            className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-4 '                       
        >
            {
                data.conclusion.benefits.map((item, i) => {
                    let Icon = (icons.filter((element, index) => index == i))[0]
                   
                    return(
                        <div                            
                            key={i}
                            className='flex flex-col gap-4 w-full service-card mx-auto border-2 border-light shadow-lg rounded-lg p-2 bg-white'                            
                            style={{ color:`var(--${color})`}}                        
                        >
                            <Icon className='w-8 h-8 lg:w-12 lg:h-12 mx-auto' />
                            <h5 className='text-lg xl:text-2xl text-[--text] text-bold'>{item.title}</h5>
                            <p className='text-xs md:text-sm text-[--text]'>{item.desc}</p>
                        </div>
                    )
                })
            }            
        </div>

    </motion.div>
  )
}
