import React, { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Faq = () => {
  const faqData = [
    {
      question: "What does Market Insights do?",
      answer: "We suggest the best ideas for your startups by providing detailed market analysis and insights."
    },
    {
      question: "How does your market research process work?",
      answer: "Our market research process involves gathering data from various sources, analyzing market trends, and providing insights based on your specific inputs."
    },
    {
      question: "What kind of information can I get from your reports?",
      answer: "Our reports provide information on target market, competitors, market size, growth trends, customer needs, and other relevant insights."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team via email or phone. Our contact details are available on our website."
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
    <div id='faq' className='w-full h-auto sm:px-40 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-2 pb-32'>
      <div ref={headingRef} className={`px-12 sm:px-0 transition-transform transform duration-700 ${headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className='text-4xl lg:text-5xl font-bold'>
          <span className='text-primary'>Frequently </span>
          asked Questions
        </h1>
      </div>

      <div>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div onClick={() => toggleOpen(index)} style={{ cursor: 'pointer' }} className={`flex justify-between px-12 items-center font-bold py-4 ${index === 0 ? 'rounded-t-3xl' : ''} ${index === faqData.length - 1 ? 'rounded-b-3xl' : ''}`}>
              <div className='text-xl sm:text-2xl'>{faq.question}</div>
              <div>
                <FaChevronCircleDown className={`text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ""}`} />
              </div>
            </div>
            <div className=' h-[0.004rem] w-2/3 mx-auto bg-black' />
            {openIndex === index && (
              <div className="bg-white px-12 py-4">
                <p className='text-xl sm:text-2xl'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
