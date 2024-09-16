
import AboutTexts from './AboutTexts'


const getAboutData = async() => {        
    const response = await fetch(`http://localhost:3000/api/getAbout`, { cache:'no-cache' }, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
        return await response.json()           
}

export default async function About() {

    const { data } = await getAboutData()

  return (
    <div 
        className='p-8 flex flex-col gap-16 h-fit'        
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
