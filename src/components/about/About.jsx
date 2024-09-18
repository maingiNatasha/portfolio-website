import React from 'react';
import Skills from './Skills';
//import SlideInDiv from './SlideInDiv';
import FadeInDiv from '../animated divs/FadeInDiv';

const About = () => {
    return (
        <section id='about' className='py-10 md:py-20 min-h-screen'>
            <div className='w-[85%] md:w-[80%] lg:w-[75%] m-auto text-center'>
                <FadeInDiv>
                    <div>
                        <h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>About</h1>
                        <h3 className='font-bold text-3xl tracking-wide my-4'>Let me introduce myself.</h3>
                    </div>
                </FadeInDiv>
                <FadeInDiv>
                    <div className='space-y-6 md:py-4 lg:text-lg'>
                        <p className='indent-8'>
                            I am a passionate Software Developer with a keen interest in web development and front-end technologies.
                            I love creating dynamic and responsive web applications that provide a great user experience.
                            With a background in Software Engineering, I have honed my skills in Javascript, React, and various other technologies.
                            Although my professional experience is budding, my enthusiasm for collaborative work and relentless appetite for learning pave the way for exponential growth.
                        </p>
                        <p className='indent-8'>
                            When I'm not coding or taking on programming challenges, you can find me exploring my talent in drawing,
                            reading tech blogs, or working on personal projects.
                            I am actively seeking opportunities that will provide me with a nurturing environment where I can apply my knowledge and skills and get to learn
                            and evolve alongside passionate experienced individuals.
                        </p>
                    </div>
                </FadeInDiv>
                <FadeInDiv>
                    <Skills />
                </FadeInDiv>
            </div>
        </section>
    )
}

export default About