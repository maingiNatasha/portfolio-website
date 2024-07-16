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

const Experience = () => {

    return (
        <div className='py-5'>
            <FadeInDiv>
                <h1 className='font-extra-black text-xl text-sky-600 dark:text-sky-500 uppercase tracking-wide my-3'>Work Experience</h1>
                <div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className='vertical-timeline-element--work'
                            contentStyle={{
                                background: 'rgb(243 244 246) dark:rgba(14, 165, 233, 0.5)',
                                color: 'black'
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid rgb(243 244 246)'
                            }}
                            date="January 2023 - April 2023"
                            icon={<WorkIcon />}
                            iconStyle={{
                                background: 'rgb(243 244 246)',
                                color: 'black'
                                }}
                        >
                            <h3 className='vertical-timeline-element-title font-bold'>Attain Enterprise Solutions Ltd</h3>
                            <h5 className='font-bold'>Attache / Intern</h5>
                            <p>
                                I was assigned a project to carry out that involved Data analysis and Visualization.
                            </p>
                            <p>
                                Skills that were acquired during this attachment include web scraping using Python's
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