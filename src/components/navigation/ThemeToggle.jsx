import React from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { motion } from "framer-motion";

const ThemeToggle = ({theme, toggleTheme}) => {

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