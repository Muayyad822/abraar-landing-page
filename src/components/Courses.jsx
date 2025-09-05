import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import CourseModal from './CourseModal'
import { courseData } from '../courseData';

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation for page load
  useEffect(() => {
    // Set a small delay to ensure the animation runs after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive Islamic education programs designed to nurture knowledge, 
            understanding, and practical application of Islamic teachings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {courseData.map((course, index) => (
            <div key={index} className="flex h-full">
              <CourseCard
                title={course.title}
                description={course.description}
                fee={course.fee}
                format={course.format}
                img={course.img}
                onLearnMore={() => handleLearnMore(course)}
                delay={0.1 + index * 0.1}
              />
            </div>
          ))}
        </div>
        
        <div 
          className="text-center mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            transitionDelay: '0.5s'
          }}
        >
          {/* <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSWkISOduLZgXlj7YFqqVFZhovJULvS7-6S_KUsPmVBIRm8A/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-lg"
          >
            View All Courses
          </a> */}
        </div>
      </div>
      
      {/* Course Modal */}
      <CourseModal 
        course={selectedCourse || {}} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}

export default Courses
