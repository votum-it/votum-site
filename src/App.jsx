import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import About        from './components/About'
import Blog         from './components/Blog'

function Home({ onContact }) {
  return (
    <main>
      <Hero onContact={onContact} />
      <Stats />
      <Services />
      <HowWeWork />
      <Cases />
      <CtaBanner onContact={onContact} />
    </main>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact  = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <BrowserRouter>
      <LanguageProvider>
        <Nav onContact={openContact} />
        <Routes>
          <Route path="/"      element={<Home  onContact={openContact} />} />
          <Route path="/about" element={<About onContact={openContact} />} />
          <Route path="/blog"  element={<Blog />} />
        </Routes>
        <Footer />
        <ContactModal open={contactOpen} onClose={closeContact} />
      </LanguageProvider>
    </BrowserRouter>
  )
}
