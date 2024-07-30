import React, { createContext, useState } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [basicInfo, setBasicInfo] = useState({});
    const [productInfo, setProductInfo] = useState({});
    const [competitorInfo, setCompetitorInfo] = useState({});

    const resetSurvey = () => {
        setBasicInfo({});
        setProductInfo({});
        setCompetitorInfo({});
    };

    return (
        <SurveyContext.Provider value={{ basicInfo, setBasicInfo, productInfo, setProductInfo, competitorInfo, setCompetitorInfo, resetSurvey }}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyContext;
