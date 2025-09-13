import React, { useEffect, useState } from 'react'
import plane from '../assets/plane.svg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer.',
    'Data Engineer.',
    'Problem Solver.',
    'Software Engineer.',
    'Tech Enthusiast.'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('scroll-container') as HTMLElement;
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        setIsVisible(scrollTop < 100);
      }
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <div id="home" className="bg-blue-400 min-h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="plane-banner-entrance flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl">
          <div className="banner bg-gray-200 bg-opacity-80 rounded-xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 shadow-lg relative z-10 mb-4 sm:mb-0 sm:ml-[-20px] order-2 sm:order-1">
            <div className='text-center sm:text-justify text-black'>
              <p className='text-lg sm:text-xl lg:text-2xl'>Hey everyone, I'm</p>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold my-1'>
                <span className="text-blue-900 leading-tight block sm:inline">Alvaro Pratama Maharto</span>
              </h1>
              <div className='text-base sm:text-lg lg:text-xl flex flex-col sm:flex-row items-center justify-center sm:justify-start min-h-[2rem] lg:min-h-[2.5rem]'>
                <span className="mb-1 sm:mb-0">I am a </span>
                <span className="text-black font-semibold sm:ml-2 min-w-[200px] sm:min-w-[240px] lg:min-w-[280px] text-center sm:text-left">
                  {currentText}
                  <span className="animate-blink text-gray-600">|</span>
                </span>
              </div>
            </div>
          </div>

          {/* Connecting line - hidden on mobile */}
          <svg
            width="60"
            height="40"
            style={{ marginLeft: '-10px', marginRight: '-10px', zIndex: 5 }}
            className="pointer-events-none hidden sm:block order-2"
          >
            <path
              d="M5,5 Q30,40 55,5"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="6,4"
              fill="none"
            />
          </svg>

          {/* Plane with responsive sizing */}
          <img 
            src={plane} 
            alt="Plane" 
            className="h-24 w-auto sm:h-32 md:h-36 lg:h-40 xl:h-44 relative z-10 order-1 sm:order-3" 
          />
        </div>
      </div>
      
      <div className="water-wave"></div>
      
      {/* Scroll indicator with responsive positioning */}
      <div className="absolute bottom-25 sm:bottom-36 md:bottom-40 lg:bottom-30 xl:bottom-30 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="mb-4 sm:mb-6 text-center px-4">
          <p className="text-blue-900 text-sm sm:text-base [text-shadow:1px_1px_1px_rgba(0,0,0,0.3)]">
            Dive into my underwater world
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-3 sm:-inset-4 bg-blue-400/20 rounded-full animate-ping"></div>
          <div className="absolute -inset-1 sm:-inset-2 bg-blue-300/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          
          <div className="w-[30px] h-[56px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 sm:border-4 border-blue-800 flex justify-center items-start p-1.5 sm:p-2 bg-gradient-to-b from-blue-400/20 to-cyan-500/20 backdrop-blur-sm shadow-lg shadow-cyan-500/30">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500 animate-swim-down shadow-lg shadow-cyan-400/50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home