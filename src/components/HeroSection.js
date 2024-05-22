import React from 'react';
import { Link } from 'react-scroll';
import { FaAngleDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const HeroSection = () => {
	return (
		<div className='hero-container flex flex-col overflow-hidden items-center justify-center text-center'>
			<div className='px-8'>
				<div className='hero-content'>
					<h2 className='text-2xl md:text-3xl text-sky-600 font-extrabold uppercase'>Hello, World.</h2>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white my-4'>I'm Natasha Maingi.</h1>
					<h3 className='md:text-lg text-white font-semibold'>
						SOFTWARE DEVELOPER <span className="mx-2">|</span> WEB DEVELOPER <span className="mx-2">|</span> FRONT-END DEVELOPER
					</h3>
				</div>
				<div className='py-14'>
					<button className='text-white font-bold uppercase tracking-wide py-4 px-6 border-2 border-gray-600 hover:border-sky-600 transition duration-300'>
						<Link to='about' smooth={true} duration={500} className='cursor-pointer flex items-center'>
							More about me
							<FaAngleDown className='ml-2'  />
						</Link>
					</button>
				</div>
				<div className='absolute top-[85vh] left-1/2 transform -translate-x-1/2'>
					<div className='flex justify-center items-center space-x-10 text-white'>
						<a href='https://github.com/maingiNatasha' target='_blank' rel='noreferrer'>
							<FaGithub size={35} className='hover:text-sky-600' />
						</a>
						<a href='https://www.linkedin.com/in/natasha-maingi-026a4a254/' target='_blank' rel='noreferrer'>
							<FaLinkedin size={35} className='hover:text-sky-600' />
						</a>
						<a href='mailto:mainginatasha@gmail.com' target='_blank' rel='noreferrer'>
							<MdAttachEmail size={35} className='hover:text-sky-600' />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection