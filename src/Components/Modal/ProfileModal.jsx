import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import Lottie from 'lottie-react';
import crown from '../../assets/animations/crown.json';
import avatar from '../../assets/Images/avatar.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ProfileModal = ({ ToModalClose, handleLogout, user }) => {
    const [plans, setPlans] = useState({ currentPlan: 'Loading...', credit: 'Loading...' });
    const navigate = useNavigate();

    const logoutClick = () => {
        localStorage.clear();
        window.location.href = '/';
        ToModalClose();
        // handleLogout();
    };

    const profileUpdated = async () => {
        try {
          const apiUrl = import.meta.env.VITE_API_URL; 
          const url = `${apiUrl}profile/updated`;
          const userID = user.userID; 
          const { data } = await axios.post(url, { userID });
      
          console.log('====================================');
          console.log('User details:', data);
          setPlans(data)
          console.log('====================================');
        } catch (error) {
          console.log("Profile update calling error:", error);
        }
      };
      
      useEffect(() => {
        profileUpdated();
      }, []);
      

    const [userPhoto, setUserPhoto] = useState ();

    useEffect(()=>{
        if(user && user.photo){
            setUserPhoto(user.photo)
        }else{
            setUserPhoto(avatar)
        }
    },[user, avatar]);

    const userName = user.name;
    const userEmail = user.email;
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
                <h1 className='font-bold text-lg mt-16'>{plans.currentPlan !== undefined ? plans.currentPlan : 'Loading...'}</h1>
                <p className='text-sm'>Package</p>
            </div>

            <h1>You have <span className=' font-semibold text-[#DC9F28] '>
                {plans.credit !== undefined ? plans.credit : 'Loading...'}
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
