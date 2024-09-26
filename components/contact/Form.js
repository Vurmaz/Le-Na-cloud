'use client'
import { useState } from 'react'
import * as Form from '@radix-ui/react-form';
import { motion } from 'framer-motion';

export default function ContactForm({ isOpen, setIsOpen, color }) {

    const [data, setData] = useState({
        name:'',
        surname:'',
        email:'',
        telefon:'',
        servis:'',        
    })


    const formSubmit = async(event) => {
        event.preventDefault()
        try{
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    data
                })      
            })                   
            setData({
                name:'',
                surname:'',
                email:'',
                telefon:'',
                servis:'', 
            })  
            setIsOpen(true)              
        }
        catch(err){
            throw new Error(err)            
        }        
    }
    const changeValue = (event) => {
        const value = event.target.value
        const name = event.target.name
        setData({ ...data, [name]:value })
    }
    
  return (
    <div>
        <Form.Root 
            onSubmit={formSubmit} 
            className='w-5/6 lg:w-4/6 mx-auto  h-fit text-black p-8 flex flex-col gap-4 rounded-lg shadow-lg pb-16'
            style={{ backgroundColor:`var(--${color})`}}
        >
            <div className='grid grid-cols-2 gap-4'>
                <Form.Field name='name' className='flex flex-col'>
                    <div className='flex justify-between'>
                        <Form.Label className=''>İsim</Form.Label>                    
                        <Form.Message className='text-xs' match="valueMissing">İsminizi girin</Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input 
                            className='input h-10'
                            type='text'
                            name='name'
                            required
                            value={data.name}
                            onChange={changeValue}
                        />
                    </Form.Control>
                </Form.Field>
                <Form.Field name='surname' className='flex flex-col'>
                    <div className='flex justify-between'>
                        <Form.Label>Soy isim</Form.Label>                    
                        <Form.Message className='text-xs' match="valueMissing">Soyadınızı girin</Form.Message>
                    </div>
                    <Form.Control asChild>
                        <input 
                            className='input h-10'
                            type='text'
                            required
                            name='surname'
                            value={data.surname}
                            onChange={changeValue}                            
                        />
                    </Form.Control>                
                </Form.Field>
            </div>
            <Form.Field name='email' className='flex flex-col'>
                <div className='flex justify-between'>
                    <Form.Label>Email</Form.Label>                    
                    <Form.Message className='text-xs' match="valueMissing">Emailinizi girin</Form.Message>
                    <Form.Message className="text-xs text-white opacity-[0.8]" match="typeMismatch">Lütfen geçerli bir email girin</Form.Message>

                </div>
                <Form.Control asChild>
                    <input 
                        className='input h-10'
                        type='email'
                        required
                        name='email'
                        value={data.email}
                        onChange={changeValue}                          
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name='phone' className='flex flex-col'>
                <div className='flex justify-between'>
                    <Form.Label>Telefon</Form.Label>                    
                    <Form.Message className='text-xs' match="valueMissing">Telefon numaranızı girin</Form.Message>
                    <Form.Message className="text-xs opacity-[0.8]" match="typeMismatch">Lütfen geçerli bir telefon numarası girin</Form.Message>
                </div>
                <Form.Control asChild>
                    <input 
                        className='input h-10'
                        type='tel'
                        required
                        name='telefon'
                        value={data.telefon}
                        onChange={changeValue}                          
                    />
                </Form.Control>
            </Form.Field>            
            <Form.Field name='explain' className='flex flex-col'>
                <div className='flex justify-between'>
                    <Form.Label>İstediğiniz servis</Form.Label>                    
                    <Form.Message className='text-xs' match="valueMissing">Lütfen bu alanı doldurun</Form.Message>
                </div>
                <Form.Control asChild>
                    <textarea 
                        className='input h-24'
                        type='text'
                        required
                        name='servis'
                        value={data.servis}
                        onChange={changeValue}                          
                    />
                </Form.Control>
            </Form.Field>            
            <Form.Submit asChild>
                <motion.button   
                    whileHover={{
                        backgroundColor:'var(--text)'
                    }}              
                    transition={{
                        duration:0.3,
                        ease:'easeInOut'
                    }}    
                    className='border-2 w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-2 md:p-4 rounded-full bg-[--primary] text-white '>
                    Gönder
                </motion.button>
            </Form.Submit>
           
        </Form.Root>
    </div>
  )
}
