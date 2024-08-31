import Lottie from 'lottie-react'
import React from 'react'
import errorLottie from "../assets/animations/errorLottie.json"
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate();

  const home = ()=>{
    navigate("/")
  }
  return (
    <div className=' h-screen w-full bg-green-50 flex items-center justify-center'>
      <div>
        <div>
          <Lottie animationData={errorLottie} className=' h-72' />
        </div>
        <div className=' flex justify-center items-center flex-col gap-6'>
          <h1 className=' text-2xl text-center'><span className='text-primary'> Oops! </span> Page not found...</h1>
          <button className=' bg-primary px-4 py-2 rounded-lg text-white hover:bg-indigo-500 ' onClick={home}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
