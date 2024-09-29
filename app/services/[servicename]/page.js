import ServiceHero from "@/components/service-page/ServiceHero"
import Desc from "@/components/service-page/Desc"
import Contact from '../../../components/contact/Contact'
import WhyService from '../../../components/service-page/WhyService'
import Action from "@/components/service-page/Action"
import Faq from "@/components/faq/Faq"
import Footer from "@/components/footer/Footer"
import { getService, getFaq } from '../../../libs/utils'
import { notFound } from "next/navigation"
import ReachUs from "@/components/service-page/ReachUs"

export async function generateMetadata({ params }) {
  const { data } = await getService(params.servicename);

  if (!data[0]) {
    return {
      title: 'Servis Bulunamadı | Le-Na cloud',
      description: 'Aradığınız servis bulunamadı.',
    };
  }
  const service = data[0]
  return {
    title: `${service.name.charAt(0).toUpperCase() + service.name.slice(1)} | Le-Na cloud`,
    description: service.title,
    keywords: [
      'Salesforce',
      service.title,
      (service.name.split('-').join(' ')),
      'CRM çözümleri',
      'bulut tabanlı CRM',
    ],
    openGraph: {
      type: 'article',
      url: `https://localhost:3000/services/${service.name}`,
      title: `${service.name} | Le-Na cloud`,
      description: service.description,
    },
  };
}

async function ServicesPage({ params }) {
  
  const { data } = await getService(params.servicename) 
  
  if(!data[0]) {
    notFound()
  }

  const FaqData = await getFaq() 
  
  const color = (data[0].name.split('-'))[0] 
  
  return (
    <>   
      <div className="bg-[--light]">          
        <ServiceHero data={data[0]} color={color} />
        <ReachUs data={data[0]} color={color} />
        <Desc data={data[0]} color={color} />
        <div className="h-max md:h-[100vh] flex items-center">
          <Action color={color} data = {data[0]} />
        </div>      
        <WhyService data={data[0]} color={color} />
        <Faq data={FaqData.data} color={color} />    
        <div className=''>
          <Contact color='white' id={'service-contact'} />        
        </div>
        <Footer color='white' />
      </div>      
    </>

  )
}
export default ServicesPage