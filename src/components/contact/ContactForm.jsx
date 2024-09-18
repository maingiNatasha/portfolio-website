import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import mailAnimation from '../../animations/mail-animation.json';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const initialState = {
    name: "",
    email: "",
    message: "",
};

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const { name, email, message } = formData;
    const form = useRef();

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                form.current,
                { publicKey: process.env.REACT_APP_EMAIL_USER_ID }
            )
            .then((result) => {
                console.log('Success', result);
            })
            .catch((error) => {
                console.error('Error', error);
            });

        setLoading(false);
        setFormData(initialState);
    };

    return (
        <form ref={form} className='p-6 md:p-10 shadow-gray-500 shadow-md rounded-md mt-4' onSubmit={handleOnSubmit}>
            <div className='flex items-center justify-center pb-2'>
                <Lottie animationData={mailAnimation} className='animation' />
            </div>
            <div className='flex flex-col space-y-6'>
                <input id='name' className='w-full p-2 rounded-md bg-gray-200 dark:bg-sky-900 placeholder:text-black dark:placeholder:text-white' type='text' name='name' placeholder='Name' value={name} onChange={handleOnChange} required />
                <input id='email' className='w-full p-2 rounded-md bg-gray-200 dark:bg-sky-900 placeholder:text-black dark:placeholder:text-white' type='text' name='email' placeholder='E-mail' value={email} onChange={handleOnChange} required />
                <textarea id='message' className='w-full p-2 rounded-md bg-gray-200 dark:bg-sky-900 placeholder:text-black dark:placeholder:text-white' name='message' placeholder='Message' rows={5} cols={30} value={message} onChange={handleOnChange} required />
                <div>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            y: -5,
                            opacity: 0.8
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        transition={{
                            duration: 0.25,
                            ease: 'easeInOut'
                        }}
                        className='py-2 px-4 rounded-md md:w-[40%] font-bold mt-4 bg-sky-600 dark:bg-sky-800 text-white'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? "Sending message..." : "Send"}
                    </motion.button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm