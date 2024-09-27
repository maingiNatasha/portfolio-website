import React, { useState, useEffect, Suspense, lazy } from 'react';

const ProgressBar = lazy(() => import("./components/navigation/ProgressBar"));
const Navbar = lazy(() => import("./components/navigation/Navbar"));
const HeroSection = lazy(() => import("./components/hero/HeroSection"));
const About = lazy(() => import("./components/about/About"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

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
            <Suspense fallback={<div>Loading...</div>}>
                <ProgressBar />
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <HeroSection />
                <div className={`${theme}-theme-gradient text-black dark:text-white`}>
                    <About />
                    <Resume theme={theme} />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            </Suspense>
        </>
    );
}

export default App;