import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Awards from '../components/Awards';
import Sponsor from '../components/Sponsor';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Navbar/> 
    <Hero/>
    <Info/>
    <Awards/>
    <Sponsor/>
    <Footer/>
    </>
  );
}

export default Home;
