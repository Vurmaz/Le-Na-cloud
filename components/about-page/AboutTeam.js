'use client'
import React, { memo } from 'react'
import { motion } from 'framer-motion'
import data from '@/data/about-date.json'
import AboutTeamItem from './AboutTeamItem'
import AboutTeamText from './AboutTeamText'
import { belowToTopVariants } from '@/libs/variants'

export default memo(function AboutTeam() {

  return (
    <div className='flex gap-2 px-2 md:px-32'>
        <AboutTeamText />
        <motion.div 
            className='px-2 md:px-8 border-l-2 border-black flex flex-col gap-2
            md:[--y-from:100] md:[--y-to:0] md:[--opacity-from:0%] md:[--opacity-to:100%]
            '
            variants={belowToTopVariants}
            viewport={{ once:true }}
            initial='initial'
            whileInView='onView'
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
