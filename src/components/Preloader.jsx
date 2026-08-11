import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={isHidden ? 'hidden' : ''}>
      <div className="preloader-inner">
        <div className="preloader-ring"></div>
        <p className="preloader-text">Explore Udaipur</p>
      </div>
    </div>
  );
};

export default Preloader;
