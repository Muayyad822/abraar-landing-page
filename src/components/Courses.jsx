import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'
import CourseModal from './CourseModal'

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

  const courseData = [
    {
      title: "Qur'an from Scratch",
      description: "Learn correct pronunciation, tajweed rules, and memorization.",
      fullDescription: "Our comprehensive Qur'an program designed for beginners and those looking to improve their recitation. This course covers proper pronunciation (makharij), tajweed rules, and effective memorization techniques.",
      curriculum: [
        "Introduction to Arabic letters and sounds",
        "Proper articulation points (makharij)",
        "Essential tajweed rules",
        "Memorization techniques",
        "Practical recitation sessions",
      ],
      features: [
        "Live online classes with qualified instructors",
        "Small group sessions for personalized attention",
        "Regular progress assessments",
        "Certification upon completion"
      ],
      duration: "16 weeks (extendable based on student progress)"
    },
    {
      title: "Arabiyyah Course",
      description: "Learn to read, write, and speak Arabic fluently.",
      fullDescription: "A structured Arabic language program that takes students from basic to advanced levels. Learn to read, write, and speak Arabic with confidence through our proven methodology.",
      curriculum: [
        "Essential vocabulary building",
        "Conversation practice",
        "Reading and comprehension"
      ],
      features: [
        "Progressive learning approach",
        "Interactive exercises and assignments",
        "Cultural context and practical usage",
        "Speaking practice with expert instructors"
      ],
      duration: "3 levels, 12 weeks each"
    },
    {
      title: "Idaady Programme",
      description: "Arabic and Islamic prep program for beginners.",
      fullDescription: "A foundational program designed for beginners to build a solid base in Arabic language and Islamic studies. This preparatory course sets students up for success in more advanced Islamic education.",
      curriculum: [
        "Introduction to Islamic studies",
        "Basic Arabic vocabulary and grammar",
        "Islamic etiquette and manners",
        "Stories of the Prophets",
        "Fundamentals of Islamic belief"
      ],
      features: [
        "Age-appropriate teaching methods",
        "Engaging and interactive lessons",
        "Regular progress reports",
      ],
      duration: "24 weeks"
    },
    {
      title: "Thanawy Programme",
      description: "Structured Islamic learning for senior secondary-level students.",
      fullDescription: "An advanced program for students who have completed the Idaady level or have equivalent knowledge. This program delves deeper into Islamic sciences and Arabic studies at a senior secondary level.",
      curriculum: [
        "Advanced Arabic grammar and literature",
        "Principles of Fiqh (Islamic jurisprudence)",
        "Hadith studies and sciences",
        "Tafsir methodology",
        "Islamic history and civilization",
      ],
      features: [
        "Rigorous academic curriculum",
        "Research projects and presentations",
        "Critical thinking and analysis",
        "Preparation for higher Islamic studies"
      ],
      duration: "24 weeks"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course, index) => (
            <CourseCard 
              key={index}
              title={course.title}
              description={course.description}
              onLearnMore={() => handleLearnMore(course)}
              delay={0.1 + index * 0.1}
            />
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



