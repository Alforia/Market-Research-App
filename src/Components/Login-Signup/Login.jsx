import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Login = ({switchToForgot,handleLogin}) => {

    const navigate = useNavigate ();

    const handleLoginClick=()=>{
        handleLogin();
        navigate("/")
    }

    const handleGoogleLogin = () => {
        const apiUrl = import.meta.env.VITE_API_URL;
        window.location.href = `${apiUrl}/auth/google`;
      };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white border-black border rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            
                            <h1 className="text-3xl font-bold">
                                <span className="text-primary">Welcome</span> back
                            </h1>
                            <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                            </span>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400 ">Username</label>
                            <input className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="Username" />

                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-0">
                        <label className="font-semibold text-xs text-gray-400 ">Password</label>
                        <input type="password" className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 " placeholder="••••••••" />
                        <div className=' flex items-end justify-end w-full' onClick={switchToForgot}>
                            <p className=' text-primary text-sm hover:text-blue-700 cursor-pointer' >forgot password?</p>
                        </div>

                    </div>
                    <div className="mt-5" onClick={handleLoginClick}>
                        <button className="py-1 px-8 bg-primary hover:bg-blue-700 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">Login</button>
                    </div>

                    <hr className="my-6 border-gray-300 w-full" />

          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-500">or sign up with</p>
            <button
              type="button"
              className="mt-3 flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
              onClick={handleGoogleLogin}
            >
                <div className=' flex gap-4 items-center '>
              <FcGoogle size={25} />
              <span>Sign up with Google</span>
              </div>
            </button>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
