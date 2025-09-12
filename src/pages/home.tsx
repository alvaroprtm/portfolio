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
    <div id="home" className="bg-sky min-h-screen w-full relative">
      <div
        className="plane-banner-entrance absolute top-1/4 flex items-center"
        style={{ width: 'max-content' }}
      >
        <div className="banner bg-gray-200 bg-opacity-80 rounded-xl px-8 py-4 ml-[-20px] shadow-lg relative z-10">
          <div className='text-justify text-black'>
            <p className='text-2xl'>Hey everyone, I'm</p>
            <h1 className='text-5xl font-bold my-1'>
              <span className="text-amber-700">Alvaro Pratama Maharto</span>
            </h1>
            <div className='text-xl flex items-center min-h-[2rem]'>
              <span>I am a </span>
              <span className="text-black font-semibold ml-2 min-w-[280px]">
                {currentText}
                <span className="animate-blink text-gray-600">|</span>
              </span>
            </div>
          </div>
        </div>
        <svg
          width="60"
          height="40"
          style={{ marginLeft: '-10px', marginRight: '-10px', zIndex: 5 }}
          className="pointer-events-none"
        >
          <path
            d="M5,5 Q30,40 55,5"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="6,4"
            fill="none"
          />
        </svg>
        <img src={plane} alt="Plane" className="h-40 w-auto relative z-10" />
      </div>
      
      <div className="water-wave"></div>
      
      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="mb-6 text-center">
          <p className="text-blue-900 text-sm [text-shadow:1px_1px_2px_rgba(0,0,0,0.6)]">
            Dive into my underwater world
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-blue-400/20 rounded-full animate-ping"></div>
          <div className="absolute -inset-2 bg-blue-300/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-blue-800 flex justify-center items-start p-2 bg-gradient-to-b from-blue-400/20 to-cyan-500/20 backdrop-blur-sm shadow-lg shadow-cyan-500/30">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-swim-down shadow-lg shadow-cyan-400/50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home