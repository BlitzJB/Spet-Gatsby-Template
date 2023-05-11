import React from 'react';
import * as Icon from 'react-feather';

import Team1 from '../../assets/images/team-image/team1.jpg'
import Team2 from '../../assets/images/team-image/team2.jpg'
import Team3 from '../../assets/images/team-image/team3.jpg'
import Team4 from '../../assets/images/team-image/team4.jpg'
import Team5 from '../../assets/images/team-image/team5.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        900: {
            items: 3
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team1} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Josh Buttler</h3>
                            <span>CEO & Founder</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                    </div>
                </div>
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team2} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Alex Maxwel</h3>
                            <span>Marketing Manager</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
    
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team3} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Janny Cotller</h3>
                            <span>Web Developer</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team4} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Jason Statham</h3>
                            <span>UX/UI Designer</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team5} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Corey Anderson</h3>
                            <span>Project Manager</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>
                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team1} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Josh Buttler</h3>
                            <span>CEO & Founder</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team2} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Alex Maxwel</h3>
                            <span>Marketing Manager</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team3} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Janny Cotller</h3>
                            <span>Web Developer</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
    
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team4} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Jason Statham</h3>
                            <span>UX/UI Designer</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team5} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Corey Anderson</h3>
                            <span>Project Manager</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <Icon.Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                    <Icon.Twitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;