import { useState, useEffect } from "react";

export default function DarkMode() { 
    const [theme, setTheme] = useState(localStorage.theme); 
    const colorTheme = theme === "dark" ? '<img src="./sun.png" alt="Sun" width="20" height="20" />' : '<img src="./moon.png" alt="Moon" width="20" height="20" />'; 
    useEffect(() => { 
        const root = window.document.documentElement; 
        root.classList.remove(colorTheme); 
        root.classList.add(theme); 
        localStorage.setItem('theme', theme); 
    }, [theme, colorTheme]); 
    return [colorTheme, setTheme] 
}
