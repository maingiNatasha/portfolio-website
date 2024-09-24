import React, { useState, useEffect } from 'react';
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ProgressBar from './components/navigation/ProgressBar';
// import classNames from 'classnames';

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
            <ProgressBar />
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <HeroSection />
            <div className={`${theme}-theme-gradient text-black dark:text-white`}>
                <div>
                    <About />
                    <Resume theme={theme} />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;