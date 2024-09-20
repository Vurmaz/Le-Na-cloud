import React from 'react'
import Services from './Services'

  const getLogos = async() => {
    const response = await fetch('http://localhost:3000/api/getLogos',{ cache: 'no-store' }, {
        method:'GET',
    })
    return response.json()
  }

export default async function ServiceCall() {

    const { data } = await getLogos()
    
  return (
    <div>
        <Services services={data} />
    </div>
  )
}
