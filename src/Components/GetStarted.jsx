import React from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/Images/image1.png';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/explore');
  };

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true, // Animation will trigger every time the element comes into view
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Animation will trigger every time the element comes into view
    threshold: 0.1,
  });

  return (
    <div id='getstarted' className='grid lg:grid-cols-2 grid-cols-1-reverse 2xl:px-96 items-center gap-12 md:gap-24 py-12 justify-center px-12 sm:px-40 pb-32'>
      <div
        ref={imgRef}
        className={`sm:w-[19.125rem] sm:h-[19.125rem] md:w-[20.125rem] md:h-[20.125rem] w-[15.863rem] h-[15.863rem] md:bg-gradient-to-r from-secondary to-white rounded-full right-0 bg-transparent transition-transform transform duration-1000 ${
          imgInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <div className='absolute'></div>
        <img src={img1} alt="" />
      </div>
      <div
        ref={textRef}
        className={`flex flex-wrap gap-5 transition-transform transform duration-1000 ${
          textInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className='text-3xl sm:text-5xl font-bold'>
          <span className='text-primary'>Kickstart your </span>
          Market Analysis Adventure
        </h1>
        <p>
          Unlock the potential of your entrepreneurial dreams with our cutting-edge market analysis platform. Powered by GPT-4, we provide you with the latest trends, insights, and data to help you find the perfect business idea. Start your journey to success today!
        </p>
        <button className='bg-primary hover:bg-blue-700 px-8 py-2 rounded-lg text-white font-bold w-44' onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
