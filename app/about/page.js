import React from 'react'
import AboutHero from '../components/aboutPage/AboutHero'
import AboutTeam from '../components/aboutPage/AboutTeam'
import AboutVision from '../components/aboutPage/AboutVision'
import Contact from '../components/contact/Contact'
import AboutOutro from '../components/aboutPage/AboutOutro'

const getAboutData = async() => {        
    const response = await fetch(`http://localhost:3000/api/getAbout`, { cache:'no-cache' }, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
        return await response.json()           
}

export default async function AboutPage() {

    const { data } = await getAboutData()

  return (
    <div className='h-auto'>
        <AboutHero />   
        <div className='h-max md:h-[65vh] flex items-start py-16 md:py-0'>
           <AboutTeam  /> 
        </div>
        
        <div className='h-max md:h-[65vh] py-16 md:py-0'>
          <AboutOutro />  
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
  
       
        <Contact />      
    </div>

  )
}
