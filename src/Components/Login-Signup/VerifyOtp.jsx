import React, { useState, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/styledLogo.png'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyOtp = ({ getUser, email }) => {
    const navigate = useNavigate();
    const [userOtp, setUserOtp] = useState('');
    const [timer, setTimer] = useState(60); // 60 seconds timer
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleOtpClick = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/login/otp`, {
                userEmail: email,
            });

            if (response.data.userEmail) {
                toast.success("OTP has been sent to your email.");
                setTimer(60); // Reset the timer
                setCanResend(false); // Disable the resend button
            } else {
                toast.error("User not existing.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("An error occurred while sending OTP. Please try again.");
        }
    };

    const handleOtpVerify = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/login/verify`, {
                email: email,
                otp: userOtp,
            }, {
                withCredentials: true
            });

            // console.log('response in otp :',response);
            

            if (!response.data.error) {
                toast.success("Login Success");
                const userID = response.data.user.userID;
                const value = JSON.stringify({ userID })
                localStorage.setItem('token', value);
                getUser();
                window.location.href = '/';
                // navigate("/"); 
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error("An error occurred while verifying OTP. Please try again.");
        }
    };

    const handleGoogleLogin = () => {
        const apiUrl = import.meta.env.VITE_API_URL;
        window.location.href = `${apiUrl}/auth/google`;
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white flex flex-col justify-center items-center rounded-xl shadow-lg">
                    <div>
                        <img src={logo} className=' h-24' alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-3xl font-bold text-center mt-6'>
                            Check your <span className='text-primary'> Inbox </span> <br />
                        </h1>
                        <p>Enter the code we just sent to <br />
                            {email}</p>
                    </div>

                    <div className='flex flex-col gap-4 mt-6'>
                        <input type="text"
                            placeholder='Verify Otp'
                            value={userOtp}
                            onChange={(e) => setUserOtp(e.target.value)}
                            className='border w-72 h-12 px-7 rounded-lg focus:outline-primary font-semibold' />

                        <button
                            type="button"
                            className="mt-3 flex items-center justify-center w-full p-3 bg-primary rounded-3xl text-white hover:bg-blue-700"
                            onClick={handleOtpVerify}
                        >
                            <div className='flex gap-4 items-center'>
                                <span className='font-semibold'>Confirm</span>
                            </div>
                        </button>
                    </div>

                    <div className='text-center mt-8'>
                        <p>Didn’t receive a code? <span>
                            <Link 
                                className={`text-primary cursor-pointer ${!canResend ? 'pointer-events-none opacity-50' : ''}`} 
                                onClick={canResend ? handleOtpClick : null}
                            > 
                                Resend code {canResend ? '' : `in ${timer}s`}
                            </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyOtp;
