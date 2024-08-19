import React, { useContext, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import crown from '../../assets/animations/crown.json';
import SurveyContext from '../Context/SurveyContext'

const Checkbox = ({ switchToReport, switchToCompetitor }) => {
    const { selectedValues, toggleSelection } = useContext(SurveyContext);

    const additionalQn = [
        {
            heading: "Summary",
            description: "Information on the market's current size, growth, and important trends.",
            value: '1',
            subscribed: false
        },
        {
            heading: "Industry Analysis",
            description: "How the industry is set up, main trends, and relevant rules or policies.",
            value: '2',
            subscribed: false
        },
        {
            heading: "Market Dynamics",
            description: "Key competitors, their market share, strengths, and weaknesses.",
            value: '3',
            subscribed: true
        },
        {
            heading: "Competitive Landscape",
            description: "Information on the target customers, their preferences, needs, and behaviors.",
            value: '4',
            subscribed: false
        },
        {
            heading: "SWOT Analysis",
            description: "Overview of the products, their unique features, and how they are positioned in the market.",
            value: '5',
            subscribed: false
        },
        {
            heading: "Market Segmentation",
            description: "Potential growth opportunities and challenges in the market.",
            value: '6',
            subscribed: true
        },
        {
            heading: "Consumer Insights",
            description: "Overview of marketing methods, sales tactics, and ways to attract and keep customers.",
            value: '7',
            subscribed: false
        },
        {
            heading: "Technological Trends",
            description: "Additional data tables, charts, references, and glossary.",
            value: '8',
            subscribed: true
        },
        {
            heading: "Regulatory Environment",
            description: "Additional data tables, charts, references, and glossary.",
            value: '9',
            subscribed: true
        },
        {
            heading: "Strategic Recommendations",
            description: "Additional data tables, charts, references, and glossary.",
            value: '10',
            subscribed: true
        },
        //  no need to remove below code!
        // {
        //     heading: "Chart's",
        //     description: "chart's will get based on your input!.",
        //     value: '11',
        //     subscribed: true
        // },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleCheckboxChange = (value) => {
        toggleSelection(value); // Use the context's toggle function
    }

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div id='additionalQn' className='w-full h-auto sm:px-40 grid grid-cols-1 lg:grid-cols-1 items-center justify-center gap-4 pb-32 '>
            <div className=' px-12'>
                <h1 className='text-primary text-3xl font-bold text-center'>Select the data you wanted</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 px-6">
                {additionalQn.map((question, index) => (
                    <div key={index} className="question">
                        <div

                            style={{ cursor: 'pointer' }}
                            className={`flex justify-between px-12 items-center font-bold py-4 rounded-xl relative gap-4 ${openIndex === index ? " rounded-b-none" : ""} mt-4 bg-[#E8E8E8] ${index === 0 ? 'rounded-t-xl' : ''} ${index === additionalQn.length - 1 ? 'rounded-b-xl' : ''}`}>
                            {/* <input type="checkbox"
                                id={`question${index}`}
                                className=' h-5 w-5'
                                value={question.value} 
                                // checked={selectedValues.includes(`question${index}`)} // Check if this radio is selected
                                checked={selectedValues.includes(question.value)}
                                // onChange={() => handleRadioChange(index)}
                                onChange={() => handleCheckboxChange(question.value)} // Handle change event
                            /> */}

                            <input
                                type="checkbox"  // Changed to checkbox
                                id={`question${index}`}
                                value={question.value} // Use value from the question object
                                checked={selectedValues.includes(question.value)} // Check if this checkbox is selected
                                onChange={() => handleCheckboxChange(question.value)} // Update state on change
                                className='h-5 w-5'
                            />

                            <div className="flex justify-between w-full items-center " onClick={() => toggleOpen(index)} >
                                <h1 className=' text-md'>{question.heading}</h1>
                                <div className=' flex items-center relative'>
                                    <div className=' w-12 h-12'></div>
                                    {
                                        question.subscribed && <Lottie animationData={crown} className='h-12 w-12 absolute  top-0  ' />
                                    }


                                    <IoIosArrowDown size={20} className={` text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ""}`} />
                                </div>
                            </div>
                        </div>
                        {openIndex === index && (
                            <div className="bg-[#F9F9F9] px-12 rounded-b-2xl py-4">
                                <p className='text-xl sm:text-xl'> {question.description} </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-between w-full px-12">
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
