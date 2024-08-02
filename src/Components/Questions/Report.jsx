import React, { useEffect, useContext, useState } from 'react';
import SurveyContext from '../Context/SurveyContext';
import { jsPDF } from 'jspdf';
import './Report.css';
import DownloadButton from '../DownloadButton';
import LoginModal from '../Modal/LoginModal';
import NonMemberAlert from '../NonMemberAlert';
import Result from './Result';

const Report = ({ user }) => {
    const { basicInfo, productInfo, competitorInfo } = useContext(SurveyContext);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(true);
    const [isUser, setIsUser] = useState(true);
    const [isTrimmed, setIsTrimmed] = useState(false);
    const [trimmedResult, setTrimmedResult] = useState('');

    useEffect(() => {
        if (user && user.id) {
            const userId = user.id;
            console.log('====================================');
            console.log('user report :', userId);
            console.log('====================================');

            const data = {
                userId,
                basicInfo,
                productInfo,
                competitorInfo,
            };

            console.log('====================================');
            console.log("1 ti 2");
            console.log('====================================');

            // POST the data to the backend
            fetch('http://localhost:3000/api/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(err => { throw new Error(`HTTP error! status: ${response.status}, message: ${err.error}`); });
                    }
                    return response.json();
                })
                .then(data => {
                    setResult(data.response);
                    setLoading(false);

                    // Check if the response is trimmed
                    const words = data.response.split(' ');
                    if (words.length <= 10) {
                        setIsTrimmed(true);
                        setTrimmedResult(data.response); // Store the trimmed response
                    } else {
                        setIsTrimmed(false);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error.message);
                    setLoading(false);
                });
        } else {
            setIsUser(false);
            setResult(<LoginModal />);
            setLoading(false);
        }
    }, [basicInfo, productInfo, competitorInfo, user]);

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text(result, 10, 10);
        doc.save('MarketResearch.pdf');
    };

    return (
        <div className=" h-screen flex  px-10 sm:px-40 flex-col  items-center">
            <h1 className=" text-center text-primary text-3xl font-bold">Report Page</h1>
            {loading ? (
                <p>Generating result...</p>
            ) : (
                isUser ? (
                    isTrimmed ? (
                        <div className=' relative'>
                            {/* <Result/> */}
                            <div className="" dangerouslySetInnerHTML={{ __html: trimmedResult.replace(/\n/g, '<br/>') }} />
                            {/* <NonMemberAlert /> */}
                        </div>
                    ) : (
                        <>
                            <div className="" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
                            <div className=' flex justify-between'>
                            <button className='px-6 sm:px-12 py-3 bg-white text-black font-bold rounded-xl border hover:bg-slate-100' >
                                Regenarete
                            </button>
                            <div onClick={downloadPDF}>
                                <DownloadButton />
                            </div>
                            </div>
                        </>
                    )
                ) : (
                    <div>{result}</div>
                )
            )}
        </div>
    );
}

export default Report;
