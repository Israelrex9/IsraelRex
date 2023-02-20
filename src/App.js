import React from 'react';

import './App.css';
import rexImage from './Images/israelrexnft.svg';
import rex from './Images/rex.svg';
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
        <div className='bg-black'>
            <div className=' text-white mx-auto py-[125px] sm:max-w-2xl max-w-xs'>
                <div className=''>
                    <img src={rexImage} alt="Israel Rex NFT"/>
                    <section className='my-8 sm:flex flex-column justify-between w-full'>
                        <div>
                            <h2 className='font-GT1 text-xl'>Israel Rex</h2>
                            <p className='font-GT3 font-normal text-[#7E7E7E] text-base'>🚀 Young Techpreneur</p>
                        </div>
                        <div className='flex justify-between w-40 items-end sm:mt-0 mt-4'>
                            <a href="https://twitter.com/israelrex9" target="_blank"><img src={tTopicon} alt="Twitter logo" /></a>
                            <a href="https://www.linkedin.com/in/israel-rex/" target="_blank"><img src={lTopicon} alt="Linkedin logo"/></a>
                            <a href="https://www.behance.net/israelrex9" target="_blank"><img src={bTopicon} alt="Behance logo"/></a>
                            <a href="https://github.com/Israelrex9" target="_blank"><img src={gTopicon} alt="Github logo"/></a>
                        </div>
                    </section>
                </div>
                <div className='font-GT3 leading-7 text-base'>
                    <p>Product designer and frontend engineer. Currently scaling web3 events with <a href="https://spacevents.xyz/" target="_blank" className='font-GT'>Spacevents</a>,
                        building products, using web3 tech at <a href="https://www.xelmar.xyz/" target="_blank" className='font-GT'>Xelmar</a>. 
                        You can<a href="https://read.cv/israelrex" target="_blank" className='font-GT'> view my CV</a> browse my design<a href="https://www.behance.net/israelrex9" target="_blank" className='font-GT'> portfolio</a>,
                        or review my<a href="https://github.com/Israelrex9" target="_blank" className='font-GT'> Github</a>.
                    </p>
                    <section className='mt-[16px] mb-[54px] sm:flex flex-column w-full justify-between items-center'>
                        <p>Occasional freelancer / consultant → 👋 <a href="https://calendly.com/israelrex/meet-with-rex" target="_blank" className='font-GT  hover:text-blue'>get in touch.</a></p>
                        <button href="mailto: israel06.rex@gmail.com" className='py-2 px-3 border-blue border rounded-lg text-blue hover:text-white bg-blue/10 hover:bg-blue font-GT2 sm:mt-0 mt-3'>Mail me →</button>
                    </section>
                    <hr className='border-[#707070]'></hr>
                </div>
                <div className='font-GT3 leading-7 my-[54px]'>
                    <p>I have had the privilege of working with so many fantastic companies, DAOs and web3 projects including <a href="https://aragon.org/" target="_blank" className='font-GT'>AragonDAO </a>,
                        <a href="http://strio.xyz/" target="_blank" className='font-GT'>Strio </a>, <a href="https://cryptotvplus.com/" target="_blank" className='font-GT'>CryptoTvplus </a>, <a href="https://www.talentdao.io/" target="_blank" className='font-GT'>TalentDAO</a>,
                        <a href="https://www.opentelos.com/" target="_blank" className='font-GT'> OpenTelos</a>, <a href="https://whitehatdao.com/" target="_blank" className='font-GT'> WhiteHatDAO</a>,
                        <a href="https://www.genrae.com/" target="_blank" className='font-GT'> Genrae</a>, <a href="https://meddao.xyz/" target="_blank" className='font-GT'> MedDAO</a>, some of which are through <a href="https://www.banklessconsulting.com/" target="_blank" className='font-GT'> BC</a>.
                    </p>
                    <p className='mt-4'>
                    I co-founded <a href="https://spacevents.xyz/" target="_blank" className='font-GT'>Spacevents</a>, a decentralized event management platform built on
                    blockchain technology, allowing event organizers to create and manage events, ticket sales, and attendee tracking all on one secure platform. <br></br>Also, currently
                    run <a href="https://xelmar.xyz/" target="_blank" className='font-GT'>Xelmar</a>, a full-service digital agency that specializes in building decentralized applications (dApps) and other web3 technologies. We help
                    businesses and organizations leverage the power of blockchain and other decentralized technologies to create more secure, transparent, and efficient systems.
                    </p>             
                    <p className='mt-4'>
                    In 2023, I graduate with a degree from Obafemi Awolowo University,
                    Nigeria - a Bachelor of Science in Urban Planning. I completed Google UX
                    Professional Course in 2021.
                    </p>                
                    <p className='mt-4'>
                    I also play games, mostly in my freetime and out of boredom. My most played games are
                    COD Vanguard, COD Modern Warfare, FIFA 23, Mortal Kombat Ultimate and God of War Ragnarok.
                    </p>
                </div>
                <hr  className='border-[#707070]'></hr>
                <section className='mt-[54px]'>
                    <section className='flex w-full justify-between'>
                        <h2 className='font-GT1 text-xl'>Recent Projects</h2>
                        <a href="#"><img src={openMain} alt="Open Main" /></a>
                    </section>
                    <section className='mt-[34px] grid sm:grid-cols-2 justify-items-center sm:justify-items-stretch'>
                        <div className='bg-black1 flex flex-col rounded-lg sm:max-w-xs max-w-sm cursor-pointer'>
                            <img src={projectImage1} alt="projectImage1" layout="responsive" className='border-0 rounded-t-lg'/>
                            <section className='p-4'>
                                <p className='text-blue font-GT3 text-sm rounded-full p-2 bg-blue/10 w-20 text-center'>Design</p>
                                <div className='flex flex-col gap-1 my-2'>
                                    <p className='font-GT1 text-lg'>Genrae Product Design</p>
                                    <p className='font-GT3 text-base text-[#A6A6A6] leading-5'>Genrae is utilizing blockchain tech, providing real estate services.</p>
                                </div>
                                <p className='font-GT1 text-sm text-[#7E7E7E] mt-4'>Nov 2022 - February 2023</p>
                            </section>
                        </div>
                        <div className='bg-black1 flex flex-col rounded-lg sm:max-w-xs max-w-sm sm:mt-0 mt-7 cursor-pointer'>
                            <img src={projectImage2} alt="projectImage1" layout="responsive" className='border-0 rounded-t-lg'/>
                            <section className='p-4'>
                                <p className='text-blue font-GT3 text-sm rounded-full p-2 bg-blue/10 w-40 text-center'>Design & Development</p>
                                <div className='flex flex-col gap-1 my-2'>
                                    <p className='font-GT1 text-lg'>Xelmar Website Revamp</p>
                                    <p className='font-GT3 text-base text-[#A6A6A6] leading-5'>A digital agency specialising in building decentralized applications.</p>
                                </div>
                                <p className='font-GT1 text-sm text-[#7E7E7E] mt-4'>Ongoing</p>
                            </section>
                        </div>
                    </section>
                </section>
                <section className='my-[54px]'>
                    <section className='flex w-full justify-between'>
                        <h2 className='font-GT1 text-xl'>Speaking</h2>
                        <a href="#"><img src={openMain} alt="Open Main" /></a>
                    </section>
                    <section className=''>
                        <div className='cursor-pointer py-[10px] px-[20px] bg-black1 rounded-lg mt-8'>
                            <a href="https://twitter.com/web3bridge/status/1576964882905169920?s=61&t=yPEziQ_S973iVP7DbSEFow" target="_blank">
                                <div className='flex w-full justify-between'>
                                    <p className='font-GT2 text-base'>Decentralized Autonomous Organizations (DAO) and its Opportunities</p> 
                                    <img src={arrowIcon} alt="arrowIcon"/>
                                </div>
                            </a>
                            <p className='font-GT3 text-sm text-[#7E7E7E] mt-1.5'>Web3 Lagos, Nigeria</p>
                        </div>
                        <div className='cursor-pointer py-[10px] px-[20px] bg-black1 rounded-lg mt-8'>
                            <a href="https://twitter.com/spaceventsxyz/status/1601484516916629505?s=61&t=yPEziQ_S973iVP7DbSEFow" target="_blank">
                                <div className='flex w-full justify-between'>
                                    <p className='font-GT2 text-base'>A practical introduction to Web3</p> 
                                    <img src={arrowIcon} alt="arrowIcon"/>
                                </div>
                            </a>
                            <p className='font-GT3 text-sm text-[#7E7E7E] mt-1.5'>Spacevents Launch, Nigeria</p>
                        </div>
                    </section>
                </section>
                <hr className='border-[#707070]'></hr>
                <div className='flex my-12 max-w-sm justify-between'>
                    <a href="https://twitter.com/israelrex9" target="_blank"><img src={tBottomicon} alt="Twitter logo" /></a>
                    <a href="https://www.linkedin.com/in/israel-rex/" target="_blank"><img src={lBottomicon} alt="Linkedin logo"/></a>
                    <a href="https://www.behance.net/israelrex9" target="_blank"><img src={bBottomicon} alt="Behance logo"/></a>
                    <a href="https://github.com/Israelrex9" target="_blank"><img src={gBottomicon} alt="Github logo"/></a>
                    <a href="https://discordapp.com/users/699363724472877157" target="_blank"><img src={dBottomicon} alt="Discord logo"/></a>
                    <a href="https://dribbble.com/IsraelRex" target="_blank"><img src={drBottomicon} alt="Dribble logo"/></a>
                    <a href="https://instagram.com/israelrex9?igshid=YmMyMTA2M2Y=" target="_blank"><img src={iBottomicon} alt="Instagram logo"/></a>
                    <a href="https://www.figma.com/@israelrex" target="_blank"><img src={fBottomicon} alt="Figma logo"/></a>
                </div>
                <hr className='border-[#707070] border-[0.5px]'></hr>
                <div className='flex gap-2 sm:justify-start justify-center mt-10'>
                    <p className='font-GT2 text-base text-[#7E7E7E] hover:text-blue'>🚀 Built & designed with ❤️ by <span className='text-white hover:text-blue'>IsraelRex</span>⚡</p>
                </div>
            </div>
        </div>
    );
}


export default App;