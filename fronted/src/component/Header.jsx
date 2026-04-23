import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTheme } from './ThemeContext';

export default function Header() {
    const { theme, toggleTheme } = useTheme();


    const [font, setFont] = useState(() => localStorage.getItem("selectedFont") || "");

    // apply font to body and save to localstorage

    useEffect(() => {
        document.body.className = `${theme} ${font}`.trim();
        localStorage.setItem("selectedFont", font);
    }, [theme, font]); // <-- run effect when either theme or font changes

    const handleFontChange = (e) => {
        setFont(e.target.value);
    };

    return (
        <header className={`header-container ${theme}`}>
            <div className="header-content">
                {/* LEFT: Logo */}
                <div className="logo">
                    {/* <p>🌍 World Explorer</p> */}
                    <a href="/">🌍 World Explorer</a>
                </div>

                {/* RIGHT: Buttons */}
                <div className="header-actions">
                    <button className="theme-button" onClick={toggleTheme}>
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>

                    {/* font changer */}

                    <select value={font} onChange={handleFontChange} >
                        <option value="">Default</option>
                        <option value="font-inter">Inter (Best for body)</option>
                        <option value="font-montserrat">Montserrat (Great for headings)</option>
                        <option value="font-poppins">Poppins (Soft & modern)</option>
                    </select>



                    {/* <button className="logout-button" onClick={() => alert('Logged out!')}>
                        Logout
                    </button> */}
                </div>
            </div>
        </header>
    );
}
