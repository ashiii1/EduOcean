import React from 'react';
import MainNavbar from './MainNavbar';
import { useState, useEffect } from 'react';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Set timeout to make content visible after 1 second
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);
  



    
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <MainNavbar />
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <nav className="bg-white w-64 p-4 h-full shadow-lg">
          <div className="mt-20 ml-4 text-lg">
            <a href="/about-us" className="block text-black hover:text-gray-500">
              About Us
            </a>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Teacher Section */}
          <section className={`mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl font-bold mb-6">Our Esteemed Teachers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-300 p-4 rounded shadow-md flex flex-col items-center text-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.FBGLi77e5GKIhHM2p_AAwQHaE8&pid=Api&P=0&h=180"
                  alt="Teacher 1"
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Teacher 1</h3>
                <p className="text-gray-600">Expert in Subject A. Known for engaging classes and detailed explanations.</p>
              </div>
              <div className="bg-gray-300 p-4 rounded shadow-md flex flex-col items-center text-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.FBGLi77e5GKIhHM2p_AAwQHaE8&pid=Api&P=0&h=180"
                  alt="Teacher 2"
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Teacher 2</h3>
                <p className="text-gray-600">Specializes in Subject B. Praised for their clear explanations and interactive teaching style.</p>
              </div>
              <div className="bg-gray-300 p-4 rounded shadow-md flex flex-col items-center text-center">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.FBGLi77e5GKIhHM2p_AAwQHaE8&pid=Api&P=0&h=180"
                  alt="Teacher 3"
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Teacher 3</h3>
                <p className="text-gray-600">Renowned for Subject C. Recognized for their dedication and comprehensive teaching methods.</p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className={`mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl font-bold mb-6">Impact Statistics</h2>
            <div className="flex flex-col md:flex-row md:justify-around">
              <div className="bg-gray-400 p-6 rounded shadow-md text-center">
                <h3 className="text-4xl font-bold text-black">250+</h3>
                <p className="text-gray-800 mt-2">Students Benefited</p>
              </div>
              <div className="bg-gray-400 p-6 rounded shadow-md text-center mt-6 md:mt-0">
                <h3 className="text-4xl font-bold text-black">10+</h3>
                <p className="text-gray-800 mt-2">Companies Associated</p>
              </div>
            </div>
          </section>

          {/* Praise Section */}
          <section className={`mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl font-bold mb-6">Why Our LMS Stands Out</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Our LMS provides a user-friendly and interactive learning experience.</li>
              <li>We offer a comprehensive range of courses from basics to advanced levels.</li>
              <li>Our live streaming classes are equipped with features like chat, screen sharing, and a whiteboard.</li>
              <li>Students receive certificates upon completing assessments, adding value to their learning journey.</li>
              <li>Our platform includes a vibrant community for student support and engagement.</li>
              <li>Access recorded classes anytime to review material at your convenience.</li>
              <li>Our advanced theme settings allow for a customizable learning environment.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
