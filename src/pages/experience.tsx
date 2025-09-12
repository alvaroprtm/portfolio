import React from 'react'
import Bubbles from '../components/bubbles'
import SectionLayout from '../layouts/sectionLayout';

const experiences = [
  {
    company: "MindReality",
    logo: "mindreality.jpeg",
    period: "Oct 2022 – May 2023",
    title: "Junior Web Developer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Developed a full-stack React app with Firebase and improved deployment efficiency through CI/CD pipelines.",
  },
   {
    company: "Vrije Universiteit Amsterdam",
    logo: "vu.png",
    period: "Nov 2023 – Dec 2023",
    title: "Teaching Assistant, Statistical Methods",
    location: "Amsterdam, Netherlands",
    summary:
      "Led practical sessions and managed grading for group assignments, supporting students in statistical methods.",
  },
  {
    company: "TechBros",
    logo: "techbros.jpeg",
    period: "Dec 2024 – Feb 2025",
    title: "Software Engineer (Part-time)",
    location: "Düsseldorf, Germany",
    summary:
      "Developed ETL pipelines, full-stack solutions, interactive dashboards, and HR automation platforms for telecom and business analytics.",
  },
  {
    company: "Workwize",
    logo: "workwize.jpeg",
    period: "Mar 2025 – Sep 2025",
    title: "Data Engineer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Automated workflows, built internal tools, developed backend services, and ensured data reliability to optimize 3PL logistics operations.",
  }, 
];

const techStacks = {
  Frontend: [
    { name: 'JavaScript', svg: 'js.svg', level: 'Advanced' },
    { name: 'React', svg: 'react.svg', level: 'Advanced' },
    { name: 'TailwindCSS', svg: 'tailwind.svg', level: 'Intermediate' },
    { name: 'HTML', svg: 'html.svg', level: 'Advanced' },
    { name: 'CSS', svg: 'css.svg', level: 'Advanced' },
  ],
  Backend: [
    { name: 'Node.js', svg: 'node.svg', level: 'Intermediate' },
    { name: 'Laravel', svg: 'laravel.svg', level: 'Intermediate' },
    { name: 'Java', svg: 'java.svg', level: 'Intermediate' },
    { name: 'Python', svg: 'py.svg', level: 'Advanced' },
    { name: 'SQL', svg: 'sql.svg', level: 'Advanced' },
    { name: 'C++', svg: 'cpp.svg', level: 'Basic' },
  ],
  Tools: [
    { name: 'Firebase', svg: 'firebase.svg', level: 'Intermediate' },
    { name: 'CircleCI', svg: 'circleci.svg', level: 'Basic' },
    { name: 'Git', svg: 'git.svg', level: 'Advanced' },
    { name: 'Docker', svg: 'docker.svg', level: 'Basic' },
    { name: 'AWS', svg: 'aws.svg', level: 'Basic' },
  ],
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced': return 'bg-green-500';
    case 'Intermediate': return 'bg-yellow-500';
    case 'Basic': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

  const Experience = () => {
    const [activeTab, setActiveTab] = React.useState('Frontend');

    return (
    <SectionLayout title='My Journey' bgColor='bg-twilight' id='experience'>
      <div className='flex flex-col justify-center items-center w-full space-y-8 px-4'>
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className='underwater-float underwater-sway relative bg-[rgba(0,0,0,0.25)] rounded-xl p-6 shadow-lg backdrop-blur-sm border border-white/10 max-w-3xl hover:scale-105 transition-all duration-500'
            style={{
              animationDelay: `${idx * 0.8}s, ${idx * 1.2}s`,
            }}
          >
            {/* Add floating particles effect */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden rounded-xl'>
              <div 
                className='absolute w-1 h-1 bg-white/30 rounded-full animate-pulse'
                style={{
                  top: `${20 + (idx * 15)}%`,
                  left: `${10 + (idx * 20)}%`,
                  animationDelay: `${idx * 0.5}s`,
                  animationDuration: '2s'
                }}
              />
              <div 
                className='absolute w-1.5 h-1.5 bg-cyan-300/40 rounded-full animate-bounce'
                style={{
                  top: `${60 + (idx * 10)}%`,
                  right: `${15 + (idx * 10)}%`,
                  animationDelay: `${idx * 0.7}s`,
                  animationDuration: '3s'
                }}
              />
            </div>

            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-1'>
              <div className='flex items-center mb-2 md:mb-0'>
                <img
                  src={`/src/assets/${exp.logo}`}
                  alt={exp.company}
                  className='w-7 h-7 p-1 hover:rotate-12 transition-transform duration-300'
                />
                <span className='text-sm text-gray-300 ml-2'>{exp.company}</span>
              </div>
              <span className='text-sm text-gray-400'>{exp.period}</span>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2'>
              <span className='text-2xl font-medium text-white [text-shadow:2px_2px_0_black]'>{exp.title}</span>
              <span className='text-sm text-gray-400'>{exp.location}</span>
            </div>
            <p className='text-gray-300 mt-2 text-medium'>{exp.summary}</p>
          </div>
        ))}
      </div>


        <div className='max-w-6xl w-full pb-40 mt-25 px-4'>
          <h2 className='text-4xl font-semibold text-white mb-10 [text-shadow:2px_2px_0_black] text-center'>Tech Stack</h2>
          
          <div className='flex justify-center mb-8'>
            <div className='bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl'>
              <div className='flex space-x-2'>
                {Object.keys(techStacks).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`relative overflow-hidden rounded-xl px-8 py-4 transition-all duration-300 ${
                      activeTab === category
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='text-center'>
                        <div className={`transition-colors duration-300 ${
                          activeTab === category 
                            ? 'text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}>
                          {category}
                        </div>
                        <div className={`text-xs transition-colors duration-300 ${
                          activeTab === category 
                            ? 'text-cyan-300' 
                            : 'text-gray-500 hover:text-gray-400'
                        }`}>
                          {techStacks[category as keyof typeof techStacks].length} skills
                        </div>
                      </div>
                    </div>
                    
                    {activeTab === category && (
                      <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-xl' />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl'>
              
              <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
                {techStacks[activeTab as keyof typeof techStacks].map(({ name, svg, level }) => (
                  <div 
                    key={name} 
                    className='group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl'
                  >
                    <div className='flex flex-col items-center'>
                      {svg ? (
                        <div className='relative mb-4'>
                          <img
                            src={`/src/assets/tech_stack/${svg}`}
                            alt={name}
                            className='w-16 h-16 group-hover:scale-110 transition-transform duration-300'
                          />
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getLevelColor(level)} border-2 border-white shadow-lg`} />
                        </div>
                      ) : (
                        <div className='w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl shadow-md border border-gray-500 mb-4 text-white text-xl font-semibold group-hover:scale-110 transition-transform duration-300'>
                          {name[0]}
                        </div>
                      )}
                      
                      <h4 className='text-white text-center mb-2 group-hover:text-cyan-300 transition-colors duration-300'>
                        {name}
                      </h4>
                      
                      <div className='flex items-center space-x-2'>
                        <div className={`w-2 h-2 rounded-full ${getLevelColor(level)}`} />
                        <span className='text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                          {level}
                        </span>
                      </div>
                    </div>
                    
                    <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    )
  }

export default Experience