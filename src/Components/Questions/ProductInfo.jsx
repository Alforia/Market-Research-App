import React, { useContext, useEffect, useState } from 'react';
import SurveyContext from '../Context/SurveyContext';

const ProductInfo = ({ switchToBasic, switchToCompetitor }) => {
    const { productInfo, setProductInfo } = useContext(SurveyContext);
    const [productQ1, setProductQ1] = useState(productInfo.productQ1 || '');
    const [productQ2, setProductQ2] = useState(productInfo.productQ2 || '');
    const [productQ3, setProductQ3] = useState(productInfo.productQ3 || '');
    const [productQ4, setProductQ4] = useState(productInfo.productQ4 || '');
    const [error, setError] = useState('');

    useEffect(() => {
        setProductInfo({ productQ1, productQ2, productQ3, productQ4 });
    }, [productQ1, productQ2, productQ3, productQ4, setProductInfo]);

    const handleNext = () => {
        if (!productQ1 || !productQ3) {
            setError('Please fill out all required fields.');
        } else {
            setError('');
            switchToCompetitor(); // Proceed to the next section if validation passes
        }
    };

    return (
        <div className=' w-11/12 lg:w-auto px-10 sm:px-40 h-auto flex flex-col gap-6'>
            <div>
                <h1 className=' text-primary text-xl lg:text-3xl font-bold text-center'>
                    Product/Service Information & Target Audience
                </h1>
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    What product or service are you planning to offer or currently offering?<span className=' text-red-500 text-2xl'>*</span>
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={productQ1} 
                    onChange={(e) => setProductQ1(e.target.value)}
                    required
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    What makes your product/service unique or different from competitors?
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={productQ2} 
                    onChange={(e) => setProductQ2(e.target.value)}
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    Who is your target audience?<span className=' text-red-500 text-2xl'>*</span>
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={productQ3} 
                    onChange={(e) => setProductQ3(e.target.value)}
                    required
                />
            </div>

            <div className=' flex flex-col text-center font-semibold gap-4'>
                <label htmlFor="">
                    Provide any specific details about your target customers, such as age group or income level.
                </label>
                <input 
                    type="text" 
                    className=' h-10 border-gray-300 rounded-lg px-5 font-medium focus:border-primary outline-none border-2 '
                    value={productQ4} 
                    onChange={(e) => setProductQ4(e.target.value)}
                />
            </div>

            {error && <p className='text-red-500 text-center'>{error}</p>}

            <div className=" flex justify-between">
                <button 
                    className=' px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' 
                    onClick={switchToBasic}>
                    Previous
                </button>
                <button 
                    className=' px-6 sm:px-12 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl' 
                    onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
