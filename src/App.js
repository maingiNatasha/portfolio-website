import React, { useState, useEffect } from 'react';
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from './components/contact/Contact';

const App = () => {
    const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'dark';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <HeroSection />
            <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                <div>
                    <About />
                    <Resume theme={theme} />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default App;