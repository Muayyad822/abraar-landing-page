import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  // Animation for page load
  useEffect(() => {
    // Set a small delay to ensure the animation runs after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Message from Al-Abraar Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number without the + sign
    const whatsappNumber = '2348164890387';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          Contact Us
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div 
                className="flex items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: '0.1s'
                }}
              >
                <FaEnvelope className="mt-1 mr-4 flex-shrink-0 text-blue-500 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <a href="mailto:foundationalabraar@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                    foundationalabraar@gmail.com
                  </a>
                </div>
              </div>
              
              <div 
                className="flex items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: '0.2s'
                }}
              >
                <FaPhoneAlt className="mt-1 mr-4 flex-shrink-0 text-blue-500 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <a href="tel:+2348164890387" className="text-gray-600 hover:text-blue-500 transition-colors">
                    +234 816 489 0387
                  </a>
                </div>
              </div>
              
              <div 
                className="flex items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: '0.3s'
                }}
              >
                <FaWhatsapp className="mt-1 mr-4 flex-shrink-0 text-blue-500 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-800">WhatsApp</h4>
                  <a href="https://wa.me/2348164890387" className="text-gray-600 hover:text-blue-500 transition-colors">
                    +234 816 489 0387
                  </a>
                </div>
              </div>
              
              <div 
                className="flex items-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: '0.4s'
                }}
              >
                <FaMapMarkerAlt className="mt-1 mr-4 flex-shrink-0 text-blue-500 w-5 h-5" />
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Virtual Online School</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div 
              className="mt-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: '0.5s'
              }}
            >
              <h4 className="font-medium text-gray-800 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/alabraarfoundation_" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full text-blue-500 hover:text-white"
                   style={{
                     transition: 'all 0.3s ease'
                   }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.backgroundColor = '#3b82f6';
                     e.currentTarget.style.transform = 'scale(1.1) rotate(6deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.backgroundColor = '';
                     e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                   }}
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@alabraar.academy?_t=ZS-8zTFCv10Ufy&_r=1" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full text-blue-500 hover:text-white"
                   style={{
                     transition: 'all 0.3s ease'
                   }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.backgroundColor = '#3b82f6';
                     e.currentTarget.style.transform = 'scale(1.1) rotate(6deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.backgroundColor = '';
                     e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                   }}
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@alabraarislamicfoundation6752?si=mZBGUwN7CkNGlTZC" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full text-blue-500 hover:text-white"
                   style={{
                     transition: 'all 0.3s ease'
                   }}
                   onMouseOver={(e) => {
                     e.currentTarget.style.backgroundColor = '#3b82f6';
                     e.currentTarget.style.transform = 'scale(1.1) rotate(6deg)';
                   }}
                   onMouseOut={(e) => {
                     e.currentTarget.style.backgroundColor = '';
                     e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                   }}
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className="bg-white p-8 rounded-lg shadow-md"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    transition: 'all 0.3s ease'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg flex items-center justify-center"
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
                <FaWhatsapp className="mr-2" /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact




