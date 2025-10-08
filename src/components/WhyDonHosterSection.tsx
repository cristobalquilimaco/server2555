import React from 'react';
import { Shield, Settings, Headphones, Globe, ArrowUpRight, ArrowDownRight, ArrowUpLeft, ArrowDownLeft } from 'lucide-react';
import client1 from '../images/client_1.png'
import client2 from '../images/client_2.png'
import client3 from '../images/client_3.png'
import client4 from '../images/client_4.png'
import client5 from '../images/client_5.png'
interface WhyDonHosterSectionProps {
  darkMode: boolean;
}

const WhyDonHosterSection: React.FC<WhyDonHosterSectionProps> = ({ darkMode }) => {
  const features = [
    {
      icon: Globe,
      title: 'Infrastructure That Matters',
      description: 'Our Miami data centers ensure fast, secure, and low-latency connectivity, keeping your business online without interruptions.',
      position: 'top-left',
      arrow: ArrowUpLeft
    },
    {
      icon: Shield,
      title: 'Security You Can Trust',
      description: 'Protect your business with advanced security systems, proactive monitoring, and expert support to prevent threats.',
      position: 'top-right',
      arrow: ArrowUpRight
    },
    {
      icon: Settings,
      title: 'Automation On Your Terms',
      description: 'Stay in control of your hosting. Automate what you need while keeping full flexibility over your servers and services.',
      position: 'bottom-left',
      arrow: ArrowDownLeft
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Our world-class team is available 24/7, ensuring your business stays operational with fast and reliable assistance.',
      position: 'bottom-right',
      arrow: ArrowDownRight
    }
  ];

  const clients = [
    { name: 'VMware', logo: client1, alt: 'VMware - Hybrid Cloud Powered' },
    { name: 'EMC', logo: client2, alt: 'EMC Corporation' },
    { name: 'Cisco', logo: client3, alt: 'Cisco Systems' },
    { name: 'New Relic', logo: client4, alt: 'New Relic' },
    { name: 'Microsoft', logo: client5, alt: 'Microsoft' }
  ];

  return (
    <section className={`py-16 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-purple-600">¿Why</span> DonHoster?
          </h2>
        </div>

        {/* Central Hub Design */}
        <div className=" relative max-w-6xl mx-auto mb-16">
          {/* Connection Lines */}
          <div className=" absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Top Left Line */}
            <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rotate-45 -translate-x-24 -translate-y-32 animate-pulse-slow"></div>
            
            {/* Top Right Line */}
            <div className="absolute w-32 h-0.5 bg-gradient-to-l from-purple-500 to-transparent -rotate-45 translate-x-24 -translate-y-32 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Bottom Left Line */}
            <div className="absolute w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent -rotate-45 -translate-x-24 translate-y-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* Bottom Right Line */}
            <div className="absolute w-32 h-0.5 bg-gradient-to-l from-purple-500 to-transparent rotate-45 translate-x-24 translate-y-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Feature Cards positioned around the center */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-96 gap-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isLeft = feature.position.includes('left');
              const isTop = feature.position.includes('top');
              
              return (
                <div
                  key={index}
                  className={`group relative flex ${
                    isLeft ? 'justify-start' : 'justify-end'
                  } ${
                    isTop ? 'items-end' : 'items-start'
                  }`}
                >
                  {/* Feature Card */}
                  <div className={`max-w-sm p-6 rounded-2xl transition-all duration-700 hover:scale-105 transform-gpu ${
                    darkMode 
                      ? 'bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 border border-gray-700/50 hover:border-purple-500/80 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-white/90 via-gray-50/95 to-white/90 border border-gray-200/50 hover:border-purple-400/80 backdrop-blur-sm'
                  } hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden`}>
                    
                    {/* Animated Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -inset-x-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line"></div>
                    </div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-500"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-500 delay-100"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-500 delay-200"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/0 group-hover:border-purple-500/60 transition-all duration-500 delay-300"></div>
                    
                    {/* Icon with circular background */}
                    <div className={` inline-flex p-4 rounded-full mb-4 transition-all duration-300 ${
                      darkMode ? 'bg-purple-900/50 group-hover:bg-purple-800/70' : 'bg-purple-100 group-hover:bg-purple-200'
                    } group-hover:scale-110 relative z-10 border-2 ${
                      darkMode ? 'border-purple-600/50' : 'border-purple-300/50'
                    }`}>
                      <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                        darkMode ? 'text-purple-400 group-hover:text-purple-300' : 'text-purple-600 group-hover:text-purple-700'
                      }`} />
                      
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-1 transition-all duration-500 relative z-10 ${
                      darkMode ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed transition-all duration-500 relative z-10 ${
                      darkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {/* Progress Bar Effect */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-0 group-hover:w-full transition-all duration-700 delay-200"></div>
                  </div>

                  {/* Connection Dot */}
                  <div  className={`hidden lg:block  absolute z-10 ${
                    isTop && isLeft ? 'bottom-0 right-0 translate-x-8 translate-y-30' :
                    isTop && !isLeft ? 'bottom-0 left-0 -translate-x-8 translate-y-30' :
                    !isTop && isLeft ? 'top-0 right-0 translate-x-8 -translate-y-0' :
                    'top-0 left-0 -translate-x-8 -translate-y-0'
                  }`}>
                    <div className={`w-4 h-4 rounded-full ${
                      darkMode ? 'bg-purple-400' : 'bg-purple-500'
                    } animate-ping opacity-75`}></div>
                    <div className={`absolute inset-0.5 w-3 h-3 rounded-full ${
                      darkMode ? 'bg-purple-400' : 'bg-purple-500'
                    } animate-pulse`}></div>
                  </div>
                </div>
              );
            })}
          </div>

{/* Central Server Icon - Positioned absolutely in the center */}
<div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[90%] z-30">
  <div className={`relative p-8 rounded-full transition-all duration-300 ${
    darkMode 
      ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 border-4 border-purple-600' 
      : 'bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-4 border-purple-300'
  } shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 transform hover:scale-110 transition-all duration-500`}>
    <div className="relative">
      {/* Custom Server SVG */}
      <div className="w-20 h-20 flex items-center justify-center">
        <svg 
          viewBox="0 0 4500 4500" 
          className={`w-16 h-16 transition-all duration-500 hover:scale-110 ${
            darkMode ? 'opacity-90' : 'opacity-100'
          }`}
          style={{ filter: darkMode ? 'brightness(1.2)' : 'brightness(1)' }}
        >
          <path fill="#5B4696" d="M2928.89,1311.11c-453.98,0-907.95,0-1361.93,0c-144.37,126.86-288.75,253.72-433.12,380.59 c725.08,0,1450.16,0,2175.24,0C3182.34,1564.84,3055.62,1437.97,2928.89,1311.11z"/>
          <rect x="941.98" y="1797.57" fill="#5B4696" width="2564.4" height="385"/>
          <rect x="1186.53" y="1855.52" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1330.4396 -351.5871)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1395.6" y="1855.52" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1366.4838 -468.942)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1607.35" y="1855.52" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1402.9901 -587.8017)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1847.05" y="1855.52" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1444.3162 -722.3535)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="2086.76" y="1855.52" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1485.6421 -856.9053)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="3063.64" y="1901.04" fill="#FFFFFF" width="226.19" height="178.06"/>
          <ellipse fill="#5B4696" cx="3263.38" cy="2821.06" rx="532.39" ry="351.72"/>
          <polygon fill="#FFFFFF" points="3027.4,2921.06 3384.25,2550.38 3270.57,2758.99 3520.94,2710.72 3154.02,3103.81 3310.86,2827.09"/>
          <path fill="#5B4696" d="M3506.38,2449.46v-156.19H941.98v399.45h1729.37C2671.35,2692.71,2850.27,2294.45,3506.38,2449.46z"/>
          <path fill="#5B4696" d="M2644.28,2767.3H939.25v399.45h2022.66C2611.55,3100.2,2644.28,2767.3,2644.28,2767.3z"/>
          <rect x="1157.23" y="2340.38" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1597.5538 -251.5503)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1366.3" y="2340.38" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1633.598 -368.9052)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1578.05" y="2340.38" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1670.1044 -487.7649)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1817.76" y="2340.38" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1711.4304 -622.3167)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="2057.46" y="2340.38" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1752.7565 -756.8685)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1127.94" y="2808.86" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1855.4738 -154.3375)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1337.01" y="2808.86" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1891.5179 -271.6924)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1548.76" y="2808.86" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1928.0243 -390.5521)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="1788.46" y="2808.86" transform="matrix(0.8276 0.5613 -0.5613 0.8276 1969.3503 -525.1039)" fill="#FFFFFF" width="102.1" height="269.1"/>
          <rect x="2028.16" y="2808.86" transform="matrix(0.8276 0.5613 -0.5613 0.8276 2010.6763 -659.6557)" fill="#FFFFFF" width="102.1" height="269.1"/>
        </svg>
      </div>
      
      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Rotating Rings */}
      <div className="absolute -inset-12 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute -inset-16 border border-blue-400/20 rounded-full animate-spin-reverse-slow"></div>
    </div>
  </div>
