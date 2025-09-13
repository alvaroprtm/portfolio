import React from 'react';

interface TechStackCardProps {
  name: string;
  svg?: string;
  level: string;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced': return 'bg-green-500';
    case 'Intermediate': return 'bg-yellow-500';
    case 'Basic': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const TechStackCard: React.FC<TechStackCardProps> = ({ name, svg, level }) => {
  return (
    <div className='group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl'>
      <div className='flex flex-col items-center'>
        {/* Tech icon */}
        {svg ? (
          <div className='relative mb-4'>
            <img
              src={`${svg}`}
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
        
        {/* Tech name */}
        <h4 className='text-white text-center mb-2 group-hover:text-cyan-300 transition-colors duration-300 text-sm md:text-base'>
          {name}
        </h4>
        
        {/* Level indicator */}
        <div className='flex items-center space-x-2'>
          <div className={`w-2 h-2 rounded-full ${getLevelColor(level)}`} />
          <span className='text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
            {level}
          </span>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
    </div>
  );
};

export default TechStackCard;
