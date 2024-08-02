import React, { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Test = () => {
  const additionalQn = [
    {
      heading: "heading1",
      description: "We suggest the best ideas for your startups by providing detailed market analysis and insights."
    },
    {
      heading: "heading2",
      description: "Our market research process involves gathering data from various sources, analyzing market trends, and providing insights based on your specific inputs."
    },
    {
      heading: "heading3",
      description: "Our reports provide information on target market, competitors, market size, growth trends, customer needs, and other relevant insights."
    },
    {
      heading: "heading4",
      description: "You can contact our customer support team via email or phone. Our contact details are available on our website."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <div id='additionalQn' className='w-full h-auto sm:px-40 grid grid-cols-1 lg:grid-cols-1 items-center justify-center gap-2 pb-32'>
      <div>
        {additionalQn.map((question, index) => (
          <div key={index}>
            <div style={{ cursor: 'pointer' }} className={`flex justify-between px-12 items-center font-bold py-4 ${index === 0 ? 'rounded-t-3xl' : ''} ${index === additionalQn.length - 1 ? 'rounded-b-3xl' : ''}`}>
              {/* <div className='text-xl sm:text-2xl'>kahdlkhad</div> */}
              <input type="checkbox" name="" id="" />
              <h1>{question.heading}</h1>
              <div onClick={() => toggleOpen(index)} >
                <FaChevronCircleDown className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ""}`} />
              </div>
            </div>
            {/* <div className=' h-[0.004rem] w-2/3 mx-auto bg-black' /> */}
            {openIndex === index && (
              <div className="bg-white px-12 py-4">
                <p className='text-xl sm:text-2xl'>ihaldh</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Test
