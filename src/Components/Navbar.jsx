import React, { useState } from 'react';
import logo from '../assets/Logo/Hor-Logo.png';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/Images/avatar.jpg';
import Modal from 'react-modal';
import ProfileModal from './Profile/ProfileModal';
import { scroller } from 'react-scroll';

function Navbar({ loggedIn, handleLogout }) {
  const [modalOpen, setModalOpen] = useState(false);

  const ToModalOpen = () => {
    setModalOpen(true);
    console.log("opened");
  };

  const ToModalClose = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleScrollNavigation = (section) => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }, 100); // delay to ensure page navigation completes
  };

  return (
    <div className='w-full h-auto flex bg-transparent justify-between items-center px-7 md:px-32 lg:pl-32 py-6'>
      <div className="justify-center items-center">
        <img src={logo} alt="" className='h-8 md:h-10' />
      </div>
      <div className='flex justify-center items-center gap-5'>
        <div className='hidden sm:block'>
          <ul className='flex gap-5 items-center justify-center font-medium'>
            <li className='font-medium cursor-pointer'>
              <button onClick={() => handleScrollNavigation('contact')}>
                Contact Us
              </button>
            </li>
            <li className='font-medium cursor-pointer'>
              <button onClick={() => handleScrollNavigation('pricing')}>
                Pricing
              </button>
            </li>
            <li className='font-medium cursor-pointer'>
              <button onClick={() => handleScrollNavigation('faq')}>
                FAQ
              </button>
            </li>
          </ul>
        </div>
        <div>
          {
            loggedIn ? (
              <div className='cursor-pointer' onClick={ToModalOpen}>
                <img src={avatar} alt="" className='h-9 rounded-full' />
              </div>
            ) : (
              <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={handleLogin}>
                Sign In
              </button>
            )
          }

          <Modal
            isOpen={modalOpen}
            onRequestClose={ToModalClose}
            contentLabel="Profile"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            className="fixed inset-0 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto">
              <ProfileModal ToModalClose={ToModalClose} handleLogout={handleLogout} />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
