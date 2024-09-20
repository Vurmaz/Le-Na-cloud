import ServiceHero from "@/components/servicePage/ServiceHero"
import Desc from "@/components/servicePage/Desc"
import Contact from '../../../components/contact/Contact'
import WhyService from '../../../components/servicePage/WhyService'
import Action from "@/components/servicePage/Action"
import Faq from "@/components/faq/Faq"
import Footer from "@/components/footer/Footer"
import { getService, getFaq } from '../../../libs/utils'

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
      <div className=''>
        <Contact color={color} id={'service-contact'} />        
      </div>
      <Footer color='white' />
    </div>
  )
}
export default ServicesPage