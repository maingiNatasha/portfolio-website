import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import FadeInDiv from '../animated divs/FadeInDiv';

const SchoolIcon = () => {
    return (
        <IoSchoolSharp />
    )
};

const Education = ({ theme }) => {
    const darkMode = theme === 'dark';

    return (
        <div className='py-10'>
            <FadeInDiv>
                <h1 className='font-extra-black text-xl text-sky-600 dark:text-sky-500 uppercase tracking-wide my-4'>Education</h1>
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work text-white dark:text-black'
                            contentStyle={{
                                background: darkMode  ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.6)',
                                color: darkMode ? 'rgb(229 231 235)': 'black'
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid ${darkMode  ? 'rgba(14, 165, 233, 0.3)' : 'rgb(243 244 246)'}`
                            }}
                            date="August 2018 - August 2023"
                            icon={<SchoolIcon />}
                            iconStyle={{
                                background: darkMode  ? 'rgb(12 74 110)' : 'rgb(243 244 246)',
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