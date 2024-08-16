import Lottie from 'lottie-react';
import React, { useState, useEffect, useContext } from 'react';
import reportLottie from '../../assets/animations/reportGenareted.json'; // Corrected spelling of 'Generated'
import { useNavigate } from 'react-router-dom';
import TipsLoader from './TipsLoader';
import SurveyContext from '../Context/SurveyContext';

const Report = ({ user }) => {
    const userId = user?.userID; // Optional chaining to handle cases where user might be null or undefined

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { basicInfo, productInfo, competitorInfo, selectedValues, resetSurvey } = useContext(SurveyContext);

    // Function to submit data to the API
    const submitData = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/api/ask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    basicInfo,
                    productInfo,
                    competitorInfo,
                    selectedValues,
                    userId
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
            return null;
        }
    };

    // UseEffect to handle the data submission and navigation
    useEffect(() => {
        const handleSubmit = async () => {
            if (!userId) { // Check if userId is available
                setLoading(false);
                return;
            }

            const result = await submitData();

            if (result) {
                resetSurvey();  // Reset survey data
                navigate("/dashboard", { state: { reportData: result } });
            } else {
                setError('Failed to generate report');
            }

            setLoading(false);  // Always set loading to false after data submission
        };

        handleSubmit();  // Call the async function to handle data submission
    }, [navigate, resetSurvey, userId]); // Dependency array includes userId instead of user

    if (!userId) {
        return <div>Please log in to generate the report.</div>;
    }

    if (loading) {
        return <TipsLoader />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie animationData={reportLottie} loop={false} />
        </div>
    );
}

export default Report;
