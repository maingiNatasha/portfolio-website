import React from 'react';
import FadeInDiv from '../animated divs/FadeInDiv';
import { projects } from "../../localData/PersonalProjects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id='projects' className='py-10 md:py-20 min-h-screen'>
        <div className='w-[85%] md:w-[80%] lg:w-[75%] m-auto text-center'>
            <FadeInDiv>
                <div>
                    <h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>Projects</h1>
                    <h2 className='font-bold text-2xl lg:text-3xl tracking-wide my-4'>A small collection of recent personal projects</h2>
                </div>
            </FadeInDiv>
            <FadeInDiv>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-16 pt-8 lg:p-8'>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className='px-4 lg:px-6 py-6 rounded-lg dark:shadow-sky-800 shadow-sky-600 shadow-md'
                            whileHover={{
                                scale: 1.035,
                                y: -3,
                                transition: {
                                    duration: 0.25,
                                    ease: 'easeInOut'
                                }
                            }}
                        >
                            <img src={project.image} alt={project.title} className='rounded-lg object-cover' loading='lazy' />
                            <div className='p-4'>
                                <h3 className='text-xl font-bold'>{project.title}</h3>
                                <p className='mt-2'>{project.description}</p>
                            <div className='flex space-x-2 mt-4 justify-center'>
                                {project.technologies.map((tech, index) => (
                                    <motion.img
                                        key={index}
                                        src={tech.icon}
                                        alt={tech.name}
                                        title={tech.name}
                                        className='w-8 h-8'
                                        loading='lazy'
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,
                                            transition: {
                                                duration: 0.25,
                                                ease: 'easeInOut'
                                            }
                                        }}
                                    />
                                ))}
                            </div>
                            </div>
                            <div className='p-4 md:py-4 md:px-0 lg:px-6 flex justify-between text-sky-600 dark:text-sky-500 font-bold'>
                                    <motion.a
                                        href={project.github}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,
                                            transition: {
                                                duration: 0.25,
                                                ease: 'easeInOut'
                                            }
                                        }}
                                    >
                                        View on GitHub
                                    </motion.a>
                                    <motion.a
                                        href={project.link}
                                        whileHover={{
                                            scale: 1.1,
                                            y: -3,
                                            transition: {
                                                duration: 0.25,
                                                ease: 'easeInOut'
                                            }
                                        }}
                                    >
                                        Check live site
                                    </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </FadeInDiv>
        </div>
    </section>
  )
};

export default Projects