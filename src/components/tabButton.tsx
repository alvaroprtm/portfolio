import React from 'react';

interface TabButtonProps {
  category: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ category, isActive, count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl px-6 py-3 transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
          : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
      }`}
    >
      <div className='flex items-center space-x-3'>
        <div className='text-center'>
          <div className={`transition-colors duration-300 ${
            isActive 
              ? 'text-white' 
              : 'text-gray-300 hover:text-white'
          }`}>
            {category}
          </div>
          <div className={`text-xs md:text-sm transition-colors duration-300 ${
            isActive 
              ? 'text-cyan-300' 
              : 'text-gray-500 hover:text-gray-400'
          }`}>
            {count} skills
          </div>
        </div>
      </div>
      
      {isActive && (
        <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-xl' />
      )}
    </button>
  );
};

export default TabButton;
