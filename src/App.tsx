import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import DedicatedServers from './pages/DedicatedServers';
import WebHosting from './pages/WebHosting';
import Footer from './components/Footer';
import VPSPage from './pages/VPSPage';
import CloudPage from './pages/CloudPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ZohoSalesIQ from './components/ZohoSalesIQ';
import DataCenterPage from './pages/DataCenterPage';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicyPage';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/dedicated-servers" element={<DedicatedServers darkMode={darkMode} />} />
          <Route path="/web-hosting" element={<WebHosting darkMode={darkMode} />} />
          <Route path="/vps" element={<VPSPage darkMode={darkMode} />} />
          <Route path="/cloud" element={<CloudPage darkMode={darkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
          <Route path="/data-center-miami" element={<DataCenterPage darkMode={darkMode} />} />
          <Route path="/terms-conditions" element={<TermsConditions darkMode={darkMode} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy darkMode={darkMode} />} />
        </Routes>
        <ZohoSalesIQ />
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;