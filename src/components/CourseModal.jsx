import React, { useEffect } from 'react'

function CourseModal({ course, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        animation: 'fadeIn 0.3s ease-out forwards'
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          animation: 'fadeIn 0.3s ease-out forwards'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">{course.title}</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 focus:outline-none"
              style={{
                transition: 'transform 0.3s ease',
                transform: 'rotate(0deg)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6" style={{ animation: 'fadeInUp 0.4s ease-out forwards' }}>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Course Description</h4>
            <p className="text-gray-600">{course.fullDescription || course.description}</p>
          </div>
          
          {course.curriculum && (
            <div className="mb-6" style={{ animation: 'fadeInUp 0.5s ease-out forwards' }}>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Curriculum</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {course.curriculum.map((item, index) => (
                  <li 
                    key={index} 
                    style={{ 
                      animation: 'fadeInRight 0.5s ease-out forwards',
                      animationDelay: `${0.1 + index * 0.05}s`,
                      opacity: 0,
                      transform: 'translateX(-10px)'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {course.features && (
            <div className="mb-6" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Features</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {course.features.map((feature, index) => (
                  <li 
                    key={index} 
                    style={{ 
                      animation: 'fadeInRight 0.5s ease-out forwards',
                      animationDelay: `${0.3 + index * 0.05}s`,
                      opacity: 0,
                      transform: 'translateX(-10px)'
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {course.duration && (
            <div className="mb-6" style={{ animation: 'fadeInUp 0.7s ease-out forwards' }}>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Duration</h4>
              <p className="text-gray-600">{course.duration}</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div 
          className="bg-gray-50 p-6 rounded-b-lg flex justify-end"
          style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSWkISOduLZgXlj7YFqqVFZhovJULvS7-6S_KUsPmVBIRm8A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 hover:shadow-lg"
            style={{
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default CourseModal

