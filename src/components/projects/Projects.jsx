import React from 'react';
import FadeInDiv from '../animated divs/FadeInDiv';
import { projects } from "../../localData/PersonalProjects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id='projects' className='py-10 md:py-20 min-h-screen'>
        <div className='w-[85%] md:w-[75%] lg:w-[60%] m-auto text-center'>
            <FadeInDiv>
                <div>
                    <h1 className='font-extra-black text-2xl text-sky-600 dark:text-sky-500 uppercase tracking-wide'>Projects</h1>
                </div>
            </FadeInDiv>
            <FadeInDiv>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-7 py-8'>
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className=' px-4 py-6 rounded-lg dark:shadow-sky-800 shadow-sky-600 shadow-md'
                            whileHover={{
                                scale: 1.035,
                                y: -3,
                                transition: {
                                    duration: 0.25,
                                    ease: 'easeInOut'
                                }
                            }}
                        >
                            <img src={project.image} alt={project.title} className='rounded-lg object-cover w-full' />
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