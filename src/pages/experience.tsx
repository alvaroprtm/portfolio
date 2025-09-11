import React from 'react'

const experiences = [
  {
    company: "MindReality",
    period: "Oct 2022 – May 2023",
    title: "Junior Web Developer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Developed a full-stack React app with Firebase and improved deployment efficiency through CI/CD pipelines.",
  },
   {
    company: "Vrije Universiteit Amsterdam",
    period: "Nov 2023 – Dec 2023",
    title: "Teaching Assistant, Statistical Methods",
    location: "Amsterdam, Netherlands",
    summary:
      "Led practical sessions and managed grading for group assignments, supporting students in statistical methods.",
  },
  {
    company: "TechBros",
    period: "Dec 2024 – Feb 2025",
    title: "Software Engineer (Part-time)",
    location: "Düsseldorf, Germany",
    summary:
      "Developed ETL pipelines, full-stack solutions, interactive dashboards, and HR automation platforms for telecom and business analytics.",
  },
  {
    company: "Workwize",
    period: "Mar 2025 – Sep 2025",
    title: "Data Engineer Intern",
    location: "Amsterdam, Netherlands",
    summary:
      "Automated workflows, built internal tools, developed backend services, and ensured data reliability to optimize 3PL logistics operations.",
  }, 
];

const techStacks = {
  Frontend: [
    { name: 'JavaScript', svg: 'js.svg' },
    { name: 'React', svg: 'react.svg' },
    { name: 'TailwindCSS', svg: 'tailwind.svg' },
    { name: 'HTML', svg: 'html.svg' },
    { name: 'CSS', svg: 'css.svg' },
  ],
  Backend: [
    { name: 'Node.js', svg: 'node.svg' },
    { name: 'Laravel', svg: 'laravel.svg' },
    { name: 'Java', svg: 'java.svg' },
    { name: 'Python', svg: 'py.svg' },
    { name: 'SQL', svg: 'sql.svg' },
    { name: 'C++', svg: 'cpp.svg' },
  ],
  Tools: [
    { name: 'Firebase', svg: 'firebase.svg' },
    { name: 'CircleCI', svg: 'circleci.svg' },
    { name: 'Git', svg: 'git.svg' },
    { name: 'Docker (basic)', svg: 'docker.svg' },
    { name: 'AWS', svg: 'aws.svg' },
  ],
};


const Experience = () => {
  return (
    <div className='bg-twilight min-h-screen w-full relative flex flex-col items-center py-16'>
      <h2 className='text-4xl font-bold text-white mb-10 [text-shadow:2px_2px_0_black]'>Work Experience</h2>
      <div className='max-w-3xl w-full space-y-8'>
        {experiences.map((exp, idx) => (
          <div key={idx} className='bg-[rgba(0,0,0,0.25)] rounded-xl p-6 shadow-lg'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-1'>
              <span className='text-sm text-white'>{exp.company}</span>
              <span className='text-sm text-gray-200'>{exp.period}</span>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2'>
              <span className='text-lg font-medium text-white'>{exp.title}</span>
              <span className='text-sm text-gray-300'>{exp.location}</span>
            </div>
            <p className='text-gray-100 mt-2'>{exp.summary}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className='max-w-3xl w-full mt-12'>
        <h2 className='text-2xl text-yellow-200 mb-6'>Tech Stack</h2>
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className='mb-6'>
            <h3 className='text-xl font-semibold text-white mb-2'>{category}</h3>
            <div className='flex flex-wrap gap-6 items-center'>
              {items.map(({ name, svg }) => (
                <div key={name} className='flex flex-row items-center'>
                  {svg ? (
                    <img
                      src={`/src/assets/tech_stack/${svg}`}
                      alt={name}
                      className='w-7 h-7 mr-1'
                    />
                  ) : (
                    <div className='w-7 h-7 flex items-center justify-center bg-gray-700 rounded-lg shadow-md border border-gray-200 mb-1 text-white text-sm'>
                      {name[0]}
                    </div>
                  )}
                  <span className='text-sm text-gray-100'>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience