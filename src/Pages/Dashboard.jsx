import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import { IoMenuSharp } from "react-icons/io5";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lottie from 'lottie-react';
import crown from '../assets/animations/crown.json';
import { useLocation, useNavigation } from 'react-router-dom';
import { Bar, Line, Pie, Doughnut, Bubble, PolarArea, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, PointElement, ArcElement, CategoryScale, LinearScale, Filler } from 'chart.js';
import DownloadButton from '../Components/DownloadButton';
import ReButton from '../Components/ReButton';
import DashboardModal from '../Components/Modal/DashoardModal';
import noData from "../assets/animations/nodata.json"
import { jsPDF } from 'jspdf';

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
  const [noReportData, setNoReportData] = useState(false);
  const [paid, setPaid] = useState(false)


  // modal related states

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalButton, setModalButton] = useState("")

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
      setNoReportData(true)

    } else if (reportData && reportData.response) {
      data = reportData.response;
      const plan = reportData.plan
      console.log("paid value checking :", plan);

      setPaid(plan)
      setNoReportData(true)
    }

    if (data) {
      parseAndSetData(data);
    } else {
      // Determine what message to display
      if (!history && !reportData) {
        setModalContent('Oops! No data available. Please generate some data.');
        setShowModal(true);
        setModalButton("Generate")
      } else if (!reportData && history) {
        setModalContent('If you not generated any report, Generate any report');
        setShowModal(true);
        setModalButton("Okay")
      }
    }
  }, [history, reportData]);

  // Method to close the modal
  const closeModal = () => setShowModal(false);

  // Render the modal based on state
  const renderModal = () => {
    if (showModal) {
      return <DashboardModal content={modalContent} onClose={closeModal} modalButton={modalButton} />;
    }
    return null;
  };

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


  const downloadPDF = () => {
    const doc = new jsPDF();
    let yPosition = 10; // Initial Y position for the text
  
    // Add report headings and content to the PDF
    fixedHeadings.forEach((heading) => {
      if (reports[heading]) {
        doc.text(heading, 10, yPosition);
        yPosition += 10; // Move Y position down after the heading
        doc.text(reports[heading], 10, yPosition);
        yPosition += 20; // Move Y position down after the content
      }
    });
  
    // Optionally, add charts data as well
    Object.keys(chartData).forEach((key) => {
      const chartDetails = chartData[key];
      if (chartDetails && chartDetails.title) {
        doc.text(chartDetails.title, 10, yPosition);
        yPosition += 10; // Move Y position down after the chart title
        // You can also add more details about the chart if needed
        yPosition += 20; // Move Y position down for the next item
      }
    });
  
    doc.save('MarketResearch.pdf');
    console.log("download button clicked");
  };
  


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



  const renderHeading = () => {
    if (!noReportData) {

      return (
        <div className=' flex flex-col justify-center items-center mt-28 gap-5'>
          <Lottie animationData={noData} className=' h-64' />
          <h1 className=' text-2xl text-gray-600'>No Generated Reports here!</h1>
          <button className=' px-8 py-2 rounded-xl bg-primary text-white ' onClick={toggleSidebar}>
            check history
          </button>
        </div>
      );
      return null;
    }
  };
console.log('checking value us updated? :',paid);

  return (
    <div className="flex relative px-8 sm:px-20">

      {renderModal()}
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        user={user}
        onSelectHistory={(data) => setHistory(data)}
      />
      <div className={`flex-1  rounded-3xl transition-all duration-300 ${isOpen ? 'ml-0' : 'ml-0', !noReportData ? " h-[70vh]" : ""}`}>
        {!isOpen && (
          <div onClick={toggleSidebar} className='cursor-pointer w-8 flex justify-center '>
            <IoMenuSharp size={26} />
          </div>
        )}
        {renderHeading()}

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="16px" className='pt-4 px-2'>
            {fixedHeadings.map((heading, index) => (
              reports[heading] && reports[heading] !== "Content not available" ? (
                <div
                  key={index}
                  className={`bg-gray-50 border-2 border-gray-150 px-8 py-8 rounded-xl relative ${['Market Segmentation', 'Competitive Landscape', 'SWOT Analysis', 'Consumer Insights', 'Technological Trends', 'Regulatory Environment', 'All Graphs'].includes(heading)
                    ? ' bg-slate-200'
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
                      heading === 'Regulatory Environment') && (
                        <Lottie animationData={crown} className='h-20 w-32 transform -translate-y-24 right-0 translate-x-16 bg-transparent z-999 absolute' />
                        // <FaCrown className='h-8 w-8 transform top-4 right-6 bg-transparent z-10  ' />
                      )}
                  </div>
                  {(
                    heading === 'Market Segmentation' ||
                    heading === 'Competitive Landscape' ||
                    heading === 'SWOT Analysis' ||
                    heading === 'Consumer Insights' ||
                    heading === 'Technological Trends' ||
                    heading === 'Regulatory Environment'
                  ) && !paid? (
                    <div
                      dangerouslySetInnerHTML={{ __html: reports[heading] }}
                      className={"blur-sm"}
                    />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: reports[heading] }} />
                  )}




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


          <div className={`flex justify-center gap-10 py-12 ${!noReportData ? "hidden" : ""}`}>
            <DownloadButton  dwnldBtn={downloadPDF}/>
            <ReButton />
          </div>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Dashboard;
