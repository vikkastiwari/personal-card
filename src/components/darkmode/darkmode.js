import React from 'react';
import './darkmode.css';

const Darkmode = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span className="label">Dark Mode</span>
    </div>
  );
};

export default Darkmode;
