import React, { useRef, useState } from 'react';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const scrollContainer = document.querySelector('.overflow-y-scroll') as HTMLElement;
    
    if (section && scrollContainer) {
      const offsetTop = section.offsetTop;
      scrollContainer.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.overflow-y-scroll') as HTMLElement;
    
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on small screens */}
      <nav 
        ref={navbarRef}
        className="hidden md:block relative w-full z-50"
      >
        <div className="bg-[#070c4e] backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center h-16">
              
              <div className="flex-shrink-0">
                <button 
                  onClick={scrollToTop}
                  className="text-white font-bold text-lg sm:text-xl hover:text-blue-600 transition-colors duration-300"
                >
                  <img src="/logo.png" alt='Logo' className='h-auto w-40 inline-block mr-2 -mt-1' />
                </button>
              </div>
              
              {/* Desktop Navigation Links */}
              <div className="flex-1 flex justify-end items-baseline space-x-4 lg:space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#8189ff] px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-white hover:text-[#8189ff] px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#8189ff] px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#8189ff] px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-300">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Menu - Only visible on small screens */}
      <div className="md:hidden">
        {/* Floating Hamburger Button - Top Left */}
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm text-white hover:text-[#8189ff] focus:outline-none focus:text-[#8189ff] transition-all duration-300 p-3 rounded-xl border border-gray-700 shadow-lg"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Floating Dropdown Menu */}
        <div className={`fixed top-20 left-4 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4 pointer-events-none'}`}>
          <div className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl min-w-48">
            <div className="p-2 space-y-1">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left text-white hover:text-[#8189ff] hover:bg-white/10 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')} 
                className="block w-full text-left text-white hover:text-[#8189ff] hover:bg-white/10 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="block w-full text-left text-white hover:text-[#8189ff] hover:bg-white/10 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left text-white hover:text-[#8189ff] hover:bg-white/10 px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;