import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import Modal from 'react-modal';
import LoginModal from './Modal/LoginModal';
import logo from '../assets/Logo/Hor-Logo.png';


const Pricing = ({ user }) => {

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenDetails, setModalOpenDetails] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState();
  const [orderError, setOrderError] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
    }
  }, [user]);

  // Intersection Observer hooks
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: starterRef, inView: starterInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: essentialRef, inView: essentialInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: monthlyRef, inView: monthlyInView } = useInView({ triggerOnce: true, threshold: 0.1 });



  
    // Open modal for user details
    const openUserDetails = (selectedAmount) => {
      if (!user) {
        // window.alert('Please log in to proceed with the payment.');
        setModalOpen(true);
        return;
      } 
      setAmount(selectedAmount);
      setModalOpenDetails(true);
    };


  // Close all modals
  const closeModal = () => {
    setModalOpen(false);
    setModalOpenDetails(false);
  };

  const createOrder = async (amount, currency) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await axios.post(`${apiUrl}order`, { amount, currency});
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    }
  };


const validateInput = (phone, email) => {
  const phoneRegex = /^[6-9]\d{9}$/;  // Adjust regex as per your requirements
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return phoneRegex.test(phone) && emailRegex.test(email);
};

  const handlePayment = async (phone, email, name) => {

console.log('handlePayment :',email, name, phone);

    const order = await createOrder(amount);
    console.log('order : ',order);
    
    if (!order) return;

    const userID = user.userID;
    const RAZORPAY_KEY_ID = import.meta.env.RAZORPAY_KEY_ID;
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: 'INR',
      name: 'Alforia.ai',
      description: 'Test Transaction',
      image: logo,
      order_id: order.order_id,
      handler: (response) => {
        // Handle payment success
        
        const paymentDetails = {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          userID: userID,
          amount: order.amount,
        };
        try {
          const apiUrl = import.meta.env.VITE_API_URL;
          const verifyResponse = axios.post(`${apiUrl}payment/verify`, paymentDetails);
          if (verifyResponse.data.success) {
            setPaymentSuccess(true);
            setPaymentError(false);
          } else {
            setPaymentSuccess(false);
            setPaymentError(true);
          }
        } catch (error) {
          console.error('Error verifying payment:', error);
          setPaymentSuccess(false);
          setPaymentError(true);
        }
      },
      prefill: { 
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#3399cc'
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <main id='pricing' className="max-w-6xl mx-auto pt-10  px-8 pb-32">
      <div ref={headingRef} className={`max-w-md mx-auto mb-14 text-center transition-transform transform duration-1000 ${headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl font-semibold mb-6 lg:text-5xl"><span className="text-primary">Flexible</span> Plans</h1>
        <p className="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
      </div>

      {/* aler make propr */}
      {paymentSuccess && <p>Payment was successful! Thank you for your purchase.</p>}
      {paymentError && <p>Payment verification failed. Please try again or contact support.</p>}
      {/* aler ending  */}

      <div className="flex flex-col justify-between items-center lg:flex-row gap-5">
        <div ref={starterRef} className={`w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 transition-transform transform duration-1000 ${starterInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Starter</span>
              <span><span className="font-medium text-gray-500 text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold">129 </span></span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"> <span className="text-black"> 1 credit </span> for full view access for Report.</span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto 2 </span> extra Revisions to update a report.</span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl" onClick={() => openUserDetails(129)}>
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>

        <div ref={essentialRef} className={`w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-white text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0 border-blue-700 border-2 relative transition-transform transform duration-1000 ${essentialInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className='absolute h-8 md:h-10 w-32 bg-primary top-0 right-0 rounded-tr-2xl rounded-bl-2xl flex justify-center items-center'>
            <h1 className='text-white font-medium'>Most Selected</h1>
          </div>
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
            <div className="ml-5">
              <span className="block text-3xl font-semibold text-black">Essential</span>
              <span><span className="font-medium text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold text-black">299 </span></span>
            </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
            <li className="flex mb-6">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"> <span className="text-black">5 credits </span> for full view access for Report. </span>
            </li>
            <li className="flex">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto 3 </span> extra Revisions to update a report.</span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl" onClick={() => openUserDetails(299)}>
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>

        <div ref={monthlyRef} className={`w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 transition-transform transform duration-1000 ${monthlyInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
            <div className="ml-5">
              <span className="block text-2xl font-semibold">Monthly</span>
              <span><span className="font-medium text-gray-500 text-xl align-top">₹&thinsp;</span><span className="text-3xl font-bold">799 </span></span><span className="text-gray-500 font-medium">/ month</span>
            </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3"><span className="text-black">Upto additional 20 </span> Research Reports per month.</span>
            </li>
            <li className="flex text-lg mb-2">
              <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
              <span className="ml-3">Unused report credits <span className="text-black">rolled over to the next month</span></span>
            </li>
          </ul>
          <div className="flex justify-center items-center bg-primary hover:bg-blue-700 rounded-xl py-5 px-4 text-center text-white text-xl" onClick={() => openUserDetails(799)}>
            Choose Plan
            <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" className="ml-2" />
          </div>
        </div>
      </div>
      {modalOpenDetails && (
  
  <Modal 
        isOpen={modalOpenDetails} // Updated to use modalOpen state
        onRequestClose={closeModal} // Updated to use closeModal function
        // contentLabel='User Not Logged In'
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto">
          {/* <LoginModal/> */}
          <div className="modal">
    <div className="modal-content">
      <h2>Enter Your Details</h2>
      <input 
        type="name" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={() => {
        if (validateInput(phone, email)) {
          setModalOpenDetails(false);
          handlePayment(phone, email, name);
        } else {
          alert('Please enter valid details');
        }
      }}>Proceed to Pay</button>
    </div>
  </div>
        </div>
      </Modal>
)}

      <Modal 
        isOpen={modalOpen} // Updated to use modalOpen state
        onRequestClose={closeModal} // Updated to use closeModal function
        contentLabel='User Not Logged In'
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto">
          <LoginModal/>
        </div>
      </Modal>
    </main>
  );
}

export default Pricing;
