import React, { useState } from 'react';
import { SurveyProvider } from '../Components/Context/SurveyContext';
import BasicInfo from '../Components/Questions/BasicInfo';
import ProductInfo from '../Components/Questions/ProductInfo';
import Competitor from '../Components/Questions/Competitor';
import Report from '../Components/Questions/Report';
import MeshGradientBackground from '../MeshGradientBackground';
import {  useNavigate } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';

const Explore = ({ user }) => {
  const [currentComponent, setCurrentComponent] = useState('basicInfo');

  const switchToComponent = (component) => {
    setCurrentComponent(component);
  }

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  }

  const steps = [
    { title: 'Basic Info' },
    { title: 'Product Info' },
    { title: 'Competitor' },
    { title: 'Report' }
  ];

  const getCurrentStep = () => {
    switch (currentComponent) {
      case 'basicInfo':
        return 0;
      case 'productInfo':
        return 1;
      case 'competitor':
        return 2;
      case 'report':
        return 3;
      default:
        return 0;
    }
  }

  return (
    <SurveyProvider>
      {/* <Header/> */}
      {/* <div>
        <IoArrowBackCircleSharp className='absolute md:ml-20 lg:ml-28 mt-11 ml-4 sm:ml-10 text-primary rounded-full shadow-md cursor-pointer hover:text-blue-700' size={38} onClick={handleHome} />
      </div> */}
      <div className='w-full flex flex-col items-center  py-12'>
        <MeshGradientBackground />
        
        <Stepper 
          steps={steps} 
          activeStep={getCurrentStep()} 
          onSelect={step => setCurrentComponent(steps[step].title.toLowerCase().replace(' ', ''))}
          activeColor="#2945FF"
          completeColor="#27ae60"
          defaultBarColor="#bdc3c7"
        />

        <div className='w-full mt-10'>
          {currentComponent === 'basicInfo' && (
            <BasicInfo switchToProductinfo={() => switchToComponent('productInfo')} />
          )}
          {currentComponent === 'productInfo' && (
            <ProductInfo switchToBasic={() => switchToComponent('basicInfo')} switchToCompetitor={() => switchToComponent('competitor')} />
          )}
          {currentComponent === 'competitor' && (
            <Competitor switchToProductinfo={() => switchToComponent('productInfo')} switchToReport={() => switchToComponent('report')} />
          )}
          {currentComponent === 'report' && (
            <Report user={user} />
          )}
        </div>
      </div>
    </SurveyProvider>
  );
}

export default Explore;
