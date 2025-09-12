import React from 'react';
import Bubbles from '../components/bubbles';

interface SectionLayoutProps {
    children: React.ReactNode;
    bgColor?: string; 
    id?: string; 
    title?: string;
    className?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ 
    children, 
    bgColor = '', 
    id = 'scroll-container',
    className = '',
    title = ''
 }) => (
    <div id={id} className={`${bgColor} min-h-screen w-full relative text-white [text-shadow:2px_2px_0_black]`}>
      <Bubbles/>
      <div className={`max-w-5xl mx-auto min-h-screen ${className}`} style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='text-5xl font-semibold pt-6 text-left'>{title}</h2>
        <hr className='w-full mx-auto mt-4 border-white pb-5' />
        {children}
      </div>
    </div>
);

export default SectionLayout;