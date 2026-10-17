import { useState } from 'react'
import Loader from './components/Loader.jsx'
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
  const [revealed, setRevealed] = useState(false) // site mounts when the panes start opening
  const [loaderDone, setLoaderDone] = useState(false) // loader is removed once the panes are gone

  return (
    <>
      {!loaderDone && (
        <Loader onReveal={() => setRevealed(true)} onDone={() => setLoaderDone(true)} />
      )}

      {revealed && (
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
      )}
    </>
  )
}