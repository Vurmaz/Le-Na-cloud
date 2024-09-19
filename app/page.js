
import Hero from "./components/hero/Hero"
import ServiceCall from "./components/services/ServiceHome";
import Contact from "./components/contact/Contact";
import Info from "./components/info/Info";
import About from "./components/about/About";
import ReachMe from "./components/ReachMe";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

  const getFaq = async() => {
    const response = await fetch(`http://localhost:3000/api/getFaq`, {
      method:"GET",
    })
    return response.json()

  }  

export default async function Home() {

const FaqData = await getFaq() 
  return (
    <main className="">      
      <Hero />
      <Info />
      <div className="h-max flex items-center">
        <ReachMe />
      </div>       
      <About />
      <ServiceCall />  
      <Faq data={FaqData.data} color={`primary`}/>              
      <Contact id={'home-contact'}/>
      <Footer color='var(--light)' />
    </main>
  );
}
