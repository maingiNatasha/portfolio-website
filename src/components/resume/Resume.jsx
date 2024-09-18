import React from 'react';
import Experience from "./Experience";
import Education from "./Education";
import FadeInDiv from '../animated divs/FadeInDiv';

const Resume = ({ theme }) => {
    return (
        <section id='resume' className='py-10 md:py-20 min-h-screen'>
            <div className='w-[85%] md:w-[80%] lg:w-[75%] m-auto text-center'>
                <FadeInDiv>
                    <h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>Resume</h1>
                    <h3 className='font-bold text-3xl tracking-wide mt-2'>More of my credentials</h3>
                </FadeInDiv>
                <div className='py-6 mt-4'>
                    <Experience theme={theme} />
                    <Education theme={theme} />
                </div>
            </div>
        </section>
    )
}

export default Resume