import React, { useEffect, useRef, useState } from 'react'
import profile from '../assets/profile.jpg';

const NUM_RAYS = 20;


const About = () => {
  const [showRays, setShowRays] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowRays(true);
        else setShowRays(false);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const rays = showRays
    ? Array.from({ length: NUM_RAYS }, (_, i) => {
        const rayX = `${Math.floor(Math.random() * 81) + 10}%`;
        const rayAngle = `${Math.floor(Math.random() * 25) - 12}deg`;
        const rayDelay = `${(Math.random() * 2).toFixed(2)}s`;
        return (
          <div
            key={i}
            className="sun-ray"
            style={{
              '--ray-x': rayX,
              '--ray-angle': rayAngle,
              '--ray-delay': rayDelay,
            } as React.CSSProperties}
          ></div>
        );
      })
    : null;

  return (
    <div ref={sectionRef} className='bg-sunlit min-h-screen w-full relative'>
      {/* {rays} */}
      <div className='max-w-3xl mx-auto h-screen flex justify-center items-center' style={{ position: 'relative', zIndex: 1 }}>
        <div className='mr-8'>
          <img src={profile} alt="Profile" className='rounded-full mx-auto' />
        </div>
        <div className='bg-[rgba(0,0,0,0.35)] rounded-xl p-8 shadow-lg'>
          <div className='text-justify text-white [text-shadow:2px_2px_0_black]'>
            <h2 className='text-4xl font-bold mb-4'>Introduction</h2>
            <p>
              Hi, I’m Alvaro — a Computer Science graduate with a splash of Data Science from VU Amsterdam. I love exploring the depths of software development, from frontend design to backend engineering, and even diving into data pipelines and machine learning. For me, building software is like navigating the ocean: sometimes calm and smooth, sometimes full of waves, but always exciting and full of discovery.
            </p>
            <br />
            <p>
              What drives me is curiosity and the thrill of learning something new. Whether it’s experimenting with fresh technologies, collaborating with a diverse crew, or optimizing systems to run smoother, I’m always ready to dive deeper. This portfolio is my little ocean so take a deep breath, swim around, and explore the projects and experiences that shape my journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
