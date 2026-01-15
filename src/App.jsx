import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import ContactFooter from './component/ContactFooter'
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import WhatsAppButton from './component/WhatsAppButton';
import BookAppointment from "./pages/BookAppointment";
import ScrollToTop from "./component/ScrollToTop";


function App() {
  const loadingBarRef = useRef(null);

  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      {/* Loader bar */}
      <LoadingBar color="#128C7E" ref={loadingBarRef} height={5} />

      <Header />
      <Routes>
        <Route path="/" element={<PageWrapper loadingBarRef={loadingBarRef}><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper loadingBarRef={loadingBarRef}><About /></PageWrapper>} />
        <Route path="/Services" element={<PageWrapper loadingBarRef={loadingBarRef}><Services /></PageWrapper>} />
        <Route path="/gallery" element={<PageWrapper loadingBarRef={loadingBarRef}><Gallery /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper loadingBarRef={loadingBarRef}><Pricing /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper loadingBarRef={loadingBarRef}><Contact /></PageWrapper>} />

        <Route path="/BookAppointment" element={<PageWrapper loadingBarRef={loadingBarRef}><BookAppointment /></PageWrapper>} />
      </Routes>

      <ContactFooter />
      <WhatsAppButton />

    </Router>
  );
}

// Wrapper to trigger loader on route change
function PageWrapper({ children, loadingBarRef }) {
  const location = useLocation();

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
      setTimeout(() => {
        loadingBarRef.current.complete();
      }, 600); // simulate loading duration
    }
  }, [location]);

  return children;
}

export default App;