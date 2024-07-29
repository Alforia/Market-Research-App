import React from 'react';
import { useInView } from 'react-intersection-observer';

// importing images
import img1 from '../assets/Images/img7.png';
import img2 from '../assets/Images/img6.png';
import img3 from '../assets/Images/img5.png';
import line3 from '../assets/Icon/lineBig1.png';
import line4 from '../assets/Icon/lineBig2.png';
import line1 from '../assets/Icon/verticalLine.png';
import line2 from '../assets/Icon/verticalLine2.png';

const Steps = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: step1Ref, inView: step1InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: step2Ref, inView: step2InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: step3Ref, inView: step3InView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id='steps' className='w-full bg-gradient-to-b from-secondary to-white h-auto items-center justify-center py-10 px-10 rounded-t-[2.5rem] flex flex-col gap-16 sm:px-40 pb-32'>
      <div className='flex flex-col gap-5'>
        <h1
          ref={headingRef}
          className={`text-3xl sm:text-5xl font-bold md:text-center text-left transition-transform transform duration-1000 ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Simple Steps to
          <span className='text-primary'> Uncover Your Next Big Idea</span>
        </h1>
        <p
          ref={paragraphRef}
          className={`md:text-center text-left transition-transform transform duration-1000 ${
            paragraphInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Navigating our platform is straightforward and user-friendly. Follow these simple steps to unlock valuable market insights and discover your next business venture.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-5 items-center justify-center gap-5 relative'>
        <div
          ref={step1Ref}
          className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
            step1InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img src={img1} alt="" />
          <h1 className='md:text-center text-left font-bold'>1. Input Your Data</h1>
          <p className='text-center'>Enter specific details about the market you are interested in</p>
        </div>

        <div className='hidden lg:block'>
          <img src={line4} alt="" />
        </div>

        <div className='block lg:hidden ml-44'>
          <img src={line2} alt="" />
        </div>

        <div
          ref={step2Ref}
          className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
            step2InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img src={img2} alt="" />
          <h1 className='text-center font-bold'>2. Analyze the Insights</h1>
          <p className='text-center'>Our platform will generate a detailed report based on your inputs</p>
        </div>

        <div className='hidden lg:block'>
          <img src={line3} alt="" />
        </div>

        <div className='block lg:hidden ml-20'>
          <img src={line1} alt="" />
        </div>

        <div
          ref={step3Ref}
          className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
            step3InView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <img src={img3} alt="" />
          <h1 className='text-center font-bold'>3. Discover Business Ideas</h1>
          <p className='text-center'>Our AI will suggest the best business ideas that align with current market trends.</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
