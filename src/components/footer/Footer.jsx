import React from 'react'
import './footer.css'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Anton Hubanov</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/anton-hubanov-8a53a4245/" target='_blank'><FaLinkedinIn /></a>
                <a href="https://github.com/kraken5010" target='_blank'><FaGithub /></a>
                <a href="https://t.me/artur_cheyz" target='_blank'><FaTelegramPlane /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Anton Hubanov portfolio. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer