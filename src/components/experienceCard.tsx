import React from 'react';

interface ExperienceCardProps {
  company: string;
  logo: string;
  period: string;
  title: string;
  location: string;
  summary: string;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  logo,
  period,
  title,
  location,
  summary,
  index
}) => {
  return (
    <div 
      className='underwater-float underwater-sway relative bg-[rgba(0,0,0,0.25)] rounded-xl p-6 shadow-lg backdrop-blur-sm border border-white/10 max-w-3xl hover:scale-105 transition-all duration-500'
      style={{
        animationDelay: `${index * 0.8}s, ${index * 1.2}s`,
      }}
    >
      {/* Floating bubbles effect */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden rounded-xl'>
        <div 
          className='absolute w-1 h-1 bg-white/30 rounded-full animate-pulse'
          style={{
            top: `${20 + (index * 15)}%`,
            left: `${10 + (index * 20)}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: '2s'
          }}
        />
        <div 
          className='absolute w-1.5 h-1.5 bg-cyan-300/40 rounded-full animate-bounce'
          style={{
            top: `${60 + (index * 10)}%`,
            right: `${15 + (index * 10)}%`,
            animationDelay: `${index * 0.7}s`,
            animationDuration: '3s'
          }}
        />
      </div>

      {/* Company info and period */}
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-1'>
        <div className='flex items-center mb-2 md:mb-0'>
          <img
            src={`${logo}`}
            alt={company}
            className='w-7 h-7 p-1 hover:rotate-12 transition-transform duration-300'
          />
          <span className='text-sm text-gray-300 ml-2'>{company}</span>
        </div>
        <span className='text-sm text-gray-400'>{period}</span>
      </div>

      {/* Title and location */}
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-2'>
        <span className='text-2xl font-medium text-white [text-shadow:2px_2px_0_black]'>{title}</span>
        <span className='text-sm text-gray-400'>{location}</span>
      </div>

      {/* Summary */}
      <p className='text-gray-300 mt-2 text-medium'>{summary}</p>
    </div>
  );
};

export default ExperienceCard;
