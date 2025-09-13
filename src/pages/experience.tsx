import React from 'react'
import SectionLayout from '../layouts/sectionLayout';
import { experiences, techStacks } from '../constants';
import ExperienceCard from '../components/experienceCard';
import TechStackCard from '../components/techStackCard';
import TabButton from '../components/tabButton';

const Experience = () => {
  const [activeTab, setActiveTab] = React.useState('Frontend');

  return (
  <SectionLayout title='My Journey' bgColor='bg-twilight' id='experience' className='pt-10'>
    {/* Experience Cards Section */}
    <div className='flex flex-col justify-center items-center w-full space-y-8 px-4'>
      {experiences.map((exp, idx) => (
        <ExperienceCard
          key={idx}
          company={exp.company}
          logo={exp.logo}
          period={exp.period}
          title={exp.title}
          location={exp.location}
          summary={exp.summary}
          index={idx}
        />
      ))}
    </div>

    {/* Tech Stack Section */}
    <div className='max-w-6xl w-full pb-40 mt-25 px-4'>
      <h2 className='text-xl sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-10 [text-shadow:2px_2px_0_black] text-center'>Tech Stack</h2>
      
      {/* Tab Navigation */}
      <div className='flex justify-center mb-8 text-sm sm:text-sm lg:text-lg xl:text-lg'>
        <div className='bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl'>
          <div className='flex space-x-2'>
            {Object.keys(techStacks).map((category) => (
              <TabButton
                key={category}
                category={category}
                isActive={activeTab === category}
                count={techStacks[category as keyof typeof techStacks].length}
                onClick={() => setActiveTab(category)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Cards Grid */}
      <div className='w-full'>
        <div className='bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl'>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
            {techStacks[activeTab as keyof typeof techStacks].map(({ name, svg, level }) => (
              <TechStackCard
                key={name}
                name={name}
                svg={svg}
                level={level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </SectionLayout>
  )
}

export default Experience