import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Stats      from './components/Stats'
import Services   from './components/Services'
import HowWeWork  from './components/HowWeWork'
import Cases      from './components/Cases'
import CtaBanner  from './components/CtaBanner'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* <Stats /> */}
        <Services />
        <HowWeWork />
        <Cases />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
