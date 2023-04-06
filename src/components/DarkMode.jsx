import { useState, useEffect } from "react";

export default function DarkMode() { 
    const [theme, setTheme] = useState(localStorage.theme); 
    const colorTheme = theme === "dark" ? "light" : "dark"; 
    useEffect(() => { 
        const root = window.document.documentElement; 
        root.classList.add(colorTheme); 
        root.classList.remove(theme); 
        localStorage.setItem('theme', colorTheme); 
    }, [theme, colorTheme]); 
    return [colorTheme, setTheme];
}
