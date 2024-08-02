import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/styledLogo.png'

const Signin = ({switchToOtp, switchToSignup}) => {
    const navigate = useNavigate();

    const handleLoginClick = ({switchToSignin}) => {
        handleLogin();
        navigate("/")
    }

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

            <div>
                        <h1 className=' text-3xl font-bold text-center mt-6'>
                        Get your <span className=' text-primary'> Market Research </span> <br/>
                        in 3 Steps!
                        </h1>
                    </div>

            <div className=' flex flex-col gap-4 mt-6'>
            <input type="text" name="" id="" placeholder='Email' className=' border w-72 h-12 px-7 rounded-lg focus:outline-primary font-semibold ' />
            
            <button
              type="button"
              className="mt-3 flex items-center justify-center w-full p-3 bg-primary rounded-3xl text-white hover:bg-blue-700"
              
              onClick={switchToOtp}
            >
              <div className=' flex gap-4 items-center' >
                <span className=' font-semibold '>Continue</span>
              </div>

            </button>
          </div>

          <div className='relative flex mt-6 items-center w-72'>
            <div className='flex-grow border-t border-gray-300'></div>
            <span className='flex-shrink mx-4 text-gray-500'>or</span>
            <div className='flex-grow border-t border-gray-300'></div>
          </div>

            <div className="mt-4 flex flex-col items-center">
                <button
                    type="button"
                    className="mt-3 flex items-center justify-center w-60 p-3 border border-gray-300 rounded-3xl hover:bg-gray-100"
                    onClick={handleGoogleLogin}
                >
                    <div className=' flex gap-4 items-center '>
                        <FcGoogle size={25} />
                        <span className=' font-semibold '>Sign up with Google</span>
                    </div>
                </button>
                {/* <button
                    type="button"
                    className="mt-3 flex items-center justify-center w-60 p-3 bg-primary rounded-3xl text-white hover:bg-blue-700"
                    // onClick={switchToSignup}
                >
                    <div className=' flex gap-4 items-center '>
                        <span className=' font-semibold '>Create Account</span>
                    </div>

                </button> */}
            </div>
                    <div className=' text-center mt-8 '>
                        <p>By continuing, you agree to the <Link className=' text-primary ' to="/terms"> Terms and Conditions </Link> & <Link className=' text-primary ' to="/privacy"> Privacy policy</Link></p>
                        {/* <p> Have an Account already?<Link className=' text-primary cursor-pointer' onClick={switchToSignin}> Login </Link> </p> */}
                    </div>
        </div>
    </div>


</div>
  )
}

export default Signin
