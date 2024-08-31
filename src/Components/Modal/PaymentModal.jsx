import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Lottie from 'lottie-react'
import noData from '../../assets/animations/nodata.json'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo/Vert-Logo.png"

const PaymentModal = ({ name, phone, email, setPhone }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const ToModalClose = () => {
        setModalOpen(false)
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login")
    }
    return (
        <div className=' flex flex-col items-center relative gap-2'>
            <div>
                <img src={logo} alt="" className=' h-20' />
            </div>
            <div>
                <h1 className=' font-semibold text-2xl text-center'>Enter your Details</h1>
            </div>
            <div>
                <input
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
            <input 
        type="text" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
            </div>
            <div>
            <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
            </div>
            <div>
                <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={handleLogin}>
                    Proceed to Pay
                </button>
            </div>
        </div>
    )
}

export default PaymentModal
