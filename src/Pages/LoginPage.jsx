import React, { useState } from 'react'
import Login from '../Components/Login-Signup/Login'
import Signup from '../Components/Login-Signup/Signup';
import MeshGradientBackground from '../MeshGradientBackground';
import Forgot from '../Components/Login-Signup/Forgot';
import Signin from '../Components/Login-Signup/Signin';
import VerifyOtp from '../Components/Login-Signup/VerifyOtp';

const LoginPage = ({handleLogin, getUser}) => {
  const [currentComponent , setCurrentComponent] = useState ("signin");
  const [email, setEmail] = useState("")

  const switchToLogin =()=>{
    setCurrentComponent('login')
    console.log("switched");
  }

  const switchToSignup = ()=>{
    setCurrentComponent('signup')
  }

  const switchToForgot = ()=>{
    setCurrentComponent('forgot')
    console.log("clicked");
  }

  const switchToSignin = ()=>{
    setCurrentComponent("signin")
  }
  const switchToOtp = (email)=>{
    setEmail(email)
    setCurrentComponent("otp")
  }

  return (
    <div className=' w-full h-auto flex justify-center items-center px-8'>
      <MeshGradientBackground/>
      {
        currentComponent === "login" && (
          <Login switchToSignup={switchToSignup} switchToForgot={switchToForgot} handleLogin={handleLogin} switchToSignin={switchToSignin}/>
        )
      }
      {
        currentComponent === "signup" && (
          <Signup switchToLogin={switchToLogin} switchToSignin={switchToSignin}/>
        )
      }
      {
        currentComponent === "forgot" && (
          <Forgot switchToLogin={switchToLogin}/>
        )
      }

      {
        currentComponent === "signin" && (
          <Signin switchToOtp={switchToOtp} switchToSignup={switchToSignup} />
        )
      }
      {
        currentComponent === "otp" && (
          <VerifyOtp getUser={getUser} email={email}  />
        )
      }
    </div>
  )
}

export default LoginPage
  