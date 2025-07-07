import React from 'react'

function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Secure your spot today!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join live group or private classes based on your preference.
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfSWkISOduLZgXlj7YFqqVFZhovJULvS7-6S_KUsPmVBIRm8A/viewform?usp=dialog" 
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition duration-300"
        >
          Enroll Now
        </a>
      </div>
    </section>
  )
}

export default CTA