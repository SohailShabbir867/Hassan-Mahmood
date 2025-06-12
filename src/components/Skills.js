import React, { useEffect, useState, useRef } from 'react';
import CodingSkills from '../components/CodingSkills';

// SkillsSection component definition
export default function SkillsSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null); // Create a ref to attach to the section

  useEffect(() => {
    // Intersection Observer to detect when the section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true); // Set loaded to true when the section is visible
            observer.unobserve(entry.target); // Stop observing once it's loaded
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      // Clean up the observer when the component unmounts
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  // Define design skills
  const designSkills = [
    "Canva Designing",
    "Ebook Designing",
    "Graphic Designing",
    "UI/UX Design Tools",
    "Web Design Principles",
  ];

  // Define soft skills
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
  ];

  return (
    // Main container for the Skills section
    // Attach the ref here
    <section id="skills" ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2 className={`text-4xl font-bold text-center mb-12 text-[#FB9E3A] relative inline-block transition-all duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#FB9E3A] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}>
          My Skills
        </h2>

        {/* Skills Categories Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Designing Skills Column */}
          <div className={`w-full md:w-1/2 p-8 bg-gray-900 rounded-lg shadow-xl transform transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'}`}>
            {/* Changed text color to #00CAFF */}
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#00CAFF]">Designing Skills</h3>
            <ul className="space-y-4">
              {designSkills.map((skill, index) => (
                <li key={index} className="text-lg text-gray-300 flex items-center group relative overflow-hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                  {/* Bullet point with a slight hover translation */}
                  <span className="text-[#00CAFF] mr-2 transition-transform duration-300 group-hover:translate-x-1">
                     → 
                  </span>
                  {skill}
                  {/* Underline effect on hover, matching the text color */}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills Column */}
          <div className={`w-full md:w-1/2 p-8 bg-gray-900 rounded-lg shadow-xl transform transition-all duration-1000 ease-out delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Changed text color to #00CAFF */}
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#00CAFF]">Soft Skills</h3>
            <ul className="space-y-4">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-lg text-gray-300 flex items-center group relative overflow-hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                  {/* Bullet point with a slight hover translation */}
                  <span className="text-[#00CAFF] mr-2 transition-transform duration-300 group-hover:translate-x-1">
                     → 
                  </span>
                  {skill}
                  {/* Underline effect on hover, matching the text color */}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CodingSkills />
    </section>
  );
}
