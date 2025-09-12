import React, { useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);

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
  };

  return (
    <nav 
      ref={navbarRef}
      className="relative w-full z-50"
    >
      <div className="bg-[#070c4e] backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button 
                onClick={scrollToTop}
                className="text-white font-bold text-xl hover:text-[#1DCD9F] transition-colors duration-300"
              >
                Portfolio
              </button>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#8189ff] px-3 py-2 text-sm font-medium transition-colors duration-300">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-white hover:text-[#1DCD9F] px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#1DCD9F] px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#1DCD9F] px-3 py-2 text-sm font-medium transition-colors duration-300">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;