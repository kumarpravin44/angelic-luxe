import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import ContactFooter from './component/ContactFooter'
import About from './pages/About';


function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <ContactFooter></ContactFooter>
      </Router>





    </>
  )
}

export default App
