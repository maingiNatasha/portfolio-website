import React from 'react';
import { skills } from '../localData/Skillset';

const Skills = () => {
    return (
        <div className='py-10'>
            <div>
                <h1 className='font-extrabold text-2xl text-sky-600 uppercase tracking-wide'>Skills</h1>
                <h3 className='font-bold text-3xl tracking-wide my-2 md:my-4'>Languages, Frameworks and Tech stack</h3>
                <div className='flex flex-wrap space-x-2 md:space-x-4 justify-center py-6'>
                    {skills.map((skill) => (
                        <div key={skill.id} className='flex items-center bg-sky-200/30 dark:bg-sky-600/40 my-2 py-1 px-2 md:py-2 md:px-7 rounded-full'>
                            <img src={skill.image} alt={`${skill.name} icon`} className='h-8 w-8 mr-1 md:mr-2' />
                            <h4 className='text-sm md:text-base'>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills