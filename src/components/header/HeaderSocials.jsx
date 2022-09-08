import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/anton-hubanov-8a53a4245/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/kraken5010" target="_blank"><FaGithub /></a>
            <a href="https://t.me/artur_cheyz" target='_blank'><FaTelegramPlane /></a>
        </div>
    )
}

export default HeaderSocials