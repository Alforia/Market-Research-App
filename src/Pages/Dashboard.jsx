import React, { useState } from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import Datas from '../Components/Data/Data';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Lottie from 'lottie-react';
import crown from '../assets/animations/crown.json';

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
                className={`bg-gray-200 px-8 py-8 rounded-xl relative ${data.paid ? 'col-span-full order-0  bg-red-100 ' : ''}`}
              >
                <div className=' relative'>
                  <h1 className=' text-left text-2xl mb-6 text-primary font-bold '>{data.heading}</h1>
                  {
                    data.paid && (
                      <Lottie animationData={crown} className='h-20 w-32 transform -translate-y-24 right-0 translate-x-16 bg-transparent z-10 absolute' />
                    )
                  }
                </div>
                <p className={` ${data.paid ? 'blur-sm' : ''}`}>{data.result}</p>
                {
                  data.paid && (
                    <div className=' w-56 h-24 flex justify-center items-center flex-col bg-white opacity-100 absolute inset-0 top-1/2 mx-auto rounded-3xl'>
                      <h2 className=' text-black px-6 py-2 font-semibold text-sm'>
                        Subscribe-Only-Content
                      </h2>
                      <button className=' flex justify-center items-center bg-primary text-white  px-6 py-2 rounded-xl'>
                        Subscribe
                      </button>
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
