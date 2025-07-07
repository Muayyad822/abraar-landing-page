import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Courses />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


