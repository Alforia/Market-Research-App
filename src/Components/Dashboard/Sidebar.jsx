import React from 'react';

// import { IoClose } from "react-icons/io5";
// import { IoMenuSharp } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-gray-200 rounded-r-3xl flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
      <div className='flex-1 overflow-y-auto mt-4 px-6'>
        
        <div className='flex flex-col gap-0'>
          <div className='h-full w-full py-4'>
            <h1 className={`font-semibold text-gray-700 text-sm ${!isOpen && 'hidden'}`}>Today</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
          </div>
          <div className='h-full w-full py-4'>
            <h1 className={`font-semibold text-gray-700 text-sm ${!isOpen && 'hidden'}`}>Yesterday</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text- ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-evenly px-2 pb-4  gap-2 bottom-0 w-64'>
        <div className={`${!isOpen && 'hidden'}`}>
          {/* <img src={avatar} alt="Avatar" className={`h-12 rounded-full ${!isOpen && 'hidden'}`} /> */}
          <h1>22/2/2024</h1>
        </div>
        <div className={`${!isOpen && 'hidden'}`}>
          <h1 className='font-semibold'>©Market Insights</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
