import React, { useEffect, useContext, useState } from 'react';
import SurveyContext from '../Context/SurveyContext';
import { jsPDF } from 'jspdf';
import './Report.css';
import DownloadButton from '../DownloadButton';
import LoginModal from '../Modal/LoginModal';
import NonMemberAlert from '../NonMemberAlert';

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
        <div className=" flex justify-center flex-col  items-center">
            <h1 className=" text-center text-primary text-3xl font-bold">Report Page</h1>
            {loading ? (
                <p>Generating result...</p>
            ) : (
                isUser ? (
                    isTrimmed ? (
                        <>
                            <div className="" dangerouslySetInnerHTML={{ __html: trimmedResult.replace(/\n/g, '<br/>') }} />
                            <NonMemberAlert />
                        </>
                    ) : (
                        <>
                            <div onClick={downloadPDF}>
                                <DownloadButton />
                            </div>
                            <div className="report-content" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
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
