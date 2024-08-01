import React from 'react';
import { IoClose } from "react-icons/io5";
import Lottie from 'lottie-react';
import crown from '../../assets/animations/crown.json';

const ProfileModal = ({ ToModalClose, handleLogout, user }) => {
    const logoutClick = () => {
        ToModalClose();
        handleLogout();
    };

    const userName = user?.displayName || '';
    const userEmail = user?.emails?.[0]?.value || user?._json?.email || '';
    const userPhoto = user?.photos?.[0]?.value || user?._json?.picture || "";

    return (
        <div className='flex flex-col items-center relative gap-2'>
            <div className='cursor-pointer' onClick={ToModalClose}>
                <IoClose size={25} className='absolute right-0 mr-6 mt-6' />
            </div>

            <div className='relative w-full'>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16'>
                    <img src={userPhoto} alt='Profile' className='h-28 w-28 rounded-full border-4 border-white' />
                </div>
            </div>

            <div className='mt-12 flex items-center flex-col font-medium'>
                <h1 className='text-xl font-semibold'>
                    {userName}
                </h1>
                <h1 className=''>{userEmail}</h1>
            </div>

            <div className='bg-white w-36 h-36 rounded-2xl flex flex-col justify-center items-center p-4 mt-6 relative'>
                <div>
                    <Lottie animationData={crown} className='h-32 w-32 transform -translate-y-8 -translate-x-1/2 bg-transparent z-10 absolute' />
                </div>
                <h1 className='font-bold text-lg mt-16'>Essential</h1>
                <p className='text-sm'>Package</p>
            </div>

            <h1>You have <span className=' font-semibold text-[#DC9F28] '>
                     5 Credits
                </span> left!
            </h1>

            <div className='flex gap-6 text-white font-semibold mt-4 w-full '>
                <button className='bg-primary h-14 hover:bg-blue-700 px-7 py-2 rounded-lg rounded-t-none shadow-sm w-full' onClick={logoutClick}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileModal;
