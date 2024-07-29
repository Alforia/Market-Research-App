import React from 'react';
import logo from '../assets/Logo/Hor-Logo.png'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div id='footer' className=' w-full h-auto py-12 flex flex-col justify-center items-center'>
            <div className=' flex flex-col gap-5 bg-black rounded-t-[4rem] w-full px-12 py-12'>
                <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>
                    <span className=' text-primary'>30,000+ Users </span>
                    are Transforming Ideas into Business Unicorns
                </h1>
                <p className=' text-white text-center '>Join the ranks of successful entrepreneurs who have turned their ideas into thriving businesses with our comprehensive market analysis and innovative insights.</p>
            </div>

            <div className=' w-full h-auto px-12 py-8 lg:flex justify-between items-center hidden'>
                <div>
                    <ul className=' flex gap-5'>
                        <li className=' font-medium cursor-pointer'>
                            <ScrollLink
                                activeClass="active" 
                                to="hero"
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className=' font-medium cursor-pointer'>
                            <ScrollLink
                                activeClass="active" 
                                to="contact"
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                            >
                                Contact Us
                            </ScrollLink>
                        </li>
                        <li className=' font-medium cursor-pointer'>
                            <ScrollLink
                                activeClass="active" 
                                to="pricing"
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                            >
                                Pricing
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="logo" className=' h-10 ' />
                </div>
                <div>
                    <ul className=' flex gap-5'>
                        <li className=' font-medium cursor-pointer'>
                            <RouterLink to="/terms">
                                Terms
                            </RouterLink>
                        </li>
                        <li className=' font-medium cursor-pointer'>
                            <RouterLink to="/privacy">
                                Privacy
                            </RouterLink>
                        </li>
                        <li className=' font-medium cursor-pointer'>
                            <RouterLink to="/aboutus">
                                About Us
                            </RouterLink>
                        </li>
                        <li className=' font-medium cursor-pointer'>
                            <RouterLink to="/refund-policies">
                                Refund Policies
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='px-12 py-8 flex flex-col items-center justify-center lg:hidden gap-4'>
                <img src={logo} alt="logo" className=' h-10 ' />
                <ul className=' flex flex-col items-center gap-2'>
                    <li className=' font-medium cursor-pointer'>
                        <ScrollLink
                            activeClass="active" 
                            to="hero"
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                        >
                            Home
                        </ScrollLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <ScrollLink
                            activeClass="active" 
                            to="contact"
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                        >
                            Contact Us
                        </ScrollLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <ScrollLink
                            activeClass="active" 
                            to="pricing"
                            spy={true} 
                            smooth={true} 
                            offset={-50} 
                        >
                            Pricing
                        </ScrollLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <RouterLink to="/terms">
                            Terms
                        </RouterLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <RouterLink to="/privacy">
                            Privacy
                        </RouterLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <RouterLink to="/aboutus">
                            About Us
                        </RouterLink>
                    </li>
                    <li className=' font-medium cursor-pointer'>
                        <RouterLink to="/refund-policies">
                            Refund Policies
                        </RouterLink>
                    </li>
                </ul>
            </div>

            <div className=' h-[0.05rem] sm:h-[0.1rem] sm:w-4/5 w-full bg-black '></div>
            <div className=' flex items-center justify-between sm:w-4/5 w-full  py-6 flex-col sm:flex-row gap-4'>
                <div>
                    <h1>Copyrights 2024 - Alforia</h1>
                </div>
                <div className=' flex gap-5'>
                    <div>
                        <FaFacebookF />
                    </div>
                    <div>
                        <FaTwitter />
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
