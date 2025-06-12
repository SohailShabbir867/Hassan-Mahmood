import React, { useEffect, useState } from 'react';
import Image from '../assets/myimage.png'
// import image from '../assets/myimage.png'; // Importing the image for the user profile - This import path caused the error.

// AboutSection component definition
export default function AboutSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set 'loaded' to true after the component mounts to trigger entry animations
    setLoaded(true);
  }, []);

  return (
    // Main container for the About section
    // Added 'py-16' for vertical padding and 'overflow-hidden' for animation clipping
    <section id="about" className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Heading */}
        <h2
          className={`text-4xl font-bold text-center mb-12 text-[#FB9E3A] relative inline-block transition-all duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#FB9E3A] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100`}
        >
          About Me
        </h2>


        {/* Content Wrapper for Image and Information */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Column: User Image */}
          <div className={`w-full md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-[#FB9E3A]">
              <img
                // Reverted to a placeholder image URL to resolve the compilation error.
                // Please replace this URL with the direct public URL of your image,
                // or ensure 'myimage.png' is correctly placed and accessible in your project's 'assets' folder.
                src={Image}
                alt="Hassan Mahmood"
                // Changed object-cover to object-contain to ensure the image is fully visible within the div
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/400x400/333333/FB9E3A?text=Image+Not+Found";
                }}
              />
            </div>
          </div>

          {/* Right Column: User Information */}
          <div className={`w-full md:w-1/2 text-center md:text-left transform transition-all duration-1000 ease-out delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Hello, I'm <span className="text-[#FB9E3A]">Hassan Mahmood</span>
            </h3>
            <p className="text-lg text-[#00CAFF] leading-relaxed mb-6 text-center">
                Expert In Ebook Desgning with Canva ,Desgning Websites And Logo Desgning
            </p>

            <div className="space-y-4 text-left inline-block md:block">
              {/* Education Information */}
              <p className="text-lg text-gray-300 group"> {/* Added 'group' to parent p for underline */}
                <span className="font-semibold text-[#00CAFF] mr-[5px] relative inline-block transition-colors duration-200">
                  Study:
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </span> Bachelor of Software Engineering
              </p>
              <p className="text-lg text-gray-300 group"> {/* Added 'group' to parent p for underline */}
                <span className="font-semibold text-[#00CAFF] mr-[5px] relative inline-block transition-colors duration-200">
                  University:
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </span> Islamia University Bahawalpur
              </p>
              <p className="text-lg text-gray-300 group"> {/* Added 'group' to parent p for underline */}
                <span className="font-semibold text-[#00CAFF] mr-[5px] relative inline-block transition-colors duration-200">
                  School:
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </span> Govt High School Jajjah Abbasina
              </p>
              {/* Address Information */}
              <p className="text-lg text-gray-300 group"> {/* Added 'group' to parent p for underline */}
                <span className="font-semibold text-[#00CAFF] mr-[5px] relative inline-block transition-colors duration-200">
                  Address:
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00CAFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </span> Punjab Rahim Yar Khan Khanpur
              </p>
            </div>
            {/* Call to Action Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-[#FB9E3A] text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Donload CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
