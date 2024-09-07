  import Header from "@/app/components/header/header"
  import ServiceHero from "@/app/components/servicePage/ServiceHero"
  import Desc from "@/app/components/servicePage/Desc"
  import Contact from '../../components/contact/Contact'
  import WhyService from '../../components/servicePage/WhyService'


  const getService = async(servicename) => {
    const response = await fetch(`http://localhost:3000/api/getService/${servicename}`, {
      method:"GET",
    })
    return response.json()

  }

 async function ServicesPage({ params }) {
  const { data } = await getService(params.servicename) 

  const color = (data[0].name.split('-'))[0] 
  
  return (
    <div className="bg-[--light]">          
      <ServiceHero data={data[0]} color={color} />
      <Desc data={data[0]} color={color} />
      <WhyService data={data[0]} color={color} />    
      <div id="service-contact" className=''>
        <Contact color={color} />        
      </div>
    </div>
  )
}
export default ServicesPage