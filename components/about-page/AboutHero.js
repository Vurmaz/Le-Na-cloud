
import AboutHeroButton from './AboutHeroButton'
import AboutHeroImage from './AboutHeroImage'
import { memo } from 'react'

export default memo(function AboutHero() {
    
  return ( 
    <div className=' h-auto text-white'>
        <div id='about-hero' className='flex flex-col gap-2 md:h-[65vh] h-max bg-[--primary] pt-8 pb-8 md:pb-0'>
            <h1 className='text-2xl md:text-5xl text-center w-full md:w-4/6 mx-auto'>Salesforce Mükemmelliği ile İşinizi Güçlendirin </h1>
            <p className='text-sm w-5/6 md:w-1/2 mx-auto text-center'>{`Sertifikalı uzmanlardan oluşan ekibimiz, müşteri ilişkilerinizi dönüştürmeye, operasyonları kolaylaştırmaya ve büyümeyi teşvik etmeye kendini adamıştır. Salesforce'un tüm potansiyelini ortaya çıkarmak ve işinizi ileriye taşımak için bizimle iş ortaklığı yapın.`}</p>
            <AboutHeroButton />
        </div>
        <div className='mt-8 md:mt-0'>
           <AboutHeroImage /> 
        </div>                        
    </div>
  )
})
