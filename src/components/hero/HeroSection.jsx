import React from 'react';
import { Link } from 'react-scroll';
import { FaAngleDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { motion, MotionConfig } from "framer-motion";

const HeroSection = () => {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.5
			}
		}
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 150,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeInOut'
			}
		}
	};

	const charVariants = {
		hidden: {
			opacity: 0,
		},
		visible: (index) => ({
			opacity: 1,
			transition: {
				delay: index * 0.125,
				ease: 'easeInOut'
			}
		})
	};

	const splitText = (text) => text.split('').map((char, index) => (
		<motion.span key={index} custom={index} variants={charVariants}>
			{char}
		</motion.span>
	));

	return (
		<div className='hero-container flex flex-col overflow-hidden items-center justify-center text-center'>
			<motion.div
				className='px-8 pt-10 md:pt-16 lg:pt-20'
				initial='hidden'
				animate='visible'
				variants={containerVariants}
			>
				<motion.div className='hero-content' variants={itemVariants}>
					<h1 className='text-2xl md:text-3xl text-sky-600 dark:text-sky-500 font-extrabold uppercase'>
						{splitText('Hello, World.')}
					</h1>
				</motion.div>
				<motion.div className='hero-content' variants={itemVariants}>
					<h2 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-white my-4'>
						{splitText("I'm Natasha Maingi.")}
					</h2>
				</motion.div>
				<motion.div className='hero-content' variants={itemVariants}>
					<h3 className='md:text-lg text-white md:font-semibold'>
						{splitText('SOFTWARE DEVELOPER')} <span className="mx-2">|</span> {splitText('WEB DEVELOPER')} <span className="mx-2">|</span> {splitText('FRONT-END DEVELOPER')}
					</h3>
				</motion.div>
				<motion.div className='py-14' variants={itemVariants}>
					<motion.button
						className='text-white font-bold uppercase tracking-wide py-4 px-6 border-2 border-gray-600 hover:border-sky-600 hover:text-sky-600 transition duration-300'
						whileHover={{
							scale: 1.05,
							y: -3
						}}
						whileTap={{
							scale: 0.9
						}}
						transition={{
							duration: 0.3,
							ease: 'easeInOut'
						}}
					>
						<Link to='about' smooth={true} duration={500} className='cursor-pointer flex items-center'>
							More about me
							<FaAngleDown className='ml-2' />
						</Link>
					</motion.button>
				</motion.div>
				<motion.div className='mt-20' variants={itemVariants}>
					<div className='flex justify-center items-center space-x-10 md:space-x-16 text-white'>
						<MotionConfig
							whileHover={{
								scale: 1.05,
								y: -3
							}}
							whileTap={{
								scale: 0.9
							}}
							transition={{
								duration: 0.3,
								ease: 'easeInOut'
							}}
						>
							<motion.a href='https://github.com/maingiNatasha' target='_blank' rel='noreferrer' aria-label='Github'>
								<FaGithub size={35} className='hover:text-sky-600' />
							</motion.a>
							<motion.a href='https://www.linkedin.com/in/natasha-maingi-026a4a254/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
								<FaLinkedin size={35} className='hover:text-sky-600' />
							</motion.a>
							<motion.a href='mailto:mainginatasha@gmail.com' target='_blank' rel='noreferrer' aria-label='Gmail'>
								<MdAttachEmail size={35} className='hover:text-sky-600' />
							</motion.a>
						</MotionConfig>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default HeroSection;
