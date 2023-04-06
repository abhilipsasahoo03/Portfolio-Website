import React, { useState } from "react";

export default function DarkModeToggleButton() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div
      class={${
        darkToggle && 'dark'
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
    </div>
  );
}
