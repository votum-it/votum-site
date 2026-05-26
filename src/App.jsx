import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Stats        from './components/Stats'
import Services     from './components/Services'
import HowWeWork    from './components/HowWeWork'
import Cases        from './components/Cases'
import CtaBanner    from './components/CtaBanner'
import Footer       from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <LanguageProvider>
      <Nav onContact={openContact} />
      <main>
        <Hero onContact={openContact} />
        <Stats />
        <Services />
        <HowWeWork />
        <Cases />
        <CtaBanner onContact={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </LanguageProvider>
  )
}
