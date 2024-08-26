import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import { IoMenuSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lottie from 'lottie-react';
import crown from '../assets/animations/crown.json';
import { useLocation } from 'react-router-dom';
import { Bar, Line, Pie, Doughnut, Bubble, PolarArea, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, PointElement, ArcElement, CategoryScale, LinearScale, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Filler
);

const Dashboard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reports, setReports] = useState({});
  const [chartData, setChartData] = useState({});
  const [history, setHistory] = useState({});

  console.log('user values in dashboard', user);


  const location = useLocation();
  const { reportData } = location.state || {}; // Retrieve data from location state

  console.log('====================================');
  console.log('history in dashboard :', history);
  console.log('====================================');


  const parseAndSetData = (data) => {
    try {
      // Remove markdown code block markers
      const jsonString = data.replace(/```json\n|\n```/g, '');

      // Log the cleaned JSON string for debugging
      console.log('Cleaned JSON String:', jsonString);

      // Parse the JSON
      const parsedData = JSON.parse(jsonString);

      if (!parsedData.Report || !parsedData.Charts) {
        throw new Error('Invalid JSON structure: Missing "Report" or "Charts"');
      }

      // Extract and set state variables
      const marketOverview = parsedData.Report || parsedData.report;
      const chartsData = parsedData.Charts || parsedData.charts;

      // Update state
      setReports(marketOverview);
      setChartData(chartsData);

      console.log('Parsed Data:', parsedData);
    } catch (error) {
      console.error('Error parsing data:', error);
      // Additional logging for the problematic JSON string
      console.error('Problematic JSON String:', data);
    }
  };


  useEffect(() => {
    let data;

    if (history && history.response) {
      data = history.response;
    } else if (reportData && reportData.response) {
      data = reportData.response;
    }
    if (data) {
      parseAndSetData(data, setReports, setChartData);
    }

  }, [history, reportData, setReports, setChartData]);

  const fixedHeadings = [
    'Summary',
    'Industry Overview',
    'Market Dynamics',
    'Competitive Landscape',
    'SWOT Analysis',
    'Market Segmentation',
    'Consumer Insights',
    'Technological Trends',
    'Regulatory Environment',
    'Strategic Recommendations',
    'Appendix'
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Render charts based on type and data
  const renderCharts = (chartDetails) => {
    if (!chartDetails || !chartDetails.data) return null;

    const { type, title, labels, data, label } = chartDetails;

    // Common chart options
    const commonOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title || 'Chart',
        },
      },
    };

    // Validation functions
    const isValidLabelsAndData = (labels, data) => Array.isArray(labels) && Array.isArray(data) && labels.length === data.length;

    // Render chart based on type
    switch (type) {
      case 'bar':
        if (!isValidLabelsAndData(labels, data)) {
          console.error('Invalid data for Bar chart:', chartDetails);
          return null;
        }
        return (
          <Bar
            data={{
              labels,
              datasets: [{
                label: label || title,
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              }],
            }}
            options={commonOptions}
          />
        );

      case 'line':
      case 'area': // Area charts use the Line component with `fill: true`
        if (!isValidLabelsAndData(labels, data)) {
          console.error('Invalid data for Line/Area chart:', chartDetails);
          return null;
        }
        return (
          <Line
            data={{
              labels,
              datasets: [{
                label: label || title,
                data,
                fill: type === 'area',
                backgroundColor: type === 'area' ? 'rgba(75, 192, 192, 0.2)' : 'transparent',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
              }],
            }}
            options={commonOptions}
          />
        );

      case 'pie':
        if (!isValidLabelsAndData(labels, data)) {
          console.error('Invalid data for Pie chart:', chartDetails);
          return null;
        }
        return (
          <Pie
            data={{
              labels,
              datasets: [{
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              }],
            }}
            options={commonOptions}
          />
        );

      case 'doughnut':
        if (!isValidLabelsAndData(labels, data)) {
          console.error('Invalid data for Doughnut chart:', chartDetails);
          return null;
        }
        return (
          <Doughnut
            data={{
              labels,
              datasets: [{
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              }],
            }}
            options={commonOptions}
          />
        );

      case 'bubble':
        if (!Array.isArray(data) || !data.every(d => d.x !== undefined && d.y !== undefined && d.r !== undefined)) {
          console.error('Invalid data for Bubble chart:', chartDetails);
          return null;
        }
        return (
          <Bubble
            data={{
              datasets: [{
                label: label || 'Bubble Chart',
                data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
              }],
            }}
            options={commonOptions}
          />
        );

      case 'polarArea':
        if (!isValidLabelsAndData(labels, data)) {
          console.error('Invalid data for PolarArea chart:', chartDetails);
          return null;
        }
        return (
          <PolarArea
            data={{
              labels,
              datasets: [{
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
              }],
            }}
            options={commonOptions}
          />
        );

      default:
        console.error('Unknown chart type:', type);
        return null;
    }
  };


  return (
    <div className="flex relative px-8 sm:px-20">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        user={user}
        onSelectHistory={(data) => setHistory(data)}
      />
      <div className={`flex-1 rounded-3xl transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0'}`}>
        {!isOpen && (
          <div onClick={toggleSidebar} className='cursor-pointer w-8 flex justify-center '>
            <IoMenuSharp size={26} />
          </div>
        )}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="16px" className='pt-4 px-2'>
            {fixedHeadings.map((heading, index) => (
              reports[heading] && reports[heading] !== "Content not available" ? (
                <div
                  key={index}
                  className={`bg-gray-100 px-8 py-8 rounded-xl relative ${
                    ['Market Segmentation', 'Competitive Landscape', 'SWOT Analysis', 'Consumer Insights', 'Technological Trends', 'Regulatory Environment', 'All Graphs'].includes(heading) 
                      ? 'bg-red-100' 
                      : ''
                  }`}
                >
                  <div className='relative'>
                    <h1 className='text-left text-2xl mb-6 text-primary font-bold'>{heading}</h1>
                  {(heading === 'Market Segmentation' ||
                    heading === 'Competitive Landscape' ||
                    heading === 'SWOT Analysis' ||
                    heading === 'Consumer Insights' ||
                    heading === 'Technological Trends' ||
                    heading === 'Regulatory Environment' ||
                    heading === 'All Graphs') && (
                      <Lottie animationData={crown} className='h-20 w-32 transform -translate-y-24 right-0 translate-x-16 bg-transparent z-10 absolute' />
                      // <FaCrown className='h-8 w-8 transform top-4 right-6 bg-transparent z-10  ' />
                    )}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: reports[heading] }}
                  />
                </div>
              ) : null
            ))}
            {Object.keys(chartData).map((key, index) => {
              const chartDetails = chartData[key];
              return (
                <div
                  key={index}
                  className='bg-gray-100 px-8 py-8 rounded-xl relative'
                >
                  <h1 className='text-left text-2xl mb-6 text-primary font-bold'>{chartDetails.title}</h1>
                  {renderCharts(chartDetails)}
                </div>
              );
            })}

          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Dashboard;
