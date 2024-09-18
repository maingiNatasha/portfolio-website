import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Links from './Links';
import MobileNav from './MobileNav';
import classNames from 'classnames';

const Navbar = ({ theme, toggleTheme}) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const navbarClasses = classNames(
        'navbar fixed w-full top-0 left-0 z-10 transition duration-200',
        {
            'bg-transparent text-white' : !isSticky,
            [`${theme}-theme-gradient text-black dark:text-white shadow-lg`]: isSticky,
        }
    );

    return (
        <nav className={navbarClasses}>
            <div className='flex justify-between items-center py-4 px-8'>
                <div>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className='hidden md:block'>
                    <Links />
                </div>
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar