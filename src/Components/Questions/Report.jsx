import React, { useEffect, useContext, useState } from 'react';
import SurveyContext from '../Context/SurveyContext';
import { jsPDF } from 'jspdf';
import './Report.css';

const Report = ({ user }) => {
    const { basicInfo, productInfo, competitorInfo } = useContext(SurveyContext);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(true);
    const [isUser, setIsUser] = useState(true);

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
            })
            .catch((error) => {
                console.error('Error:', error.message);
                setLoading(false);
            });
        } else {
            setIsUser(false);
            setResult('Please login to get a response');
            setLoading(false);
        }
    }, [basicInfo, productInfo, competitorInfo, user]);

        // Reset the context values only after the result has been set and rendered
      //   useEffect(() => {
      //     if (!loading && isUser) {
      //         // Reset the context values after rendering the result
      //         resetSurvey();
      //     }
      // }, [loading, isUser, resetSurvey]);

    const downloadPDF = () => {
      const doc = new jsPDF();
      doc.text(result, 10, 10);
      doc.save('MarketResearch.pdf');
  };

    return (
        <div className="report-container">
            <h1 className="report-title">Report Page</h1>
            {loading ? (
                <p>Generating result...</p>
            ) : (
                isUser ? (
                  <>
                  <button onClick={downloadPDF}>Download PDF</button>
                    <div className="report-content" dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
                    </>
                ) : (
                    <div>{result}</div>
                )
            )}
        </div>
    );
}

export default Report;


