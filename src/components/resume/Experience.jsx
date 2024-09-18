import React from 'react';
import { MdWork } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FadeInDiv from '../animated divs/FadeInDiv';

const WorkIcon = () => {
    return (
        <MdWork />
    )
};

const Experience = ({ theme }) => {
    const darkMode = theme === 'dark';

    return (
        <div className='py-5'>
            <FadeInDiv>
                <h1 className='font-bold text-2xl text-sky-600 dark:text-sky-500 tracking-wide my-4'>Work Experience</h1>
                <div className='mt-2'>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work'
                            contentStyle={{
                                background: darkMode  ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.6)',
                                color: darkMode ? 'rgb(229 231 235)': 'black'
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid ${darkMode  ? 'rgba(14, 165, 233, 0.3)' : 'rgb(243 244 246)'}`
                            }}
                            date="January 2023 - April 2023"
                            icon={<WorkIcon />}
                            iconStyle={{
                                background: darkMode  ? 'rgb(12 74 110)' : 'rgb(243 244 246)',
                                color: darkMode ? 'white': 'black'
                            }}
                        >
                            <h3 className='vertical-timeline-element-title font-bold'>Attain Enterprise Solutions Ltd</h3>
                            <h5 className='font-bold'>Attache / Intern</h5>
                            <p>
                                Developed a Python-based web scraper to extract stock information from
                                the Google Finance stock website, enhancing data retrieval efficiency.
                            </p>
                            <p>
                                Skills acquired include web scraping using Python's
                                Beautiful Soup framework, database management using MySql database and data analysis
                                using Power BI.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </FadeInDiv>
        </div>
    )
};

export default Experience