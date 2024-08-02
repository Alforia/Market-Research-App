import React from 'react'

const ContactUs = () => {
  return (
    <div id='contact' className=' w-full  h-auto items-center justify-center py-10 px-10 rounded-t-[2.5rem] flex flex-col gap-6 sm:px-40 pb-32'>
      <h1
          className={"text-3xl sm:text-5xl font-bold md:text-center text-left transition-transform transform duration-1000"}
        >
          <span className='text-primary'>Contact </span>
           Us
        </h1>
        <div className=' flex flex-col items-center justify-center text-[#5A5A5A] gap-2'>
            <h1 className=' text-xl font-semibold'>Market Insight</h1>
            <p className=' text-center'>
            Alforia Private Limited, We Work Atlanta,  <br/> Bangalore, India 
            560034
            </p>
            <p className=' font-semibold'>
            Email: contact@alforia.ai

            </p>
        </div>
    </div>
  )
}

export default ContactUs
