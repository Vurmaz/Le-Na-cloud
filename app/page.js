
import Header from "./components/header/header";
import Hero from "./components/hero/Hero"
import ServiceCall from "./components/services/ServiceHome";
import Contact from "./components/contact/Contact";
import Info from "./components/info/Info";
import About from "./components/about/About";
import ReachMe from "./components/ReachMe";

export default function Home() {

  return (
    <main className="">      
      <Hero />
      <Info />
      <div className="h-85vh flex items-center">
        <ReachMe />
      </div>       
      <About />
      <ServiceCall />                
      <Contact id={'home-contact'}/>
    </main>
  );
}
