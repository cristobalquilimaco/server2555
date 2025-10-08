import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PlansSection from '../components/PlansSection';
import WhyDonHosterSection from '../components/WhyDonHosterSection';
import LocationSection from '../components/LocationSection';
import FAQHome from '../components/homePage/FAQHome';
import CallToAction from '../components/contactPage/CallToAction';
// import ClientsSection from '../components/ClientsSection';

interface HomeProps {
  darkMode: boolean;
}



const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth' });
  }
  return (
    <main>
      <HeroSection darkMode={darkMode} />
      <ServicesSection darkMode={darkMode} />
      <PlansSection darkMode={darkMode} />
      <WhyDonHosterSection darkMode={darkMode} />
      <LocationSection darkMode={darkMode} />
      {/* <ClientsSection darkMode={darkMode} /> */}
      <FAQHome darkMode={darkMode}/>
      <CallToAction onContactClick={scrollToContact}/>
    </main>
  );
};

export default Home;