import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import img from "../../assets/Images/avatar.jpg"

const ProfileModal = ({ ToModalClose,  handleLogout, user }) => {
    const logoutClick = ()=>{
        ToModalClose();
        handleLogout();
    }

    // Extracting user details safely
    const userName = user?.displayName || '';
    const userEmail = user?.emails?.[0]?.value || user?._json?.email || '';
    const userPhoto = user?.photos?.[0]?.value || user?._json?.picture || avatar;

    return (
        <div className=' flex flex-col items-center gap-2'>
            <div>
                <img src={userPhoto} alt='Loading...' className=' h-20 rounded-full ' />
            </div>
            <div className=' flex items-center flex-col font-medium  '>
                <h1 className=' text-xl font-semibold'>
                    {userName}
                </h1>
                <h1 className=''>{userEmail}</h1>
            </div>
            <div className=' bg-red-500  px-7 py-2 rounded-lg text-white font-semibold' onClick={logoutClick}>
                <button>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileModal
