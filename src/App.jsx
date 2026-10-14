import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ServiceMarquee from './components/ServiceMarquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceMarquee />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
