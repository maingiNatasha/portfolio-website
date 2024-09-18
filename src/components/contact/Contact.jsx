import React from 'react';

import FadeInDiv from '../animated divs/FadeInDiv';

import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<section id='contact' className='py-10 md:py-20 min-h-screen'>
			<div className='w-[85%] md:w-[80%] lg:w-[75%] m-auto text-center'>
				<FadeInDiv>
					<div>
						<h1 className='font-bold text-4xl text-sky-600 dark:text-sky-500 tracking-wide'>Contact</h1>
						<h3 className='font-bold text-3xl tracking-wide my-4'>Reach out and let's get in touch</h3>
					</div>
				</FadeInDiv>
				<FadeInDiv>
					<div className=''>
						<div className='flex items-center justify-center'>
							<ContactForm />
						</div>
					</div>
				</FadeInDiv>
			</div>
		</section>
	)
}

export default Contact