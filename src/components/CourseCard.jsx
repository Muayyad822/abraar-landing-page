import React from 'react'

function CourseCard({ title, description, onLearnMore }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
        <span className="text-white text-5xl opacity-20">
          {title.charAt(0)}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          onClick={onLearnMore}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default CourseCard
