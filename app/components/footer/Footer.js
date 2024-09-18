import React from 'react'
import FooterServices from './FooterServices'
import Image from 'next/image'
import FooterUsefulLinks from './FooterUsefulLinks'
import FooterContact from './FooterContact'
import Link from 'next/link'

  const getLogos = async() => {
    const response = await fetch('http://localhost:3000/api/getLogos',{ cache: 'no-store' }, {
        method:'GET',
    })
    return response.json()
  }
  
export default async function Footer() {
    const { data } = await getLogos()


  return (
    <div className='h-max bg-[--light]'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 justify-evenly p-8'>
            <FooterServices data={data} />
            <FooterUsefulLinks />
            <FooterContact />            
        </div>
        <hr className='w-5/6 text-black ' />
        <div className='flex flex-col md:flex-row justify-between items-center p-4 gap-2'>
            <div>
                <Image 
                    width={70}
                    height={70}
                    alt='logo'
                    src={'/logo.png'}
                />
            </div>            
            <div>
                <h6 className='text-sm text-center'>Bu siteyi kullanarak kullanım koşullarını kabul etmiş olursunuz.</h6>
            </div>
            <div>
                <Link className='text-xs text-center' href="https://storyset.com/online">illustrations by Storyset</Link>
            </div>
        </div>
    </div>
  )
}
