import React from 'react'
import HeroButton from './HeroButton'

export default function HeroText() {
  return (
    <div className='w-full h-auto text-black flex flex-col gap-4 justify-center md:pl-8  xl:pl-16 md:mt-16'>        
        <h1 className='text-center text-3xl  sm:text-4xl xl:text-5xl mt-4 md:text-left text-gradient py-2 font-semibold' >Dijital dönüşüm ile işinizi dönüştürün</h1>
        <p className='mx-auto md:mx-0 text-start text-sm sm:text-base w-5/6 md:text-left leading-relaxed	'>Salesforce gücünüzü maksimuma çıkarın
          verimliliğinizi artırın, büyümenizi hızlandırın.
          Salesforce yönetiminde uzman ekibimizle, iş süreçlerinizi optimize edin, müşteri ilişkilerinizi güçlendirin ve dijital dönüşümünüzü hızlandırın. Le-Na Cloud ile işinizi bulutun ötesine taşıyın.
        </p>        
        <HeroButton />
    </div>
  )
}
