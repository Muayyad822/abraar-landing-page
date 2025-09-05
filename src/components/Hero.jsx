import React, { useEffect, useState } from "react";
import logo from "/assets/alabraar2.jpg";
import { ScrollAnimation } from "./ScrollAnimation";

function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 animate-gradient text-white text-center py-20 overflow-hidden">
      {/* Parallax Circles */}
      <div
        className="absolute top-[-50px] left-[-50px] w-40 h-40 md:w-64 md:h-64 bg-white/20 rounded-full animate-breath"
        style={{
          transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
        }}
      ></div>

      <div
        className="absolute bottom-[-60px] right-[-60px] w-48 h-48 md:w-70 md:h-70 bg-white/20 rounded-full animate-breath delay-200"
        style={{
          transform: `translate(${offset.x * -0.2}px, ${offset.y * -0.2}px)`,
        }}
      ></div>

      {/* Hero Content */}
      <ScrollAnimation animation="fadeIn">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <ScrollAnimation animation="fadeInDown" delay={0.2}>
            <img
              src={logo}
              alt="alabraar logo"
              className="w-48 h-48 md:w-55 md:h-55 mx-auto rounded-full shadow-lg border-4 border-white"
            />
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.4}>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-6">
              Welcome to Al-Abraar Academy
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={0.6}>
            <p className="mt-4 text-2xl md:text-2xl max-w-2xl mx-auto">
              Preserving Knowledge, Nurturing Faith.
            </p>
            <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
              Join our comprehensive Arabic and Islamic education programs
              designed to strengthen your connection with the Quran and Islamic
              knowledge through expert instruction and proven methodologies.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeInUp" delay={0.8}>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 items-center justify-center">
            <a
              href="https://forms.gle/ZZXLwpRPpmQJM71e9"
              className="bg-white text-blue-700 px-6 md:px-8 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-blue-50 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
            <a
              href="https://forms.gle/mn8eZLsLULXppHZ7A"
              className="text-white border-2 border-white px-6 md:px-8 py-3 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-blue-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply as a tutor
            </a>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
}

export default Hero;
