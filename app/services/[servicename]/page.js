import ServiceHero from "@/app/components/servicePage/ServiceHero"
import Desc from "@/app/components/servicePage/Desc"
import Contact from '../../components/contact/Contact'
import WhyService from '../../components/servicePage/WhyService'
import Action from "@/app/components/servicePage/Action"
import Faq from "@/app/components/faq/Faq"

  const getService = async(servicename) => {    
    const response = await fetch(`http://localhost:3000/api/getService/${servicename}`, {
      method:"GET",
    })
    return response.json()

  }
  const getFaq = async() => {
    const response = await fetch(`http://localhost:3000/api/getFaq`, {
      method:"GET",
    })
    return response.json()

  }  

 async function ServicesPage({ params }) {
  
  const { data } = await getService(params.servicename) 
  const FaqData = await getFaq() 
  
  const color = (data[0].name.split('-'))[0] 
  
  return (
    <div className="bg-[--light]">          
      <ServiceHero data={data[0]} color={color} />
      <Desc data={data[0]} color={color} />
      <div className="h-max md:h-[100vh] flex items-center">
        <Action color={color} data = {data[0]} />
      </div>      
      <WhyService data={data[0]} color={color} />
      <Faq data={FaqData.data} color={color} />    
      <div id="service-contact" className=''>
        <Contact color={color} />        
      </div>
    </div>
  )
}
export default ServicesPage