</div>

          <div className="text-center mt-20">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              About Us
            </button>
          </div>
        </div>

        {/* Trusted Clients Carousel */}
        <div className={`py-12 rounded-2xl ${
          darkMode 
            ? 'bg-gradient-to-r from-gray-800 via-purple-900/30 to-gray-800' 
            : 'bg-gradient-to-r from-gray-100 via-purple-100/30 to-gray-100'
        }`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Trusted by Industry Leaders
            </h3>
            <p className={`text-base transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join the companies that rely on DonHoster for their infrastructure needs
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-infinite">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 mx-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } hover:shadow-lg cursor-pointer min-w-[180px] max-w-[180px]`}
                >
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className={`max-h-50 max-w-full object-contain transition-all duration-300 hover:scale-110 ${
                          darkMode ? 'filter brightness-90 hover:brightness-100' : ''
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                              <rect width="120" height="40" fill="${darkMode ? '#374151' : '#e5e7eb'}"/>
                              <text x="60" y="20" text-anchor="middle" dy=".3em" fill="${darkMode ? '#9ca3af' : '#6b7280'}" font-family="Arial, sans-serif" font-size="12">${client.name}</text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    <div className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
              
              {/* Second set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex-shrink-0 mx-4 p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  } hover:shadow-lg cursor-pointer min-w-[180px] max-w-[180px]`}
                >
                  <div className="text-center">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className={`max-h-50 max-w-full object-contain transition-all duration-300 hover:scale-110 ${
                          darkMode ? 'filter brightness-90 hover:brightness-100' : ''
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml;base64,${btoa(`
                            <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                              <rect width="120" height="40" fill="${darkMode ? '#374151' : '#e5e7eb'}"/>
                              <text x="60" y="20" text-anchor="middle" dy=".3em" fill="${darkMode ? '#9ca3af' : '#6b7280'}" font-family="Arial, sans-serif" font-size="12">${client.name}</text>
                            </svg>
                          `)}`;
                        }}
                      />
                    </div>
                    <div className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes scan-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 15s linear infinite;
        }
        
        .animate-scan-line {
          animation: scan-line 2s ease-in-out;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyDonHosterSection;