import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { navLinks } from '../../localData/Links';

const Links = () => {
    return (
        <ul className='flex items-center md:space-x-6 lg:space-x-10'>
            {navLinks.map((navLink) => (
                <motion.li
                    key={navLink.id}
                    whileHover={{
                        scale: 1.05
                    }}
                    transition={{
                        duration: 0.25,
                        ease: 'easeInOut'
                    }}
                >
                    <Link
                        to={navLink.link}
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='text-sky-600 font-bold'
                        className='cursor-pointer hover:text-sky-600 hover:underline underline-offset-4 transition duration-300'
                    >
                        {navLink.name}
                    </Link>
                </motion.li>
            ))}
        </ul>
    )
}

export default Links