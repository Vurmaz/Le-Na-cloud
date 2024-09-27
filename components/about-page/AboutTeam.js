'use client'
import React, { memo } from 'react'
import { motion } from 'framer-motion'
import data from '@/data/about-date.json'
import AboutTeamItem from './AboutTeamItem'
import AboutTeamText from './AboutTeamText'

export default memo(function AboutTeam() {

  return (
    <div className='flex gap-2 px-2 md:px-32'>
        <AboutTeamText />
        <motion.div 
            className='px-2 md:px-8 border-l-2 border-black flex flex-col gap-2'
            viewport={{ once:true }}
            initial={{ y:-200 }}
            whileInView={{ y:0 }}
            transition={{
                duration:0.5,
                delay:0.1,
                ease:'easeInOut'
            }}
        >
            {
                data.map((item, i) => {
                    return(
                        <AboutTeamItem item={item} key={i} />
                    )
                })
            }
        </motion.div>
    </div>
  )
})
