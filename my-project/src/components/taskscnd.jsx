import React, { useState } from "react";
import './app.css';

const Taskscnd = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className={`page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={changeDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
    </div >
  )
};

export default Taskscnd;


