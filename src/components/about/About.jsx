import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About =
    () => {
        return (
            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About Image" />
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <small>2+ Years General Working</small>
                            </article>

                            <article className="about__card">
                                <FiUsers className='about__icon' />
                                <h5>Experience</h5>
                                <small>1+ Years Commercial Working</small>
                            </article>

                            <article className="about__card">
                                <VscFolderLibrary className='about__icon' />
                                <h5>Projects</h5>
                                <small>10+ Completed</small>
                            </article>
                        </div>

                        <p>
                            <ul>
                                <li>Work Experience</li>
                                <li>Python Developer</li>
                                <li>Fozzy Group Company (April 2021 - April 2022)</li>
                                <li>Worked as a web developer (frontend + backend).</li>
                                <li>Developed services for the company that worked in the corporate network.</li>
                                <li>Supported already working products of the company.</li>
                                <li>Provided statistical data on working resources.</li>
                                <li>Provided support for company employees in case of problems.</li>
                            </ul>
                        </p>

                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
                </div>
            </section>
        )
    }


export default About