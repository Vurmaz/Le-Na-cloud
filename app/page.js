
import Hero from "../components/home-page/hero/Hero"
import ServiceCall from "../components/home-page/services/ServiceHome";
import Contact from "../components/contact/Contact";
import Info from "../components/home-page/info/Info";
import About from "../components/home-page/about/About";
import ReachMe from "../components/home-page/ReachMe";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import { getFaq } from "@/libs/utils";

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
      <Faq data={FaqData} color={`primary`}/>              
      <Contact id={'home-contact'} color='light' />
      <Footer color='var(--light)' />
    </main>
  );
}
