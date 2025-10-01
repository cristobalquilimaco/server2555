import React from 'react';
import { Server, Globe } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800' 
        : 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-0"></div>
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-200 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dedicated Server
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 block">
                Miami
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Dedicated Server Miami with 99% uptime reliability.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <button className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Miami Dedicated Server Plans
              </button>
              <button className="w-full sm:w-auto border border-purple-300 text-purple-100 px-8 py-4 rounded-lg font-semibold hover:bg-purple-700/50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Animated Server Illustration */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central Globe */}
              <div className="absolute z-10 animate-spin-slow">
                <Globe className="w-24 h-24 text-blue-400" />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Globe className="w-24 h-24 text-blue-300" />
                </div>
              </div>

              {/* Surrounding Servers */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    className={`absolute animate-orbit-${index + 1}`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-120px)`,
                    }}
                  >
                    <div className="animate-counter-rotate">
                      <Server 
                        className={`w-12 h-12 transition-colors duration-300 ${
                          index % 2 === 0 ? 'text-purple-400' : 'text-cyan-400'
                        } hover:scale-110 transform transition-transform`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={`line-${index}`}
                    className={`absolute w-0.5 h-20 bg-gradient-to-t from-purple-400 to-transparent animate-pulse`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
                      transformOrigin: 'center bottom',
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;