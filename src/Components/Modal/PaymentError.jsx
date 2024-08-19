import React, { useState } from 'react'
import Lottie from 'lottie-react'
import noData from '../../assets/animations/paymentsuccess.json'
import { useNavigate } from 'react-router-dom';

const PaymentError = () => {

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
                <h1 className=' font-semibold text-2xl text-center'><span className=' text-primary'>Oops!</span> there was an error in payment </h1>
            </div>
            <div>
            <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={handleLogin}>
                Retry
              </button>
            </div>
        </div>
    )
}

export default PaymentError
