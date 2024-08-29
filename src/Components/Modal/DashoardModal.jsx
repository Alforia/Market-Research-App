import Lottie from 'lottie-react';
import React from 'react';
import lottie from "../../assets/animations/nohistory.json"

const DashboardModal = ({ content, onClose, modalButton }) => {

    console.log("modal content : ", content);
    
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white py-6 flex justify-center items-center flex-col rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="p-6">
          {/* <h3 className="text-lg leading-6 font-medium text-gray-900">
            Alert
          </h3> */}
          <div className="mt-4">
            <Lottie animationData={lottie} className=' h-40'/>
            <h1 className="text-xl text-gray-500 text-center">
              {content}
            </h1>
          </div>
        </div>
        <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-indigo-700 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            {modalButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
