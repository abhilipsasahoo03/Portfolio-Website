import { useState, useEffect } from "react";

export default function DarkMode() { 
    const [theme, setTheme] = useState(localStorage.theme); 
    const colorTheme = theme === "dark" ? "dark" : "light"; 
    useEffect(() => { 
        const root = window.document.documentElement; 
        root.classList.remove(colorTheme); 
        root.classList.add(theme); 
        localStorage.setItem('theme', theme); 
    }, [theme, colorTheme]); 
    return [colorTheme, setTheme];
}