import React from 'react'

const projects = [
  {
    name: "Portfolio Website",
    image: "/src/assets/cloud_bg.png",
    github: "https://github.com/alvaroprtm/portfolio",
    description: "A personal portfolio built with React and Tailwind CSS, showcasing my skills, projects, and experience.",
  },
  {
    name: "Data Pipeline",
    image: "/src/assets/cloud_bg.png",
    github: "https://github.com/alvaroprtm/data-pipeline",
    description: "An automated ETL pipeline for processing and analyzing large datasets using Python.",
  },
  {
    name: "Data Pipeline",
    image: "/src/assets/cloud_bg.png",
    github: "https://github.com/alvaroprtm/data-pipeline",
    description: "An automated ETL pipeline for processing and analyzing large datasets using Python.",
  },
  // Add more projects as needed
];

const githubIcon = (
  <svg width="24" height="24" fill="currentColor" className="text-gray-300 mr-2" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Project = () => {
  return (
    <div className='bg-midnight min-h-screen w-full relative flex flex-col items-center py-16'>
      <h2 className='text-4xl font-bold text-white mb-10 [text-shadow:2px_2px_0_black]'>Projects</h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className='backdrop-blur-lg bg-[rgba(255,255,255,0.08)] border border-gray-700 rounded-2xl shadow-xl flex flex-col items-center w-72 hover:scale-105 hover:bg-[rgba(255,255,255,0.18)] transition-all duration-300 group overflow-hidden'
          >
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-40 object-cover'
              style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
            />
            <div className='p-6 flex flex-col items-center w-full'>
              <span className='text-xl font-bold text-white mb-2 text-center'>{project.name}</span>
              <p className='text-gray-200 text-center mb-2'>{project.description}</p>
              <span className='flex items-center text-blue-300 mt-2 font-medium group-hover:text-blue-400 transition-colors'>
                {githubIcon}
                View on GitHub
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Project