import React, { useState, useEffect } from 'react';
import loadingData from '../Data/loadingData';
import Lottie from 'lottie-react';

const TipsLoader = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(Array(loadingData.length).fill(false));

    useEffect(() => {
        if (currentIndex < loadingData.length) {
            const showTimer = setTimeout(() => {
                setVisible(prevVisible => {
                    const newVisible = [...prevVisible];
                    newVisible[currentIndex] = true;
                    return newVisible;
                });
            }, 100);

            const hideTimer = setTimeout(() => {
                setVisible(prevVisible => {
                    const newVisible = [...prevVisible];
                    newVisible[currentIndex] = false;
                    return newVisible;
                });
                setCurrentIndex(currentIndex + 1);
            }, 4000);

            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [currentIndex]);

    return (
        <div className=''>
            <div>
                <h1 className='text-primary text-3xl font-bold text-center'>Report Generating...</h1>
            </div>
            {loadingData.map((data, index) => (
                // <h1 key={index} style={{ display: visible[index] ? 'block' : 'none' }}>
                //   {data.heading}
                // </h1>
                <div className=' flex flex-col items-center'>
                    <Lottie key={index} style={{ display: visible[index] ? 'block' : "none" }} animationData={data.lottie} className=' h-40' />
                    <h1 key={index} style={{ display: visible[index] ? 'block' : 'none' }} className=' font-semibold text-xl'>
                        {
                            data.heading
                        }
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default TipsLoader;
