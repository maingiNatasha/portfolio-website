import React from 'react';
import { skills } from '../localData/Skillset';
import { motion } from 'framer-motion';

const Skills = () => {
    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.25
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 150
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    };

    return (
        <div className='py-10'>
            <div>
                <h1 className='font-extra-black text-2xl text-sky-600 dark:text-sky-500 uppercase tracking-wide'>Skills</h1>
                <h3 className='font-bold text-3xl tracking-wide my-2 md:my-4'>Languages, Frameworks and Tech stack</h3>
                <motion.div
                    className='flex flex-wrap space-x-2 md:space-x-4 justify-center py-6'
                    initial='hidden'
                    whileInView='visible'
                    variants={parentVariants}
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className='flex items-center bg-sky-200/30 hover:bg-sky-200/60 dark:bg-sky-500/10 dark:hover:bg-sky-500/25 my-2 py-1 px-2 md:py-2 md:px-7 rounded-full hover:cursor-pointer'
                            variants={childVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                transition: {
                                    duration: 0.25,
                                    ease: 'easeInOut'
                                }
                            }}
                        >
                            <img src={skill.image} alt={`${skill.name} icon`} className='h-8 w-8 mr-1 md:mr-2' />
                            <h4 className='text-sm md:text-base'>{skill.name}</h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills