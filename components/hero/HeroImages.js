import React from 'react'
import IconRenderer from '../IconRenderer'
import Card from './Card'
import { MdTimer } from "react-icons/md";

  const getLogos = async() => {
    const response = await fetch('http://localhost:3000/api/getLogos',{ cache: 'no-store' }, {
        method:'GET',
    })
    return response.json()
  }

export default async function HeroImages() {

  const { data } = await getLogos()
  
  return (
    <div className=' h-24 grid grid-cols-3 items-center p-8 mx-auto justify-evenly text-center '>
    <div className='text-xl  h-full flex items-center justify-center gap-2 flex-col'>
      {/* <MdTimer className='w-8 h-8 text-[--primary]' /> */}
      <h2 className='italic'>Süreçleri hızlandıralım</h2>
    </div>
    <div className='text-xl  h-full flex items-center justify-center'>
      <h2 className='italic'>Süreçleri hızlandıralım</h2>
    </div>
    <div className='text-xl'>sizle iletişimde olalom</div>
{/*       <div className='w-full bg-[--light]'>Şirketinizin gelişmesi ve yülselmesi için yardım ediyoruz</div>
      <div className='w-full'>Salesforcedaki uzman ekibiizle </div> */}
      {/* <h1 className='text-3xl w-full text-center'>Şirketinizin gelişmesi ve yülselmesi için yardım ediyoruz</h1> */}
{/*       {
        data.map((item) => {
          return(
            <Card key={item.id} name={item.name} color={item.color} Icon={item.Icon} />
          )
        })
      }    */}
    </div>
  )
}
