import React, { useEffect, useState } from 'react';

const DepthMeter = () => {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const updateDepth = () => {
      const scrollContainer = document.getElementById('scroll-container') as HTMLElement;
      
      if (scrollContainer) {
        const scrollTop = scrollContainer.scrollTop;
        const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        const scrollProgress = scrollTop / scrollHeight;
        
        // Define depth ranges for each section
        // Home (sky) = surface level (negative depth or 0)
        // About (sunlit) = 0-200m
        // Experience (twilight) = 200-1000m  
        // Projects (midnight) = 1000-4000m
        // Contact (abyss) = 4000-7000m
        
        const maxDepth = 7000; // Mariana Trench depth
        const currentDepth = Math.round(scrollProgress * maxDepth);
        
        setDepth(currentDepth);
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateDepth);
    };

    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      updateDepth();
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const getDepthZone = (depth: number) => {
    if (depth <= 0) return { zone: 'Surface', color: 'text-blue-300' };
    if (depth <= 200) return { zone: 'Sunlight', color: 'text-yellow-300' };
    if (depth <= 1000) return { zone: 'Twilight', color: 'text-purple-300' };
    if (depth <= 4000) return { zone: 'Midnight', color: 'text-blue-400' };
    return { zone: 'Abyssal', color: 'text-red-300' };
  };

  const { zone, color } = getDepthZone(depth);

  return (
    <div className="fixed flex flex-col justify-center items-center right-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/80 backdrop-blur-sm rounded-xl p-4 w-25 border border-gray-700">
      <div className="text-center">
        <div className="text-white text-sm font-medium mb-1">Depth</div>
        <div className="text-xl font-bold text-cyan-400 mb-2">
          {depth.toLocaleString()}m
        </div>
        <div className={`text-xs ${color} font-medium`}>
          {zone}
        </div>
      </div>

      <div className="w-5 h-32 bg-gray-600 rounded-full mt-3 relative overflow-hidden">
        <div
          className="absolute top-0 w-full bg-gradient-to-t from-blue-950 via-blue-800 to-blue-400 transition-all duration-300 ease-out"
          style={{ height: `${Math.min((depth / 7000) * 100, 100)}%` }}
        />
        <div className="absolute top-0 w-full h-full">
          {[0, 200, 1000, 4000, 7000].map((markerDepth, index) => (
            <div
              key={markerDepth}
              className="absolute w-full h-px bg-white"
              style={{ top: `${(markerDepth / 7000) * 100}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepthMeter;