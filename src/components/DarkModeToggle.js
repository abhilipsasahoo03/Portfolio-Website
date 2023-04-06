import React from "react";
import useDarkMode from 'use-dark-mode';

import Toggle from 'react-toggle';
import "react-toggle/style.css";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <label>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle 
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <button type="button" onClick={darkMode.enable}>
        🌕
      </button>
    </label>
  );
};

export default DarkModeToggle;
