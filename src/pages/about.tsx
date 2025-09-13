import profile from '../assets/profile.jpg';
import cvFile from '../assets/CV.pdf';
import SectionLayout from '../layouts/sectionLayout';


const About = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    const scrollContainer = document.querySelector('.overflow-y-scroll') as HTMLElement;
    
    if (section && scrollContainer) {
      const offsetTop = section.offsetTop;
      scrollContainer.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Alvaro_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionLayout title="About Me" bgColor="bg-sunlit" id="about">
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-1 xl:gap-1 px-10 sm:px-20 sm:mx-10 lg:mx-10 lg:px-20'>
          <div className='flex justify-center items-center w-40 sm:w-40 md:w-64 lg:w-[32rem] xl:w-[36rem] max-w-sm lg:max-w-none'>
            <img 
              src={profile} 
              alt="Profile" 
              className='w-full h-auto rounded-2xl shadow-lg object-cover mr-0 lg:mr-10 xl:mr-10' 
            />
          </div>
          <div className='text-justify'>
            <p className='text-base sm:text-lg lg:text-lg'>
              Hi, I’m Alvaro — a Computer Science graduate with a Data Science focus from VU Amsterdam. Originally from Indonesia, I have set my course in the Netherlands to explore opportunities as a Data Engineer or Full-Stack Engineer.
              <br />
              <br />
              I love building software end-to-end: thoughtful front-end experiences, reliable back-end systems, and resilient data pipelines and machine-learning workflows. For me, software engineering is like navigating the ocean, sometimes smooth, sometimes full of waves, but always exciting and full of discovery.     
              <br />
              <br />
              This portfolio is my ocean so dive in, explore, and discover the projects and experiences that have shaped my journey.
            </p>
            <div className='flex gap-4 flex-wrap mt-5 justify-center items-center sm:justify-center sm:items-center lg:justify-start'>
              <button
                onClick={handleDownloadCV}
                className='group relative bg-black/100 px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:text-gray-800 active:scale-95 overflow-hidden'
              >
                <span className='relative z-10 flex items-center gap-2 text-sm sm:text-base lg:text-lg'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  Download CV
                </span>
                <div className='absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
              
              <button
                onClick={scrollToContact}
                className='group relative bg-transparent border-2 border-white text-white px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-gray-800 active:scale-95 overflow-hidden'
              >
                <span className='flex items-center gap-2 text-sm sm:text-base lg:text-lg'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                  </svg>
                  Contact Me
                </span>
              </button>
            </div>
            <br />
            </div>
        </div>
    </SectionLayout>
  )
}

export default About


