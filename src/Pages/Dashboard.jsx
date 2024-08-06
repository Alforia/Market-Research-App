import React, { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import Datas from '../Components/Data/Data';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex ">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 bg-gray-100 rounded-3xl p-4 transition-all duration-300 ${isOpen ? 'ml-4' : 'mx-4'}`}>
        {isOpen ?
          <div onClick={toggleSidebar}>
            <IoClose size={26} />
          </div> :
          <div onClick={toggleSidebar}>
            <IoMenuSharp size={26} />
          </div>
        }
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="16px" className='pt-4 px-2'>
            {Datas.map((data, index) => (
              <div
                key={index}
                className={`bg-gray-200 px-8 py-8 rounded-xl relative ${data.col ? 'col-span-full order-0  bg-red-100 ' : ''}`}
              >
                <div className=' relative '>
                  <h1 className=' text-center text-2xl mb-6 text-primary font-bold '>{data.heading}</h1>
                </div>
                <p className={` ${data.col ? 'blur-sm' : ''}`}>{data.result}</p>
                {
                  data.col && (
                    <div className=' w-48 h-24 bg-black opacity-60 absolute inset-0 top-1/2 mx-auto rounded-3xl'>
                      <h2 className=' text-white px-6 py-6 font-semibold'>
                        Subscribe to see the results
                      </h2>
                    </div>
                  )
                }

              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Dashboard;
