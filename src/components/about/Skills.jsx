import React from 'react';
import { skills } from '../../localData/Skillset';
import { motion } from 'framer-motion';

const Skills = () => {
    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.175,
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
        <div className='pt-14 md:px-6 lg:px-12'>
            <div>
                <h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>Skills</h1>
                <h2 className='font-bold text-3xl tracking-wide my-2 md:my-4'>Languages, Frameworks and Tech stack</h2>
                <motion.div
                    className='flex flex-wrap space-x-4 md:space-x-6 justify-center py-6'
                    initial='hidden'
                    whileInView='visible'
                    variants={parentVariants}
                    viewport={{ once: true }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            className='flex items-center justify-center my-4 p-4 md:p-6 rounded-lg dark:shadow-sky-800 shadow-sky-600 shadow-md hover:cursor-pointer hover:bg-sky-100 dark:hover:bg-sky-900/25'
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
                            <img src={skill.image} alt={`${skill.name} icon`} title={skill.name} className='h-14 w-14' loading='lazy' />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills