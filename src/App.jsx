import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';
import axios from 'axios';
import TermsPage from './Pages/TermsPage';
import AboutUsPage from './Pages/AboutUsPage';
import Footer from './Components/Footer';
import RefundPolicy from './Pages/RefundPolicy';
import Payment from './Pages/Payment';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Modal from 'react-modal';
import ProfileModal from './Components/Modal/ProfileModal';
import Test from './Pages/Test';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Components/ErrorPage';
import { LineWave } from 'react-loader-spinner'

import './App.css'

Modal.setAppElement('#root');

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.token;

  console.log('token getting from url :', value);

  if (value) {
    localStorage.setItem('token', value);
    const apiUrl = import.meta.env.VITE_CLIENT_URL;
    window.location.href = apiUrl;
  }

  const storedToken = localStorage.getItem('token');
  if (storedToken && !user) {

  }
  console.log('Token from local storage:', storedToken);



  const getUser = async () => {
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const url = `${apiUrl}/login/success`;
      const headers = {
        Authorization: `Bearer ${storedToken}`,
      };
      const { data } = await axios.get(url, { withCredentials: true, headers: headers });

      if (data.user) {
        console.log("User details:", data.user);
        setUser(data.user);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log("Login error:", error);
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (storedToken && !user) {

      getUser();
    }
  }, [storedToken, user]);

  const handleLogin = () => {
    console.log("Logged in");
  };

  const handleLogout = async () => {
    setLoggedIn(false);
    setUser(null);
  };

  const ToModalOpen = () => {
    setModalOpen(true);
  };

  const ToModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <Navbar
        loggedIn={loggedIn}
        handleLogout={handleLogout}
        user={user}
        ToModalOpen={ToModalOpen}
      />
      {loading ? (

        //  loader css file in App.css name is ".loader" and make proper

        <div className=' flex items-center justify-center h-[80vh]'>

          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#2945FF"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<LandingPage user={user} />} />
            <Route path='/login' element={
              <ProtectedRoute loggedIn={loggedIn}>
                <LoginPage handleLogin={handleLogin} getUser={getUser} />
              </ProtectedRoute>
            } />
            <Route path='/explore' element={<Explore user={user} />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/refund-policies' element={<RefundPolicy />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/test' element={<Test />} />
            <Route path='/dashboard' element={<Dashboard user={user} />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

          <Footer />

        </>
      )}

      <Modal
        isOpen={modalOpen}
        onRequestClose={ToModalClose}
        contentLabel="Profile"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="bg-gray-200 rounded-2xl p-0 w-full max-w-md mx-auto">
          <ProfileModal
            ToModalClose={ToModalClose}
            handleLogout={handleLogout}
            user={user}
          />
        </div>
      </Modal>
      <ToastContainer />
    </Router>
  );
}

export default App;
