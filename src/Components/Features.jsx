import React from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from '../assets/Images/featureImg.png';

const Features = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='features' className='grid lg:grid-cols-2 grid-cols-1-reverse items-center gap-12 md:gap-32 py-24 sm:flex-row justify-center px-40 pb-36'>
      <div
        ref={imgRef}
        className={`sm:w-[19.125rem] sm:h-[19.125rem] md:w-[20.125rem] md:h-[20.125rem] w-[15.863rem] h-[15.863rem] md:bg-gradient-to-r from-secondary to-white rounded-full right-0 sm:order-2 order-1 flex items-center justify-center bg-transparent transition-transform transform duration-1000 ${
          imgInView ? 'translate-x-70 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <img src={img1} alt="" />
      </div>
      <div
        ref={textRef}
        className={`lg:order-1 order-2 gap-5 transition-transform transform duration-1000 ${
          textInView ? '-translate-y-90 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className='text-3xl lg:text-5xl font-bold pb-6'>
          <span className='text-primary'>Revolutionary Features </span>
          to Guide Your Success
        </h1>
        <p>
          Our platform offers a suite of innovative tools designed to analyze market trends, identify opportunities, and provide you with actionable business ideas. From in-depth competitor analysis to detailed customer insights, we equip you with everything you need to thrive in the competitive landscape.
        </p>
      </div>
    </div>
  );
}

export default Features;
