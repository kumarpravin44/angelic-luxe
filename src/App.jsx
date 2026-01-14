import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import ContactFooter from './component/ContactFooter'
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';


function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ContactFooter></ContactFooter>
      </Router>





    </>
  )
}

export default App
