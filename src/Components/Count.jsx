import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// importing icons 
import oneIcon from '../assets/Icon/One.png';
import documentIcon from '../assets/Icon/Document.png';
import playStoreIcon from '../assets/Icon/PlayStore.png';

const Count = () => {
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id='count' className='w-full bg-gradient-to-b from-secondary 2xl:px-96 to-white h-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center py-10 px-10 sm:px-40 rounded-t-[2.5rem] pb-32'>
      <div
        ref={firstRef}
        className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
          firstInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <img src={oneIcon} alt="" />
        <h1 className='font-bold text-2xl'>
          <span className='text-primary'>
            <CountUp start={60} end={96} duration={2}/>
          </span>
          %
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-lg'>Accuracy rate</h1>
          <h1 className='text-center'>Ensuring precise and reliable insights.</h1>
        </div>
      </div>
      <div
        ref={secondRef}
        className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
          secondInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <img src={playStoreIcon} alt="" />
        <h1 className='font-bold text-2xl'>
          <span className='text-primary'>
            <CountUp start={100} end={500} duration={2}/>
          </span>
          +
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-lg'>Case Studies</h1>
          <h1 className='text-center'>Ensuring precise and reliable insights.</h1>
        </div>
      </div>
      <div
        ref={thirdRef}
        className={`flex flex-col items-center justify-center transition-transform transform duration-1000 ${
          thirdInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <img src={documentIcon} alt="" />
        <h1 className='font-bold text-2xl'>
          <span className='text-primary'>
            <CountUp start={600} end={1000} duration={2}/>
          </span>
          +
        </h1>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-semibold text-lg text-center'>Business Ideas Generated</h1>
          <h1 className='text-center'>A wide array of ventures to explore.</h1>
        </div>
      </div>
    </div>
  );
}

export default Count;
