import React from 'react';

import './App.css';
import rexImage from './Images/israelrexnft.png';
import tTopicon from './Images/social-media-icons/twitter.svg';
import lTopicon from './Images/social-media-icons/linkedin.svg';
import bTopicon from './Images/social-media-icons/behance.svg';
import gTopicon from './Images/social-media-icons/github.svg';
import openMain from './Images/openmain.svg';
import projectImage1 from './Images/ProjectImage1.png';
import projectImage2 from './Images/ProjectImage2.png';
import arrowIcon from './Images/arrow-up-right.svg';
import gBottomicon from './Images/social-media-icons/bottom/github.svg';
import bBottomicon from './Images/social-media-icons/bottom/behance.svg';
import drBottomicon from './Images/social-media-icons/bottom/dribble.svg';
import dBottomicon from './Images/social-media-icons/bottom/discord.svg';
import fBottomicon from './Images/social-media-icons/bottom/figma-logo.svg';
import iBottomicon from './Images/social-media-icons/bottom/instagram.svg';
import lBottomicon from './Images/social-media-icons/bottom/linkedin.svg';
import tBottomicon from './Images/social-media-icons/bottom/twitter.svg';



const App = () => {
    return(
        <div className='app'>
            <div>
                <img src={rexImage} alt="Israel Rex NFT"/>
                <h2 id='myName'>Israel Rex</h2>
                <section className='PositionSocial'>
                    <p className='position'>Product Designer at Bankless Consulting</p>
                    <div className='top-socials'>
                        <a href="https://twitter.com/israelrex9" target="_blank"><img src={tTopicon} alt="Twitter logo" /></a>
                        <a href="https://www.linkedin.com/in/israel-rex/" target="_blank"><img src={lTopicon} alt="Linkedin logo"/></a>
                        <a href="https://www.behance.net/israelrex9" target="_blank"><img src={bTopicon} alt="Behance logo"/></a>
                        <a href="https://github.com/Israelrex9" target="_blank"><img src={gTopicon} alt="Github logo"/></a>
                    </div>
                </section>
            </div>
            <div className='current-engagement'>
                <p>Product designer and frontend engineer. Currently designing products at <a href="https://www.banklessconsulting.com/" target="_blank">BC</a>, scaling
                    web3 events with <a href="https://spacevents.xyz/" target="_blank">Spacevents</a>, building stuffs at <a href="https://www.banklessconsulting.com/" target="_blank">Xelmar</a> & <a href="https://www.banklessconsulting.com/" target="_blank">Venturage</a>.
                    You can <a href="https://www.banklessconsulting.com/" target="_blank">download my CV</a> or browse my <a href="https://www.banklessconsulting.com/" target="_blank">portfolio</a>.
                </p>
                <section className='button-line'>
                    <p>Occasional freelancer / consultant → 👋 <a href="#" target="_blank">get in touch</a>.</p>
                    <button href="#">Know more →</button>
                </section>
                <hr></hr>
            </div>
            <div>
                <p className='paragraph1'>I have had the privilege of working with so many fantastic companies,
                    DAOs and web3 projects including <a href="#" target="_blank">AragonDAO</a>, <a href="#" target="_blank">Strio</a>, <a href="#" target="_blank">CryptoTvplus</a>, <a href="#" target="_blank">TalentDAO</a>,
                    <a href="#" target="_blank"> OpenTelos</a>, <a href="#" target="_blank"> WhiteHatDAO</a>, <a href="#" target="_blank"> Genrae</a>, <a href="#" target="_blank"> MedDAO</a>, some of which are through 
                    <a href="https://www.banklessconsulting.com/" target="_blank"> BC</a>.
                </p>
                <p className='paragraph2'>
                I co-founded <a href="https://spacevents.xyz/" target="_blank">Spacevents</a>, a decentralized event management platform built on
                blockchain technology, allowing event organizers to create and manage events,
                ticket sales, and attendee tracking all on one secure platform. Also, currently
                run Xelmar, a full-service digital agency that specializes in building
                decentralized applications (dApps) and other web3 technologies. We help
                businesses and organizations leverage the power of blockchain and other
                decentralized technologies to create more secure, transparent, and efficient systems.
                </p>             
                <p className='paragraph3'>
                In 2023, I graduate with a degree from Obafemi Awolowo University,
                Nigeria - a Bachelor of Science in Urban Planning. I also completed Google UX
                Professional Course in 2021.
                </p>                
                <p className='paragraph4'>
                I also play games, mostly in my freetime and out of boredom. My most played games are
                COD Vanguard, COD Modern Warfare, FIFA 23, Mortal Kombat Ultimate and God of War Ragnarok.
                </p>
            </div>
            <hr></hr>
            <section>
                <section id='section-title1'>
                    <h2>Recent Projects</h2>
                    <a href="#"><img src={openMain} alt="Open Main" /></a>
                </section>
                <section id='cards'>
                    <div className='projectCard'>
                        <img src={projectImage1} alt="projectImage1" id='projectimage' width={"297px"} height={"168px"} layout="responsive"/>
                        <section className='cardTexts'>
                            <p className='project-tag'>Design</p>
                            <p className='project-title'>Genrae Product Design</p>
                            <p className='project-desc'>Genrae is utilizing blockchain tech, providing real estate services.</p>
                            <p className='project-duration'>Ongoing</p>
                        </section>
                    </div>
                    <div className='projectCard'>
                        <img src={projectImage2} alt="projectImage1" id='projectimage' width={"297px"} height={"168px"} layout="responsive"/>
                        <section className='cardTexts'>
                            <p className='project-tag'>Design & Development</p>
                            <p className='project-title'>Xelmar Website</p>
                            <p className='project-desc'>A digital agency specialising in building decentralized applications.</p>
                            <p className='project-duration'>Nov 2022 - February 2023</p>
                        </section>
                    </div>
                </section>
            </section>
            <section>
                <section id='section-title2'>
                    <h2>Speaking</h2>
                    <a href="#"><img src={openMain} alt="Open Main" /></a>
                </section>
                <section>
                    <div className='speaking'>
                        <a href="#" target="_blank">
                            <div className='title-link'>
                                <p className='speaking-title'>Decentralized Autonomous Organizations (DAO) and its Opportunities</p> 
                                <img src={arrowIcon} alt="arrowIcon"/>
                            </div>
                        </a>
                        <p className='where'>Web3 Lagos, Nigeria</p>
                    </div>
                    <div className='speaking'>
                        <a href="#" target="_blank">
                            <div className='title-link'>
                                <p className='speaking-title'>A practical introduction to Web3</p> 
                                <img src={arrowIcon} alt="arrowIcon"/>
                            </div>
                        </a>
                        <p className='where'>Spacevents Launch, Nigeria</p>
                    </div>
                </section>
            </section>
            <hr></hr>
            <div className='bottom-socials'>
                <a href="https://twitter.com/israelrex9" target="_blank"><img src={tBottomicon} alt="Twitter logo" /></a>
                <a href="https://www.linkedin.com/in/israel-rex/" target="_blank"><img src={lBottomicon} alt="Linkedin logo"/></a>
                <a href="https://www.behance.net/israelrex9" target="_blank"><img src={bBottomicon} alt="Behance logo"/></a>
                <a href="https://github.com/Israelrex9" target="_blank"><img src={gBottomicon} alt="Github logo"/></a>
                <a href="https://github.com/Israelrex9" target="_blank"><img src={dBottomicon} alt="Github logo"/></a>
                <a href="https://github.com/Israelrex9" target="_blank"><img src={drBottomicon} alt="Github logo"/></a>
                <a href="https://github.com/Israelrex9" target="_blank"><img src={iBottomicon} alt="Github logo"/></a>
                <a href="https://github.com/Israelrex9" target="_blank"><img src={fBottomicon} alt="Github logo"/></a>
            </div>

        </div>
    );
}


export default App;