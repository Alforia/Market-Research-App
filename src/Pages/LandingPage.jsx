import React from 'react'
import Count from '../Components/Count'
import Faq from '../Components/Faq'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Hero from '../Components/Hero'
import Pricing from '../Components/Pricing'
import Steps from '../Components/Steps'
import ContactUs from '../Components/ContactUs'
import Feedback from '../Components/Feedback'
import FooterHead from '../Components/FooterHead'

const LandingPage = ({ user }) => {
  return (
    <div>
      <Hero/>
      <Count/>
      <Features/>
      <Steps/>
      <GetStarted/>
      <Pricing user={user}/>
      <Faq/>
      {/* <Feedback/> */}
      <ContactUs/>
      <FooterHead/>
    </div>
  )
}

export default LandingPage
