import React from 'react';
import './Loader.css'; // We'll create this CSS file next

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
  );
};

export default Loader;
