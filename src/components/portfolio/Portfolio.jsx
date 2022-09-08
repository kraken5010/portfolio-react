import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/logic_screen.png'
import IMG2 from '../../assets/portal_screen.png'
import IMG3 from '../../assets/music_screen.png'
import IMG4 from '../../assets/portfolio_screen.png'
import IMG5 from '../../assets/pass_to_pdf_screen.png'
import IMG6 from '../../assets/olx_parcer_screen.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Logic Puzzles',
        github: 'https://github.com/kraken5010/logic_puzzles',
        demo: 'https://logicpuzzles.herokuapp.com/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Portal Bilaromashka',
        github: 'https://github.com/kraken5010/portalbilaromashka',
        demo: 'https://portalbilaromashka.herokuapp.com/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Music App',
        github: 'https://github.com/kraken5010/music',
        demo: 'https://music-apppp.herokuapp.com/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Portfolio-React',
        github: 'https://github.com/kraken5010/portfolio-react',
        demo: 'https://portfolioen.herokuapp.com/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Password and remove password from pdf file',
        github: 'https://github.com/kraken5010/pass_to_pdf'
    },
    {
        id: 6,
        image: IMG6,
        title: 'OLX parser on request',
        github: 'https://github.com/kraken5010/olx_gravel_parcer'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    {demo &&
                                        <a href={demo} className='btn btn-primary' target='_blank'>Live DEMO</a>
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Portfolio