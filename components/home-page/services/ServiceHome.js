import React from 'react'
import Services from './Services'
import { getLogos } from '@/libs/utils'

export default async function ServiceCall() {

    const { data } = await getLogos()
    
  return (
    <div>
        <Services services={data} />
    </div>
  )
}
