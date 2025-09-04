// import { useState, useEffect } from 'react';
// import { ScrollAnimation } from './ScrollAnimation';
// import { BookOpen, Award, CheckCircle, AlertCircle } from 'lucide-react';

// function Banner() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 5); // 7 days from now

//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         clearInterval(timer);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-gray-900 text-white text-center py-16 relative overflow-hidden">
//       {/* Background shape/pattern for a more dynamic look */}
//       <div className="absolute inset-0 z-0 opacity-20">
//         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320">
//           <path fill="#ffffff" fillOpacity="0.1" d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,213.3C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
//           <path fill="#ffffff" fillOpacity="0.05" d="M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,192C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
//         </svg>
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4 z-10">
//         <ScrollAnimation animation="fadeInDown" delay={0.2}>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
//             New Course Alert!
//           </h2>
//         </ScrollAnimation>
//         <ScrollAnimation animation="fadeInUp" delay={0.4}>
//           <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto drop-shadow-md text-purple-200">
//             Unlock a new level of knowledge with our highly anticipated "Qur'an from Scratch" course, designed for
//             learners of all levels.
//           </p>
//         </ScrollAnimation>

//         {/* Featured Course Section with Icons */}
//         <ScrollAnimation animation="fadeInUp" delay={0.8}>
//           <div className="max-w-xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 backdrop-blur-sm">
//             <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-800 flex items-center justify-center">
//               <BookOpen size={28} className="text-purple-600 mr-2" />
//               Qur'an from Scratch
//             </h3>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Master correct pronunciation, essential Tajweed rules, and proven memorization techniques with expert guidance.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 font-medium mb-6">
//               <div className="flex items-center justify-center text-sm">
//                 <CheckCircle size={18} className="text-green-500 mr-2" /> Pronunciation
//               </div>
//               <div className="flex items-center justify-center text-sm">
//                 <CheckCircle size={18} className="text-green-500 mr-2" /> Tajweed Rules
//               </div>
//               <div className="flex items-center justify-center text-sm">
//                 <CheckCircle size={18} className="text-green-500 mr-2" /> Memorization
//               </div>
//             </div>
            
//             <div className="border-t border-gray-200 pt-6">
//               <div className="flex justify-center items-center gap-6">
//                 <div className="text-center">
//                   <span className="text-sm text-gray-500 font-semibold block">Full Price</span>
//                   <span className="text-2xl font-extrabold text-red-600 line-through">N80,000</span>
//                 </div>
//                 <div className="text-2xl text-gray-400 font-light">→</div>
//                 <div className="text-center">
//                   <span className="text-sm text-purple-600 font-semibold block">Limited Early Bird</span>
//                   <span className="text-3xl font-extrabold text-green-600">N60,000</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ScrollAnimation>

//         {/* Countdown Timer with a Clearer Title */}
//         <ScrollAnimation animation="fadeInUp" delay={1.2}>
//           <p className="text-lg md:text-xl font-semibold mt-8 mb-4 drop-shadow-md">
//             Special Early Bird Pricing Ends In:
//           </p>
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-black/80 rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-sm border-2 border-purple-500">
//               <div className="grid grid-cols-4 gap-3 md:gap-6">
//                 <div className="text-center">
//                   <span className="text-3xl md:text-4xl font-extrabold text-green-400 font-mono">{timeLeft.days.toString().padStart(2, '0')}</span>
//                   <div className="text-xs font-medium text-gray-300 uppercase tracking-wider">Days</div>
//                 </div>
//                 <div className="text-center">
//                   <span className="text-3xl md:text-4xl font-extrabold text-green-400 font-mono">{timeLeft.hours.toString().padStart(2, '0')}</span>
//                   <div className="text-xs font-medium text-gray-300 uppercase tracking-wider">Hours</div>
//                 </div>
//                 <div className="text-center">
//                   <span className="text-3xl md:text-4xl font-extrabold text-green-400 font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</span>
//                   <div className="text-xs font-medium text-gray-300 uppercase tracking-wider">Minutes</div>
//                 </div>
//                 <div className="text-center">
//                   <span className="text-3xl md:text-4xl font-extrabold text-green-400 font-mono">{timeLeft.seconds.toString().padStart(2, '0')}</span>
//                   <div className="text-xs font-medium text-gray-300 uppercase tracking-wider">Seconds</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ScrollAnimation>

//         {/* Call to Action Button */}
//         <ScrollAnimation animation="fadeInUp" delay={1.4}>
//           <a
//             href="https://forms.gle/ZZXLwpRPpmQJM71e9"
//             className="inline-block bg-white text-purple-700 px-8 py-3 mt-8 rounded-full font-bold text-lg hover:bg-purple-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
//           >
//             Secure Your Spot Now!
//           </a>
//         </ScrollAnimation>
//       </div>
//     </section>
//   );
// }

// export default Banner;

import { useEffect, useState } from "react";
import { Calendar, Clock, Megaphone } from "lucide-react";

const Banner = () => {
  // Set Early Bird deadline (example: 7 days from now)
  const earlyBirdDeadline = new Date("2025-09-15T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = earlyBirdDeadline - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [earlyBirdDeadline]);

  return (
    <section className="bg-gray-900 text-white py-6 px-6 shadow-xl m-4 max-w-xl mx-auto relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center">
        <div className="flex flex-col justify-center items-center mx-auto mb-4">
          <Megaphone className="w-16 h-16 mx-4 animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Course Alert
          </h2>
        </div>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Enroll in our <span className="font-bold text-xl">Fiqh An-Nisā</span> course today for just{" "}
          <span className="font-bold text-xl">₦15,000</span> (early bird price). <br />
          Offer ends soon. 
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-sm">Days</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm">Hours</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-lg text-center">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm">Seconds</div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://forms.gle/ZZXLwpRPpmQJM71e9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Calendar className="w-5 h-5" />
          Enroll Now for ₦15,000
        </a>

        {/* Regular price note */}
        <p className="mt-4 text-md flex items-center justify-center gap-2 opacity-80">
          <Clock className="w-4 h-4" />
          Regular Price: ₦20,000 after Early Bird ends
        </p>
      </div>
    </section>
  );
};

export default Banner;