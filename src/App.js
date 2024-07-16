import React from "react";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                <div>
                    <About />
                    <Resume />
                </div>
            </div>
        </>
    );
}

export default App;
