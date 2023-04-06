import React from "react";
import useDarkMode from 'use-dark-mode';

import Toggle from 'react-toggle';
import "react-toggle/style.css";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle 
        checked={darkMode.value}
        icons={{
          checked: "🌓",
          unchecked: "🌓",
        }}
        onChange={darkMode.toggle}
      />
      <button type="button" onClick={darkMode.enable}>
        🌕
      </button>
    </div>
  );
};

export default DarkModeToggle;
