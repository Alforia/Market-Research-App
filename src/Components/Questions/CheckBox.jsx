import React, { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const Checkbox = ({switchToReport, switchToCompetitor}) => {
    const additionalQn = [
        // {
        //   heading: "Executive Summary",
        //   description: "A short summary of the main points and suggestions from the report."
        // },
        // {
        //   heading: "Introduction",
        //   description: "Background information and the goals of the research."
        // },
        {
          heading: "Market Overview",
          description: "Information on the market's current size, growth, and important trends."
        },
        {
          heading: "Industry Analysis",
          description: "How the industry is set up, main trends, and relevant rules or policies."
        },
        {
          heading: "Competitive Analysis",
          description: "Key competitors, their market share, strengths, and weaknesses."
        },
        {
          heading: "Customer Analysis",
          description: "Information on the target customers, their preferences, needs, and behaviors."
        },
        {
          heading: "Product Analysis",
          description: "Overview of the products, their unique features, and how they are positioned in the market."
        },
        // {
        //   heading: "Market Segmentation",
        //   description: "Breakdown of the market into different segments based on demographics, location, and behavior."
        // },
        {
          heading: "Market Opportunities and Threats",
          description: "Potential growth opportunities and challenges in the market."
        },
        {
          heading: "Marketing and Sales Strategies",
          description: "Overview of marketing methods, sales tactics, and ways to attract and keep customers."
        },
        // {
        //   heading: "Technological Landscape",
        //   description: "Key technologies and how they affect the market."
        // },
        // {
        //   heading: "Financial Analysis",
        //   description: "Analysis of market revenue, investment opportunities, and cost structure."
        // },
        // {
        //   heading: "Conclusion and Recommendations",
        //   description: "Key findings and strategic suggestions for stakeholders."
        // },
        {
          heading: "Data visualisation Charts",
          description: "Additional data tables, charts, references, and glossary."
        },

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
      <div className="flex justify-between w-full">
                <button className='px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' 
                onClick={switchToCompetitor}> 
                    Previous
                </button>
                <button 
                    className='px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl'
                    onClick={switchToReport}
                    >
                    Next
                </button>
            </div>
    </div>
  );
};

export default Checkbox;
