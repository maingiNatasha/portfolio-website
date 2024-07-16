import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import FadeInDiv from '../animated divs/FadeInDiv';

const SchoolIcon = () => {
    return (
        <IoSchoolSharp />
    )
};

const Education = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    useEffect(() => {
        const handleThemeChange = () => {
            const currentTheme = localStorage.getItem('theme');
            console.log(currentTheme);
            setTheme(currentTheme ? currentTheme : 'light');
        };

        // Event is fired when any change is made to local storage
        window.addEventListener('storage', handleThemeChange);

        // Cleanup function to prevent memory leaks
        return () => {
            window.removeEventListener('storage', handleThemeChange);
        };
    }, []);

    const darkMode = theme === 'dark';
    console.log(theme);
    console.log(darkMode);

    return (
        <div className='py-10'>
            <FadeInDiv>
                <h1 className='font-extra-black text-xl text-sky-600 dark:text-sky-500 uppercase tracking-wide my-3'>Education</h1>
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work'
                            contentStyle={{
                                background: darkMode  ? 'rgba(14, 165, 233, 0.5)' : 'rgb(243 244 246)',
                                color: darkMode ? 'white': 'black'
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid ${darkMode  ? 'rgba(14, 165, 233, 0.5)' : 'rgb(243 244 246)'}`
                            }}
                            date="August 2018 - August 2023"
                            icon={<SchoolIcon />}
                            iconStyle={{
                                background: darkMode  ? 'rgba(14, 165, 233, 0.5))' : 'rgb(243 244 246)',
                                color: darkMode ? 'white': 'black'
                            }}
                        >
                            <h3 className='vertical-timeline-element-title font-bold'>Bachelor of Science in Software Engineering</h3>
                            <p>
                                Studied the foundations and fundamentals of software engineering,
                                including software design, software development, software testing,
                                and software maintenance.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </FadeInDiv>
        </div>
    )
};

export default Education