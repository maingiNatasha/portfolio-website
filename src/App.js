import React from "react";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
                <div>
                    <About />
                </div>
            </div>
        </>
    );
}

export default App;
