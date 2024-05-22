import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import MobileLinks from './MobileLinks';
import classNames from 'classnames';

const MobileNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className='md:hidden'>
				<motion.button
					onClick={toggleNavbar}
					whileHover={{
						scale:1.1,
						y: -3
					}}
					whileTap={{
						scale: 0.9,
					}}
					transition={{
						duration: 0.25,
						ease: 'easeInOut'
					}}
				>
					{isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
				</motion.button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
					    initial={{
							opacity: 0,
							x: '-100%'
						}}
						animate={{
							opacity: isOpen ? 1 : 0,
							x: isOpen ? 0 : '-100%'
						}}
						transition={{
							duration: 0.25,
                            ease: 'easeInOut'
						}}
						exit={{
							opacity: 0,
                            x: '-100%'
						}}
						className={classNames(
							'md:hidden',
							{
								'fixed left-0 top-0 w-[60%] h-full z-50 bg bg-gray-100 dark:bg-gray-900 text-black dark:text-white' : isOpen,
								'w-[60%] fixed top-0 bottom-0 left-[-100%] z-50' : !isOpen,
							}
						)}
					>
						<MobileLinks toggleNavbar={toggleNavbar} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default MobileNav