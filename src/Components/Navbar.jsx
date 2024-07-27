import React, { useState } from 'react';
import logo from "../assets/Images/logo.png";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/Images/avatar.jpg';
import Modal from 'react-modal';
import ProfileModal from './Profile/ProfileModal';

function Navbar({ loggedIn, handleLogout, user }) {
  
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

  
  const userPhoto = user?.photos?.[0]?.value || user?._json?.picture || avatar;

  // Custom styles for the modal


  return (
    <div className='w-full h-auto flex bg-transparent justify-between items-center px-12 mg:px-32 py-6'>
      <div className="justify-center items-center">
        <img src={logo} alt="" className='h-10' />
      </div>
      <div className='flex justify-center items-center gap-5'>
        <div className='hidden sm:block'>
          <ul className='flex gap-5 items-center justify-center font-medium'>
            <li className='font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Features
              </Link>
            </li>
            <li className='font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Pricing
              </Link>
            </li>
            <li className='font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-50}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {
            loggedIn ? (
              <div className='cursor-pointer' onClick={ToModalOpen}>
                <img src={userPhoto} alt='Loading...'  className='h-9 rounded-full' />
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
              <ProfileModal ToModalClose={ToModalClose} handleLogout={handleLogout} user={user}/>
            </div>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default Navbar;