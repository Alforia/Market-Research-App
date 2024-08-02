import React from 'react';

const DownloadButton = () => {
  return (
    <div className="relative w-32 h-10 bg-primary hover:cursor-pointer hover:bg-blue-700 text-white text-center rounded-lg transition-colors duration-300 group">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="group-hover:hidden">Download pdf</div>
        <span className="absolute inset-0 flex items-center justify-center top-full group-hover:top-0 transition-top duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="w-6 h-6 group-hover:block hidden">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default DownloadButton;