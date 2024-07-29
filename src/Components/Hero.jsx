import React from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/Images/image1.png';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/explore');
  };

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false, // Animation will trigger every time the element comes into view
    threshold: 0.1,
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id='hero' className='grid lg:grid-cols-2 grid-cols-1-reverse items-center gap-12 md:gap-30 py-20 justify-center px-40 pt-28 pb-36'>
      <div
        ref={imgRef}
        className={`sm:w-[17.125rem] sm:h-[17.125rem] md:w-[19.125rem] md:h-[19.125rem] w-[15.863rem] h-[15.863rem] md:bg-gradient-to-r from-secondary to-white rounded-full right-0 sm:order-2 order-1 bg-transparent lg:ml-44 transition-transform transform duration-1000 ${
          imgInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <img src={img1} alt="" className='lg:h-80 lg:w-80' />
      </div>
      <div className='lg:order-1 order-2 flex flex-wrap gap-5'>
        <h1
          ref={headingRef}
          className={`text-3xl sm:text-5xl font-bold transition-transform transform duration-1000 ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Discover the Best
          <span className='text-primary'> Market Trends</span>
        </h1>
        <p
          ref={paragraphRef}
          className={`transition-transform transform duration-1000 ${
            paragraphInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Unlock the potential of your entrepreneurial dreams with our cutting-edge market analysis platform. Powered by GPT-4, we provide you with the latest trends, insights, and data to help you find the perfect business idea. Start your journey to success today!
        </p>
        <button
          ref={buttonRef}
          className={`bg-primary hover:bg-blue-700 px-8 py-2 rounded-lg text-white font-bold w-44 transition-transform transform duration-1000 ${
            buttonInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          onClick={handleStart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
