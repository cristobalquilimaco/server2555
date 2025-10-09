import React, { useState, useEffect } from 'react';
import {
  Server,
  Shield,
  Zap,
  Globe,
  MapPin,
  CheckCircle,
  ArrowRight,
  Database,
  Network,
  ChevronLeft,
  ChevronRight,
  Leaf
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Importa imágenes desde carpeta pública o src/assets
import mapUsa from '../../src/images/datacenter/map-dark.svg';

// Ejemplo: importa los iconos de partners desde utils/iconspartners.ts
import {
  partners
} from '../utils/iconsPartners';

interface DataCenterPageProps {
  darkMode: boolean;
}

const DataCenterPage: React.FC<DataCenterPageProps> = ({ darkMode }) => {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [currentDataCenterIndex, setCurrentDataCenterIndex] = useState(0);

  const dataCenterImages = [
    'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
    'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    'https://images.pexels.com/photos/6953876/pexels-photo-6953876.jpeg',
    'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg',
    'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg',
    'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg'
  ];

  const features = [
    { icon: Server, title: 'Carrier-Neutral', description: 'Tier1 available data center' },
    { icon: Network, title: '320Gbps+ Network', description: 'Scalable network capacity' },
    { icon: Zap, title: '2N+1 Infrastructure', description: 'Power & Cooling redundancy' },
    { icon: Shield, title: 'Hurricane Protected', description: 'Category 5 rated facility' },
    { icon: Database, title: 'Multiple Options', description: '1/4-1/2-1/1 secured racks' },
    { icon: Globe, title: 'Global Connectivity', description: 'Latin America, US & Europe' }
  ];

  const services = [
    'Dedicated Servers',
    'Colocation',
    'Cloud Hosting / Virtual Servers',
    'Multi 100Mbit/1Gbit/10Gbit connectivity',
    'Metro Ethernet services (MPLS)',
    'Several glass fiber connections'
  ];

  const networkLocations = [
    { location: 'UK, London', code: 'DC1' },
    { location: 'España', code: 'Network' },
    { location: 'NL, Amsterdam', code: 'DC-NL-1' },
    { location: 'US, Miami, FL', code: 'DC-MIA-1', highlight: true },
    { location: 'Canadá', code: 'Network' },
    { location: 'Perú', code: 'Network' },
    { location: 'México', code: 'Network' },
    { location: 'Россия', code: 'Network' },
    { location: '新加坡', code: 'DC1' },
    { location: 'Sénégal', code: 'Network' },
    { location: 'Morocco', code: 'Network' },
    { location: 'Chile', code: 'Network' },
    { location: 'Australia', code: 'DC1' }
  ];

  useEffect(() => {
    const partnerInterval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
    }, 3500);
    return () => clearInterval(partnerInterval);
  }, [partners.length]);

  useEffect(() => {
    const dcInterval = setInterval(() => {
      setCurrentDataCenterIndex((prev) => (prev + 1) % dataCenterImages.length);
    }, 4500);
    return () => clearInterval(dcInterval);
  }, [dataCenterImages.length]);

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const nextDataCenter = () => {
    setCurrentDataCenterIndex((prev) => (prev + 1) % dataCenterImages.length);
  };

  const prevDataCenter = () => {
    setCurrentDataCenterIndex((prev) => (prev - 1 + dataCenterImages.length) % dataCenterImages.length);
  };

  return (
    <>
      <Helmet>
        {/* Basic and SEO Meta tags */}
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>Miami Data Centers for Global Connectivity | DonHoster</title>
        <meta
          name="description"
          content="Miami Data Centers for Global Connectivity. Tier 1 infrastructure, 100Gbps+ network, 2N+1 redundancy. Dedicated servers, colocation & cloud hosting 24/7."
        />
        <meta
          name="keywords"
          content="miami data center, data center miami, miami hosting, dedicated servers miami, colocation miami, cloud hosting, global connectivity, tier 1 data center, redundant infrastructure, donhoster, netcrohosting, hurricane protected data center"
        />
        <meta name="author" content="DonHoster" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="canonical" href="https://www.donhoster.com/data-centers" />

        <meta name="language" content="English" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami, Florida" />
        <meta name="geo.position" content="25.7617;-80.1918" />
        <meta name="ICBM" content="25.7617, -80.1918" />

        <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/data-centers" />
        <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/data-centers" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Miami Data Centers for Global Connectivity" />
        <meta
          property="og:description"
          content="Miami Data Centers for Global Connectivity. Tier 1 infrastructure, 100Gbps+ network, 2N+1 redundancy. Dedicated servers, colocation & cloud hosting 24/7."
        />
        <meta property="og:image" content="https://www.donhoster.com/images/og-datacenter.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DonHoster Miami Data Centers - World-Class Infrastructure" />
        <meta property="og:url" content="https://www.donhoster.com/data-centers" />
        <meta property="og:site_name" content="DonHoster" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@donhoster" />
        <meta name="twitter:creator" content="@donhoster" />
        <meta name="twitter:title" content="Miami Data Centers for Global Connectivity" />
        <meta
          name="twitter:description"
          content="Miami Data Centers for Global Connectivity. Tier 1 infrastructure, 100Gbps+ network, 2N+1 redundancy. Dedicated servers, colocation & cloud hosting 24/7."
        />
        <meta name="twitter:image" content="https://www.donhoster.com/images/og-datacenter.jpg" />
        <meta name="twitter:image:alt" content="DonHoster Miami Data Centers" />
        {/* Scripts and other meta tags... (unchanged, keep as is) */}
      </Helmet>

      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-100"></div>
          <div
            className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg')] bg-cover bg-center opacity-20"
          ></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-purple-400">Miami Data Centers</span> for Global Connectivity
            </h1>

            <p className="text-xl lg:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
              Always available, also during disasters.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-purple-400" />
                <span>Maximum Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-400" />
                <span>Strategic Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-purple-400" />
                <span>Environmental Respect</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <span>Explore Our Facilities</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Miami Data Center Info */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <h2
                    className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Miami Florida
                  </h2>
                </div>

                <p
                  className={`text-lg mb-6 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Our Miami data centers are at the heart of one of the world's largest Internet exchanges interconnecting
                  Latin America, the Northeast US and Europe. Provides exceptional hosting solutions offering a high level
                  of infrastructure and connectivity from Miami with innovative and automated technology for small and large
                  businesses offering cloud-based services and guaranteed quality and availability of hosting services and
                  best available hardware distributed in multiple centers of data.
                </p>

                <div
                  className={`p-6 rounded-xl mb-6 ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg`}
                >
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Facility Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Surface Area
                      </p>
                      <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        21,000 m²
                      </p>
                    </div>
                    <div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Network Capacity
                      </p>
                      <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        100Gbps+
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Location
                      </p>
                      <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        36 NE 2nd St #400, Miami, FL 33132
                      </p>
                    </div>
                  </div>
                </div>

                <p className={`text-lg transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  NetcroHosting is committed to meeting the demand of IT. And you offer fast and secure connections
                  with 24/7 availability in downtown Miami, South Florida.
                </p>
              </div>

              <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <img
                  src={mapUsa}
                  alt="Global Network Map"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                World-Class Infrastructure
              </h2>
              <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Learn more about our Data Centers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-xl'
                  }`}
                >
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Available Services
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-md`}
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className={`transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                DATA CENTERS & NETWORK
              </h2>
              <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Backbone access in more than 3 data centers around the world
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {networkLocations.map((location, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    location.highlight
                      ? 'bg-purple-600 text-white shadow-xl scale-105'
                      : darkMode
                      ? 'bg-gray-800 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <p className={`font-semibold mb-1 ${location.highlight ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {location.location}
                  </p>
                  <p className={`text-sm ${location.highlight ? 'text-purple-200' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {location.code}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Miami Data Center Global 100 Gbit Network
              </p>
            </div>
          </div>
        </section>

        {/* Featured Partners Carousel */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Featured Partners
              </h2>
            </div>

            <div className="relative max-w-7xl mx-auto overflow-hidden">
              <div className="relative">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPartnerIndex * (100 / 4)}%)`
                  }}
                >
                  {partners.concat(partners.slice(0, 3)).map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-3 partner-slide"
                    >
                      <div
                        className={`p-8 lg:p-12 rounded-2xl shadow-xl transition-all duration-500 ${
                          darkMode ? 'bg-gray-700' : 'bg-white'
                        } ${
                          index % partners.length === currentPartnerIndex % partners.length
                            ? 'scale-95 shadow-2xl border-2 border-purple-500'
                            : 'scale-90 opacity-70'
                        }`}
                      >
                        <div className="flex items-center justify-center h-20 lg:h-20">
                          <img
                            src={partner.icon}
                            alt={partner.name}
                            style={{ objectFit: 'contain', width: '100%', height: '80px' }}
                            className="transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevPartner}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
                  darkMode ? 'bg-gray-600 hover:bg-purple-600' : 'bg-white hover:bg-purple-100'
                }`}
              >
                <ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              </button>

              <button
                onClick={nextPartner}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all hover:scale-110 ${
                  darkMode ? 'bg-gray-600 hover:bg-purple-600' : 'bg-white hover:bg-purple-100'
                }`}
              >
                <ChevronRight className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              </button>

              <div className="flex justify-center mt-8 space-x-2">
                {partners.slice(0, 4).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartnerIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentPartnerIndex % 4 ? 'bg-purple-600 w-8' : darkMode ? 'bg-gray-600 w-2' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <style
              dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                  .partner-slide {
                    width: 50% !important;
                    min-width: 50% !important;
                  }
                }
                @media (min-width: 769px) {
                  .partner-slide {
                    width: 25% !important;
                    min-width: 25% !important;
                  }
                }
              `
              }}
            />
          </div>
        </section>

        {/* Data Center Images Carousel */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Inside Our Data Centers
              </h2>
            </div>

            <div className="relative max-w-7xl mx-auto overflow-hidden">
              <div className="relative">
                <div
                  className="flex gap-4 transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentDataCenterIndex * (100 / 3 + 1.33)}%)`
                  }}
                >
                  {dataCenterImages.concat(dataCenterImages.slice(0, 3)).map((image, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 data-center-slide"
                    >
                      <div
                        className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                          index % dataCenterImages.length === currentDataCenterIndex % dataCenterImages.length
                            ? 'scale-90 ring-4 ring-purple-500'
                            : 'opacity-80'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Data Center ${index + 1}`}
                          className="w-full h-48 lg:h-96 object-cover transition-transform duration-700 hover:scale-100"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevDataCenter}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-2xl transition-all hover:scale-110 backdrop-blur-sm ${
                  darkMode ? 'bg-gray-800/90 hover:bg-purple-600/90' : 'bg-white/90 hover:bg-purple-100/90'
                }`}
              >
                <ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              </button>

              <button
                onClick={nextDataCenter}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full shadow-2xl transition-all hover:scale-110 backdrop-blur-sm ${
                  darkMode ? 'bg-gray-800/90 hover:bg-purple-600/90' : 'bg-white/90 hover:bg-purple-100/90'
                }`}
              >
                <ChevronRight className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              </button>

              <div className="flex justify-center mt-8 space-x-2">
                {dataCenterImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDataCenterIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentDataCenterIndex ? 'bg-purple-600 w-8' : darkMode ? 'bg-gray-600 w-2' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <style
              dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                  .data-center-slide {
                    width: calc(100% - 12px) !important;
                    min-width: calc(100% - 12px) !important;
                  }
                }
                @media (min-width: 769px) {
                  .data-center-slide {
                    width: calc(33.333% - 12px) !important;
                    min-width: calc(33.333% - 12px) !important;
                  }
                }
              `
              }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience World-Class Hosting?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses trusting our Miami data centers for their critical infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DataCenterPage;
