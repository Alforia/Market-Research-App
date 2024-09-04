import React, { useContext, useEffect, useState } from 'react'
import SurveyContext from '../Context/SurveyContext'

const BasicInfo = ({ switchToProductinfo }) => {
    const { basicInfo, setBasicInfo } = useContext(SurveyContext);
    const [basicQ1, setBasicQ1] = useState(basicInfo.basicQ1 || '')
    const [basicQ2, setBasicQ2] = useState(basicInfo.basicQ2 || '')
    const [basicQ3, setBasicQ3] = useState(basicInfo.basicQ3 || '')
    const [basicQ4, setBasicQ4] = useState(basicInfo.basicQ4 || '')
    const [error, setError] = useState('')

    useEffect(() => {
        setBasicInfo({ basicQ1, basicQ2, basicQ3, basicQ4 });
    }, [basicQ1, basicQ2, basicQ3, basicQ4, setBasicInfo]);

    const handleSubmit = () => {
        if (!basicQ1 || !basicQ2) {
            setError('Please fill out all required fields');
        } else {
            setError('');
            switchToProductinfo(); // Proceed to the next section
        }
    };

    return (
        <div className=' w-11/12 lg:w-auto px-10 sm:px-40 h-auto flex flex-col gap-6'>
            <div>
                <h1 className=' text-primary text-3xl font-bold text-center'>Basic Information & Market Details</h1>
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="businessName">
                    What is the name of your business or potential business?<span className=' text-red-500 text-2xl'>*</span>
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={basicQ1}
                    onChange={(e) => setBasicQ1(e.target.value)} 
                    required 
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="industry">
                    What industry or sector does your business belong to or are you interested in?<span className=' text-red-500 text-2xl'>*</span>
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={basicQ2} 
                    onChange={(e) => setBasicQ2(e.target.value)} 
                    required 
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="country">
                    In which country are you planning to start or expand your business? 
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={basicQ3} 
                    onChange={(e) => setBasicQ3(e.target.value)} 
                    required 
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="city">
                    Is there a specific city or region within this country that you are targeting?
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={basicQ4} 
                    onChange={(e) => setBasicQ4(e.target.value)} 
                    required 
                />
            </div>

            {error && <p className='text-red-500 text-center'>{error}</p>}

            <div className=" flex justify-center">
                <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={handleSubmit}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default BasicInfo
