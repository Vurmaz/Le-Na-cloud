
import React from 'react'
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function FormText() {

  return (
    <div className='mb-8 w-full'>
        <h2 className='text-2xl sm:text-3xl lg:text-5xl text-center py-4 text-[--text] leading-loose'>Hemen iletişime geçin ve kullanmaya başlayın</h2>
        <hr className='border-t-2 border-black py-2' />
        <div className='flex flex-wrap sm:justify-center justify-start md:justify-start'>
          <p className='text-center text-xs md:text-base'>Sorularınız ve daha fazla bilgi için <span className='text-[--service] text-sm md:text-lg'>544 776 4144</span> numaralı telefondan bize ulaşın</p>      
        </div>  
    </div>
  )
}
