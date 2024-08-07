import Lottie from 'lottie-react';
import React, { useState } from 'react';
import reportLottie from '../../assets/animations/reportGenareted.json'
import { useNavigate } from 'react-router-dom';
import TipsLoader from './TipsLoader';

const Report = () => {
    const navigation = useNavigate()
    const handleClick = () => {
        navigation("/dashboard")
    }
    const [loading, setLoading] = useState(true)
    return (

        <>
            {
                loading ? (
                    <TipsLoader/>
                ):(
                    <div className=' flex justify-center flex-col items-center'>
                    <h1 className=' text-2xl font-bold'><span className=' text-primary'>Report</span> Genareted!</h1>
                    <Lottie animationData={reportLottie} className='h-32 w-32' />
                    <div className=" flex justify-center">
                        <button className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' onClick={handleClick}>
                            Click here to View
                        </button>
                    </div>
                    </div>
                )
            }
           
           </>

    );
}

export default Report;
