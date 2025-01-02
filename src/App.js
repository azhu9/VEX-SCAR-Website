import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Awards from './components/Awards';
import History from './components/History';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Info/>
    <History/>
    <Awards/>
    <Sponsor/>
    <Footer/>
    </>
  );
}

export default App;
