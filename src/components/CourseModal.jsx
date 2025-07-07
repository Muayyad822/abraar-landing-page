import React from 'react'

function CourseModal({ course, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">{course.title}</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Course Description</h4>
            <p className="text-gray-600">{course.fullDescription || course.description}</p>
          </div>
          
          {course.curriculum && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Curriculum</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {course.curriculum.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {course.features && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Features</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {course.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {course.duration && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Duration</h4>
              <p className="text-gray-600">{course.duration}</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-b-lg flex justify-end">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSWkISOduLZgXlj7YFqqVFZhovJULvS7-6S_KUsPmVBIRm8A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseModal