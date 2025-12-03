import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="text-center">
        <div className="spinner mb-6"></div>
        <div className="text-primary-gold text-2xl font-serif font-bold animate-pulse">
          Darbar Decor
        </div>
        <div className="text-white/80 text-sm mt-2">Creating Beautiful Moments</div>
      </div>
    </div>
  );
};

export default Preloader;
