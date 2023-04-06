import React, { useState } from "react";

export default function DarkModeToggleButton() {
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var tconst [darkToggle, setDarkToggle] = useState(false);

  return (
    <div
      class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${
        darkToggle && 'dark'
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
);
}
