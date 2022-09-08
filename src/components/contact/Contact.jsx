import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pqctpas', 'template_ixip7v8', form.current, 'd0ywCotyfgX2UVSwW')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>solokharts@gmail.com</h5>
                        <a href="mailto:solokharts@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegramPlane className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>@artur_cheyz</h5>
                        <a href="https://t.me/artur_cheyz" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FiPhone className='contact__option-icon' />
                        <h4>Phone</h4>
                        <h5>+380956947831</h5>
                        <a href="tel:+380956947831">Сall</a>
                    </article>
                </div>
                {/* END CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact