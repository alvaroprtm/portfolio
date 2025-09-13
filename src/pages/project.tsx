import React from 'react'
import SectionLayout from '../layouts/sectionLayout'
import { projects, icons } from '../constants';

const Project = () => {
  return (
    <SectionLayout title='Projects' bgColor='bg-midnight' id='projects'>
      <div className='flex flex-wrap gap-10 justify-center'>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className='backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-gray-700 rounded-2xl shadow-xl flex flex-col items-center w-72 hover:scale-105 hover:bg-[rgba(255,255,255,0.18)] transition-all duration-300 group'
          >
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-40 object-cover'
              style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            />
            <div className='p-6 flex flex-col items-center w-full'>
              <span className='text-xl font-bold text-white mb-2 text-center'>{project.name}</span>
              <p className='text-gray-200 text-center mb-4'>{project.description}</p>
              
              {/* Button container */}
              <div className='flex gap-3 w-full justify-center'>
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex-1 min-w-0'
                >
                  {icons.github}
                  <span className='text-sm'>GitHub</span>
                </a>
                
                {/* Live Demo Button - only show if liveDemo URL exists */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center justify-center px-4 py-2 bg-blue-800 hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 flex-1 min-w-0'
                  >
                    {icons.liveDemo}
                    <span className='text-sm'>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Project