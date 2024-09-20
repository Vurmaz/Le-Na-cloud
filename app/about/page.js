import React from 'react'
import AboutHero from '../../components/about-page/AboutHero'
import AboutTeam from '../../components/about-page/AboutTeam'
import AboutVision from '../../components/about-page/AboutVision'
import Contact from '../../components/contact/Contact'
import AboutAction from '../../components/about-page/AboutAction'
import Footer from '../../components/footer/Footer'
import Faq from '../../components/faq/Faq'
import { getAboutData, getFaq } from '../../libs/utils'

export default async function AboutPage() {

    const { data } = await getAboutData()
    const faqData = await getFaq()

  return (
    <div className='h-auto'>
        <AboutHero />   
        <div className='h-max md:h-[65vh] flex items-start py-16 md:py-0'>
           <AboutTeam  /> 
        </div>        
        <div className='h-max md:h-[65vh] py-16 md:py-0'>
          <AboutAction />  
        </div>
        <div className='h-auto py-16 md:py-0'>
            {
                data.map((item, i) => {
                    return (
                        <AboutVision key={i} item={item} />
                    )
                })
            }            
        </div>
        <Faq data={faqData.data} color='primary' />
        <Contact id={'about-contact'} /> 
        <Footer color='var(--light)' />     
    </div>

  )
}
