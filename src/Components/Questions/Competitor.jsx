// import React, { useContext, useEffect, useState } from 'react';
// import SurveyContext from '../Context/SurveyContext';

// const Competitor = ({switchToProductinfo,switchToReport}) => {

//     const { competitorInfo, setCompetitorInfo } = useContext(SurveyContext);
//     const [competitorQ1, setCompetitorQ1] = useState('')
//     const [competitorQ2, setCompetitorQ2] = useState('')

//      // Load values from local storage when component mounts
//      useEffect(() => {
//         const savedCompetitorQ1 = localStorage.getItem('competitorQ1');
//         const savedCompetitorQ2 = localStorage.getItem('competitorQ2');

//         if (savedCompetitorQ1) setCompetitorQ1(savedCompetitorQ1);
//         if (savedCompetitorQ2) setCompetitorQ2(savedCompetitorQ2);
//     }, []);

//     useEffect(() => {
//         setCompetitorInfo({ competitorQ1, competitorQ2 });
//     }, [competitorQ1, competitorQ2]);

//     // Save values to local storage when they change
//     useEffect(() => {
//         localStorage.setItem('competitorQ1', competitorQ1);
//     }, [competitorQ1]);

//     useEffect(() => {
//         localStorage.setItem('competitorQ2', competitorQ2);
//     }, [competitorQ2]);

//     console.log('====================================');
//     console.log('answers',competitorQ1,competitorQ2);
//     console.log('====================================');



//   return (
//     <div className=' w-11/12 lg:w-auto h-auto flex flex-col gap-6 '>
//     <div>
//         <h1 className=' text-primary text-3xl font-bold text-center'>Competitor Analysis</h1>
//     </div>

//     <div className=' flex flex-col text-center font-semibold gap-4'>
//         <label htmlFor="">
//         Do you know of any existing competitors in this market? If yes, please list them.
//         </label>
//         <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
//         value={competitorQ1} 
//         onChange={(e) => setCompetitorQ1(e.target.value)} 
//         />
//     </div>

//     <div className=' flex flex-col text-center font-semibold gap-4'>
//         <label htmlFor="">
//         Provide any insights or observations about the strengths and weaknesses of these competitors.
//         </label>
//         <input type="text" className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
//         value={competitorQ2} 
//         onChange={(e) => setCompetitorQ2(e.target.value)}         
//         />
//     </div>

//     <div className=" flex justify-between">
        
//         <button className=' px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' onClick={switchToProductinfo}> 
//             Previous
//         </button>
//         <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={switchToReport}>
//             Next
//         </button>
//     </div>

// </div>
//   )
// }

// export default Competitor

import React, { useContext, useEffect, useState } from 'react';
import SurveyContext from '../Context/SurveyContext';

const Competitor = ({ switchToProductinfo, switchToReport }) => {
    const { competitorInfo, setCompetitorInfo } = useContext(SurveyContext);
    const [competitorQ1, setCompetitorQ1] = useState(competitorInfo.competitorQ1 || '');
    const [competitorQ2, setCompetitorQ2] = useState(competitorInfo.competitorQ2 || '');

    useEffect(() => {
        setCompetitorInfo({ competitorQ1, competitorQ2 });
    }, [competitorQ1, competitorQ2, setCompetitorInfo]);

    console.log('====================================');
    console.log('answers', competitorQ1, competitorQ2);
    console.log('====================================');

    return (
        <div className='w-11/12 lg:w-auto px-10 sm:px-40 h-auto flex flex-col gap-6'>
            <div>
                <h1 className='text-primary text-3xl font-bold text-center'>Competitor Analysis</h1>
            </div>
            <div className='flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    Do you know of any existing competitors in this market? If yes, please list them.
                </label>
                <input 
                    type="text" 
                    className='h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2'
                    value={competitorQ1}
                    onChange={(e) => setCompetitorQ1(e.target.value)}
                />
            </div>
            <div className='flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    Provide any insights or observations about the strengths and weaknesses of these competitors.
                </label>
                <input 
                    type="text" 
                    className='h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2'
                    value={competitorQ2}
                    onChange={(e) => setCompetitorQ2(e.target.value)}
                />
            </div>
            <div className="flex justify-between w-full">
                <button className='px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' onClick={switchToProductinfo}> 
                    Previous
                </button>
                <button 
                    className='px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' 
                    onClick={switchToReport}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Competitor;

