import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { navLinks } from '../../localData/Links';

const MobileLinks = ({ toggleNavbar }) => {
    const listVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <motion.ul
            initial='hidden'
            whileInView='visible'
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.25
                    }
                }
            }}
            viewport={{ once: true }}
            className='space-y-10 p-12'
        >
            {navLinks.map((navLink) => (
                <motion.li
                    key={navLink.id}
                    variants={listVariants}
                    whileHover={{
                        scale: 1.05
                    }}
                    transition={{
                        duration: 0.25,
                        ease: 'easeInOut'
                    }}
                >
                    <Link
                        onClick={toggleNavbar}
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
        </motion.ul>
    )
}

export default MobileLinks