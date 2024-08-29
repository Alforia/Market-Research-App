import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo/Hor-Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatar from '../assets/Images/avatar.jpg';
import { scroller } from 'react-scroll';

function Navbar({ loggedIn, user, ToModalOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userPhoto, setUserPhoto] = useState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (user && user.photo) {
      setUserPhoto(user.photo);
    } else {
      setUserPhoto(avatar);
    }
  }, [user, avatar]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > scrollPosition) {
        // Scrolling down
        setIsNavbarVisible(false);
      } else {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScrollNavigation = (section) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  return (
    <>
      <div className={`w-full h-auto flex  bg-white bg-opacity-90 justify-between items-center px-7 md:px-32 lg:pl-32 py-6 transition-transform duration-300 ${isNavbarVisible ? 'sticky top-0' : '-top-20'} ${location.pathname === "/dashboard" ? '' : 'z-20'}`}>
        <div className="justify-center  items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-8 md:h-10" />
          </Link>
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="hidden sm:block">
            <ul className="flex gap-5 items-center justify-center font-medium">
              <li className="font-medium cursor-pointer">
                {loggedIn ? (
                  <button onClick={() => navigate('/dashboard')}>History</button>
                ) : (
                  <button onClick={() => handleScrollNavigation('contact')}>Contact Us</button>
                )}
              </li>
              <li className="font-medium cursor-pointer">
                <button onClick={() => handleScrollNavigation('pricing')}>Pricing</button>
              </li>
              <li className="font-medium cursor-pointer">
                {location.pathname === "/explore" || "/dashboard" ? (
                  <button onClick={() => handleScrollNavigation('/')}>Home</button>
                ) : (
                  <button onClick={() => handleScrollNavigation('faq')}>Faq</button>
                )}
              </li>
            </ul>
          </div>
          <div>
            {loggedIn ? (
              <div className="cursor-pointer" onClick={ToModalOpen}>
                <img src={userPhoto} alt="Loading..." className="h-9 rounded-full" />
              </div>
            ) : (
              location.pathname !== "/login" && (
                <button
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
