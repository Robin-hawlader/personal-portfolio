import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_90j08s2', 'template_legi5gd', form.current, 'user_yfZTHAr9CG8v1wsOZsOHu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form id='contact' className='mx-auto my-4' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};