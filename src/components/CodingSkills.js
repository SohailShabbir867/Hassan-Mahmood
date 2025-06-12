import React, { useEffect, useState, useRef } from 'react';

const codingSkills = [
  {
    name: "Python",
    icon: (
      <svg className="w-10 h-10 text-[#00CAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 1-2-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg className="w-10 h-10 text-[#00CAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg className="w-10 h-10 text-[#00CAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-3.31 0-6 2.69-6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.21-1.79 4-4 4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4h2c3.31 0 6-2.69 6-6"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-10 h-10 text-[#00CAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <text x="50%" y="50%" fontSize="9" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fill="currentColor">JS</text>
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg className="w-10 h-10 text-[#00CAFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <text x="50%" y="50%" fontSize="9" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fill="currentColor">C++</text>
      </svg>
    ),
  },
];

export default function CodingSkillsSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="coding-skills" ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 text-[#FB9E3A] relative inline-block transition-all duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#FB9E3A] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}>
          Coding Skills
        </h2>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
            {codingSkills.slice(0, 3).map((skill, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-all duration-1000 ease-out ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400">
                  {skill.name === "Python" && "Proficient in Python for backend development, data analysis, and scripting."}
                  {skill.name === "HTML" && "Expert in structuring web content with semantic HTML5."}
                  {skill.name === "CSS" && "Skilled in styling modern web interfaces using advanced CSS techniques and frameworks like Tailwind CSS."}
                </p>
              </div>
            ))}
          </div>
          
          {/* Container for last two skills centered in their own row */}
          <div className="flex justify-center w-full mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl">
              {codingSkills.slice(3).map((skill, index) => (
                <div
                  key={index + 3}
                  className={`p-6 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-all duration-1000 ease-out ${
                    loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="mb-4 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400">
                    {skill.name === "JavaScript" && "Experienced in building dynamic and interactive web applications with JavaScript frameworks."}
                    {skill.name === "C++" && "Strong foundation in C++ for performance-critical applications and system programming."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}