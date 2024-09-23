
import AboutTexts from './AboutTexts'
import { getAboutData } from '@/libs/utils'

export default async function About() {

    const { data } = await getAboutData()

  return (
    <div 
        className='p-8 flex flex-col gap-16 h-max md:mt-32'        
        id='home-about'
    >
        {
            data.map((item, i) => {
                return(
                    <div key={i}>
                        <AboutTexts item={item} />
                    </div>                
                )
            })
        }
    </div>
  )
}
