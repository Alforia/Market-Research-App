import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/styledLogo.png'
import axios from 'axios';

const VerifyOtp = ({ getUser }) => {
    const navigate = useNavigate();
    const [userOtp, setUserOtp] = useState('')

    const handleLoginClick = ({ switchToSignin }) => {
        handleLogin();
        navigate("/")
    }

    const handleOtpVerify = async () => {
        try {
          const apiUrl = import.meta.env.VITE_API_URL;
          const response = await axios.post(`${apiUrl}/login/verify`, {
            email: "imadibrahim164@gmail.com",
            otp: userOtp,
          }, {
            withCredentials: true
          });
    
          if (!response.data.error) {
            alert("Login success");
            await getUser();
            navigate("/"); // Redirect to the main page after successful login
          } else {
            alert(response.data.message);
          }
        } catch (error) {
          console.error("Error verifying OTP:", error);
          alert("An error occurred while verifying OTP. Please try again.");
        }
      };


    const handleGoogleLogin = () => {
        const apiUrl = import.meta.env.VITE_API_URL;
        window.location.href = `${apiUrl}/auth/google`;
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white flex flex-col justify-center items-center rounded-xl shadow-lg">
                    <div>
                        <img src={logo} className=' h-24' alt="" />
                    </div>

                    <div className=' text-center'>
                        <h1 className=' text-3xl font-bold text-center mt-6'>
                            Check your <span className=' text-primary'> Inbox </span> <br />
                        </h1>
                        <p>Enter the code we just sent to <br />
                            encorian46@gmail.com</p>
                    </div>

                    <div className=' flex flex-col gap-4 mt-6'>
                        <input type="text"
                            name=""
                            id=""
                            placeholder='Verify Otp'
                            value={userOtp}
                            onChange={(e) => setUserOtp(e.target.value)}
                            className=' border w-72 h-12 px-7 rounded-lg focus:outline-primary font-semibold ' />

                        <button
                            type="button"
                            className="mt-3 flex items-center justify-center w-full p-3 bg-primary rounded-3xl text-white hover:bg-blue-700"

                            onClick={handleOtpVerify}
                        >
                            <div className=' flex gap-4 items-center' >
                                <span className=' font-semibold '>Confirm</span>
                            </div>

                        </button>
                    </div>
                    <div className=' text-center mt-8 '>
                        <p>Didn’t receive a code? <Link className=' text-primary cursor-pointer'> Resend code </Link></p>
                        {/* <p> Have an Account already?<Link className=' text-primary cursor-pointer' onClick={switchToSignin}> Login </Link> </p> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default VerifyOtp
