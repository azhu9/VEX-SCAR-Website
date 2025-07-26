import React from 'react'
import Navbar from '../components/Navbar';
import SponsorsPage from '../components/SponsorsPage';
import Footer from '../components/Footer';
import Scroll from "../ScrollToTop";



const Sponsors = () => {
  return (
    <div>
        <Scroll/>
        <Navbar/>
        <SponsorsPage/>
        <Footer/>
    </div>
  )
}

export default Sponsors