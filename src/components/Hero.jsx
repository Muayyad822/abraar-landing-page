import React from 'react'
import logo from "../assets/alabraar2.jpg";
import { ScrollAnimation } from './ScrollAnimation';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-20 relative">
      <ScrollAnimation animation="fadeIn">
        <div className="relative max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInDown" delay={0.2}>
            <img
              src={logo}
              alt="alabraar logo"
              className="w-55 h-55 mx-auto rounded-full shadow-lg border-4 border-white"
            />
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <h1 className="text-4xl font-extrabold mt-6">
              Welcome to Al-Abraar Foundation
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <p className="mt-4 text-xl max-w-2xl mx-auto">
              Preserving Knowledge, Nurturing Faith.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeInUp" delay={0.8}>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 items-center justify-center">
            <a 
              href="https://forms.gle/ZZXLwpRPpmQJM71e9" 
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
            <a 
              href="https://forms.gle/mn8eZLsLULXppHZ7A" 
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply as a tutor
            </a>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  )
}

export default Hero

