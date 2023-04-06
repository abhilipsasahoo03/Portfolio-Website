import { useState } from "react"; 
import { DarkModeSwitch } from "react-toggle-dark-mode"; 
import DarkMode from "../components/DarkMode.jsx"; 

export default function Switcher() { 
    const [colorTheme, setTheme] = DarkMode(); 
    const [darkSide, setDarkSide] = useState( 
        colorTheme === "true" ? true : false
    ); 
    const toggleDarkMode = (checked) => { 
        setTheme(colorTheme); 
        setDarkSide(checked); 
    }; 

    return ( 
        <> 
            <DarkModeSwitch 
                style={{ marginBottom: "2rem" }} 
                checked={darkSide} 
                onChange={toggleDarkMode} 
                size={30} 
            /> 
        </> 
    ); 
}
