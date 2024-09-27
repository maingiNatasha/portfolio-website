import React, { Suspense, lazy} from 'react';
import FadeInDiv from '../animated divs/FadeInDiv';

const Experience = lazy(() => import("./Experience"));
const Education = lazy(() => import("./Education"));

const Resume = ({ theme }) => {
    return (
        <section id='resume' className='py-10 md:py-20 min-h-screen'>
            <div className='w-[85%] md:w-[80%] lg:w-[75%] m-auto text-center'>
                <FadeInDiv>
                    <h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>Resume</h1>
                    <h2 className='font-bold text-3xl tracking-wide mt-2'>More of my credentials</h2>
                </FadeInDiv>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='py-6 mt-4'>
                        <Experience theme={theme} />
                        <Education theme={theme} />
                    </div>
                </Suspense>
            </div>
        </section>
    )
}

export default Resume