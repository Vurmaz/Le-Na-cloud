import ServiceHero from "@/components/service-page/ServiceHero"
import Desc from "@/components/service-page/Desc"
import Contact from '../../../components/contact/Contact'
import WhyService from '../../../components/service-page/WhyService'
import Action from "@/components/service-page/Action"
import Faq from "@/components/faq/Faq"
import Footer from "@/components/footer/Footer"
import { getService, getFaq } from '../../../libs/utils'
import Head from 'next/head'


async function ServicesPage({ params }) {
  
  const { data } = await getService(params.servicename) 
  const FaqData = await getFaq() 
  
  const color = (data[0].name.split('-'))[0] 
  console.log(data[0])
  return (
    <>
      <Head>
        <title>{data[0].name} | Le-Na cloud</title>
        <meta name="description" content={data[0].description} />
        <meta name="keywords" content={`'Salesforce', 'Salesforce hizmetleri', ${data[0].name},'CRM çözümleri','bulut tabanlı CRM'`} />
        <meta property="og:type" content='article' />
        <meta property="og:url" content={`https://le-na.cloud/services/${data[0].name}`} />
        <meta property="og:title" content={data[0].title} />
        <meta property="og:description" content={data[0].description} />        
      </Head>    
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
    </>

  )
}
export default ServicesPage