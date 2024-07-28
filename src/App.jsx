import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import LoginPage from './Pages/LoginPage';
// import ContactPage from './Pages/ContactPage';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TermsPage from './Pages/TermsPage';
import AboutUsPage from './Pages/AboutUsPage';
import Footer from './Components/Footer';
import RefundPolicy from './Pages/RefundPolicy';
import Payment from './Pages/Payment';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [uservalue, setUservalue] = useState()

  const getUser = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const url = `${apiUrl}/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      if (data.user) {
        setUser(data.user);
        setLoggedIn(true);
        console.log('User details:', data.user);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log("Login error:", error);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogin = () => {
    console.log("Logged in");
    getUser(); 
  };

  const handleLogout = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.get(`${apiUrl}/logout`, { withCredentials: true });
      setLoggedIn(false);
      setUser(null);
      console.log("Logged out");
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} user={user}/>
      <Routes>
      
        {/* <Route path='/contact' element={<ContactPage />} /> */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage handleLogin={handleLogin} />}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/terms' element={<TermsPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/refund-policies' element={<RefundPolicy/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
