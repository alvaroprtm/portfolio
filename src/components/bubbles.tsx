import React from 'react';

interface BubblesProps {
  maxTop?: number; // percent, default 100
  show?: boolean; // default true
}

const NUM_BUBBLES = 50;

const Bubbles: React.FC<BubblesProps> = ({ maxTop = 100, show = true }) => {
  if (!show) return null;
  const bubbles = Array.from({ length: NUM_BUBBLES }, (_, i) => {
    const top = Math.random() * maxTop;  // percent
    const left = Math.random() * 100; // percent
    const size = Math.random() * 2 + 3; // px (smaller bubbles)
    const delay = Math.random() * 10; // seconds
    const dx = (Math.random() - 0.5) * 40; // px, -20 to +20
    const dy = (Math.random() - 0.5) * 40; // px, -20 to +20
    return (
      <div
        key={i}
        className="bubble"
        style={{
          position: 'absolute', 
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
          pointerEvents: 'none',
          zIndex: 0,
          '--dx': `${dx}px`,
          '--dy': `${dy}px`,
        } as React.CSSProperties}
      />
    );
  });

  return <>{bubbles}</>;
};

export default Bubbles;