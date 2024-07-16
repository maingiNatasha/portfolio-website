import React from 'react';
import Experience from "./Experience";
import Education from "./Education";
import FadeInDiv from '../animated divs/FadeInDiv';

const Resume = () => {
    return (
        <section id='resume' className='py-10 md:py-20 min-h-screen'>
            <div className='w-[85%] md:w-[75%] lg:w-[65%] m-auto text-center'>
                <FadeInDiv>
                    <h1 className='font-extra-black text-2xl text-sky-600 dark:text-sky-500 uppercase tracking-wide'>Resume</h1>
                    <h3 className='font-bold text-3xl tracking-wide my-1'>More of my credentials</h3>
                </FadeInDiv>
                <div className='py-6'>
                    <Experience />
                    <Education />
                </div>
            </div>
        </section>
    )
}

export default Resume