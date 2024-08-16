import React, { createContext, useState } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [basicInfo, setBasicInfo] = useState({});
    const [productInfo, setProductInfo] = useState({});
    const [competitorInfo, setCompetitorInfo] = useState({});
    const [selectedValues, setSelectedValues] = useState([]);

    const toggleSelection = (value) => {
        setSelectedValues(prevSelectedValues =>
            prevSelectedValues.includes(value)
                ? prevSelectedValues.filter(v => v !== value)
                : [...prevSelectedValues, value]
        );
    };

    const resetSurvey = () => {
        setBasicInfo({});
        setProductInfo({});
        setCompetitorInfo({});
        setSelectedValues([]);
    };

    return (
        <SurveyContext.Provider value={{ basicInfo, setBasicInfo, productInfo, setProductInfo, competitorInfo, setCompetitorInfo, selectedValues, toggleSelection, resetSurvey }}>
            {children}
        </SurveyContext.Provider>
    );
};

export default SurveyContext;
