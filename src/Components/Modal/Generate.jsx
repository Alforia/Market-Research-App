import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Lottie from 'lottie-react'
import noData from '../../assets/animations/nodata.json'
import { useNavigate } from 'react-router-dom';

const Generate = () => {

    const [modalOpen, setModalOpen]= useState(false)

    const ToModalClose = () => {
        setModalOpen(false)
    }

    const navigate  =  useNavigate();

    const handleLogin = ()=>{
        navigate("/login")
    }
    return (
        <div className=' flex flex-col items-center relative gap-2'>
            <div>
            <Lottie animationData={noData} className=' h-40'/>
            </div>
            <div>
                <h1 className=' font-semibold text-2xl text-center'><span className=' text-primary'>Oops!</span> You Need to  Login First! </h1>
            </div>
            <div>
            <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={handleLogin}>
                Login
              </button>
            </div>
        </div>
    )
}

export default Generate
