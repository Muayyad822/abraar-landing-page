import React from 'react'
import Hero from './components/Hero'
import Banner from './components/Banner'
import About from './components/About'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans overflow-x-hidden w-full max-w-full">
      <Hero />
      <Banner />
      <About />
      <Courses />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App



