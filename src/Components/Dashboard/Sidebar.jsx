import React from 'react';

import { IoClose } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`bg-gray-100 h-screen fixed top-0 left-0 transition-all z-10 duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
      <div className='pt-4 px-6 flex justify-between items-center  w-64 cursor-pointer' onClick={toggleSidebar}>
        {/* <img src={logo} alt="Logo" className={`h-12 ${!isOpen && 'block'}`} /> */}
        {/* <div className={`${isOpen && 'hidden'}`}>

        <IoMenuSharp size={26} />
        </div> */}
        <button className='focus:outline-none' onClick={toggleSidebar}>
          {isOpen ? <IoClose size={26}/> : "" }
        </button>
      </div>

      <div className='flex-1 overflow-y-auto mt-4 px-6'>
        
        <div className='flex flex-col gap-0'>
          <div className='h-full w-full py-4'>
            <h1 className={`font-semibold text-gray-700 text-sm ${!isOpen && 'hidden'}`}>Today</h1>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            
          </div>
          <div className='h-full w-full py-4'>
            <h1 className={`font-semibold text-gray-700 text-sm ${!isOpen && 'hidden'}`}>Yesterday</h1>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
            <div className=' pl-4 hover:bg-gray-200 rounded-lg py-1 cursor-pointer'>
            <h1 className={`font-bold text-lg ${!isOpen && 'hidden'}`}>First search history</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-evenly px-2 pb-4  gap-2 fixed z-10 bg-red-100 py-4 bottom-0 w-64'>
        <div className={`${!isOpen && 'hidden'}`}>
          {/* <img src={avatar} alt="Avatar" className={`h-12 rounded-full ${!isOpen && 'hidden'}`} /> */}
          <h1>22/2//2024</h1>
        </div>
        <div className={`${!isOpen && 'hidden'}`}>
          <h1 className='font-semibold'>©Market Insights</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
