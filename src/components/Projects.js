import React, { useEffect, useState, useRef } from 'react';

const projects = [
  {
    title: "Ebook Design Platform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://placehold.co/400x250/333333/FB9E3A?text=Ebook+Project",
    projectUrl: "#",
  },
  {
    title: "Python Web Application",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://placehold.co/400x250/333333/00CAFF?text=Python+Project",
    projectUrl: "#",
  },
  {
    title: "Responsive Portfolio Site",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "https://placehold.co/400x250/333333/FB9E3A?text=Portfolio+Site",
    projectUrl: "#",
  },
  {
    title: "CSS Animations Showcase",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    imageUrl: "https://placehold.co/400x250/333333/00CAFF?text=CSS+Animations",
    projectUrl: "#",
  },
  {
    title: "JavaScript Interactive Tool",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    imageUrl: "https://placehold.co/400x250/333333/FB9E3A?text=JS+Tool",
    projectUrl: "#",
  },
];

export default function ProjectsSection() {
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
    <section id="portfolio" ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 text-[#FB9E3A] relative inline-block transition-all duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#FB9E3A] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}>
          My Projects
        </h2>

        <div className="flex flex-col items-center">
          {/* First row with 3 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-all duration-1000 ease-out ${
                  loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 w-full h-48 rounded-md overflow-hidden border-2 border-gray-700">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/400x250/333333/FB9E3A?text=Image+Missing";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00CAFF] text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
          
          {/* Second row with last 2 projects centered */}
          <div className="flex justify-center w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {projects.slice(3).map((project, index) => (
                <div
                  key={index + 3}
                  className={`p-6 bg-gray-900 rounded-lg shadow-xl flex flex-col items-center text-center transform transition-all duration-1000 ease-out ${
                    loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="mb-4 w-full h-48 rounded-md overflow-hidden border-2 border-gray-700">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x250/333333/FB9E3A?text=Image+Missing";
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white text-sm mb-4">{project.description}</p>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CAFF] text-black font-semibold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}