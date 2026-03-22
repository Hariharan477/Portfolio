import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BgOrbs from './components/BgOrbs'

function App() {
  return (
    <>
      <BgOrbs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
