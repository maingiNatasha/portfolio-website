import React, { useState, useEffect } from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { motion } from "framer-motion";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
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
        <motion.button
            onClick={toggleTheme}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.9
            }}
            transition={{
                duration: 0.25,
                ease: 'easeInOut'
            }}
        >
            {
                theme === 'dark' ? <IoMoon size={25} /> : <IoSunny size={25} />
            }
        </motion.button>
    )
}

export default ThemeToggle