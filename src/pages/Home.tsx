import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PlansSection from '../components/PlansSection';
import WhyDonHosterSection from '../components/WhyDonHosterSection';
import LocationSection from '../components/LocationSection';
import ClientsSection from '../components/ClientsSection';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <main>
      <HeroSection darkMode={darkMode} />
      <ServicesSection darkMode={darkMode} />
      <PlansSection darkMode={darkMode} />
      <WhyDonHosterSection darkMode={darkMode} />
      <LocationSection darkMode={darkMode} />
      <ClientsSection darkMode={darkMode} />
    </main>
  );
};

export default Home;