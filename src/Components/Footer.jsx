import React from 'react';
import logo from '../assets/Logo/Hor-Logo.png';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { scroller } from 'react-scroll';

const Footer = () => {
  const navigate = useNavigate();

  const home = ()=>{
    navigate("/")
  }

  const location = useLocation();

  const handleScrollNavigation = (section) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 1200,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 100); // delay to ensure page navigation completes
  };

  return (
    <>
      {
        location.pathname === '/explore' ? (
          ""
        ) : (
          <div id='footer' className={` w-full h-auto  flex flex-col justify-center items-center ${location.pathname === "/dashboard" ? '' : 'z-20'} ${location.pathname === "/explore" || location.pathname === "/terms" || location.pathname === "/aboutus" || location.pathname === "/refund-policies" || location.pathname === "/privacy" || location.pathname === "/payment" || location.pathname === "/test" || location.pathname === "/dashboard" || location.pathname === "/" ? "" : " hidden" }`}>
            {/* <div className=' flex flex-col gap-5 bg-black rounded-t-[2.5rem] w-full px-12 py-12'>
        <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>
          <span className=' text-primary'>30,000+ Users </span>
          are Transforming Ideas into Business Unicorns
        </h1>
        <p className=' text-white text-center '>Join the ranks of successful entrepreneurs who have turned their ideas into thriving businesses with our comprehensive market analysis and innovative insights.</p>
      </div> */}

            <div className=' w-full h-auto px-12 py-8 lg:flex justify-between items-center hidden'>
              <div>
                <ul className=' flex gap-5'>
                  <li className=' font-medium cursor-pointer'>
                    <button onClick={() => handleScrollNavigation('hero')}>
                      Home
                    </button>
                  </li>
                  <li className=' font-medium cursor-pointer'>
                    <button onClick={() => handleScrollNavigation('contact')}>
                      Contact Us
                    </button>
                  </li>
                  <li className=' font-medium cursor-pointer'>
                    <button onClick={() => handleScrollNavigation('pricing')}>
                      Pricing
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <img src={logo} alt="logo" className=' h-10 cursor-pointer' onClick={home}/>
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
                  <button onClick={() => handleScrollNavigation('hero')}>
                    Home
                  </button>
                </li>
                <li className=' font-medium cursor-pointer'>
                  <button onClick={() => handleScrollNavigation('contact')}>
                    Contact Us
                  </button>
                </li>
                <li className=' font-medium cursor-pointer'>
                  <button onClick={() => handleScrollNavigation('pricing')}>
                    Pricing
                  </button>
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
                  <a href="https://www.facebook.com/alforiaglobal">
                    <FaFacebookF />
                  </a>
                </div>
                <div>
                  <a href="https://www.youtube.com/@alforia_ai">
                    <FaYoutube />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/alforia.ai/">
                    <FaInstagram />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/alforia-pvt-ltd/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  );
};

export default Footer;
