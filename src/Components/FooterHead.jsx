import React from 'react'

const FooterHead = () => {
  return (
    <div id='footer' className=' w-full h-auto  flex flex-col justify-center items-center'>
      <div className=' flex flex-col gap-5 bg-black rounded-t-[2.5rem] w-full px-12 py-12'>
        <h1 className=' text-2xl sm:text-3xl font-bold text-white text-center'>
          <span className=' text-primary'>30,000+ Users </span>
          are Transforming Ideas into Business Unicorns
        </h1>
        <p className=' text-white text-center '>Join the ranks of successful entrepreneurs who have turned their ideas into thriving businesses with our comprehensive market analysis and innovative insights.</p>
      </div>
    </div>
  )
}

export default FooterHead
