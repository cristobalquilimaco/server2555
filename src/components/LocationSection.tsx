import React from 'react';
import { Plus } from 'lucide-react';

interface LocationSectionProps {
  darkMode: boolean;
}

const LocationSection: React.FC<LocationSectionProps> = ({ darkMode }) => {
  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800' 
        : 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-purple-300">Location</span> Matters
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Our Miami data center serves as a pivotal hub within one of the world's largest internet exchanges, 
            linking Latin America, the Northeast US. It offers cutting-edge hosting solutions, boasting top-tier 
            infrastructure and connectivity. Our innovative, automated technology caters to businesses of all sizes, 
            providing cloud-based services with assured quality, availability, and the best hardware spread across 
            multiple data centers.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* US Map with Miami Location */}
          <div className="relative">
            <div className="relative">
              <img 
                src="../src/./images/USA-Map-PNG.webp" 
                alt="United States Map" 
                className="w-1/2 h-auto max-w-4xl mx-auto opacity-90"
              />
              
              {/* Miami Data Center Marker */}
              <div className="absolute top-[75%] right-[34%] transform -translate-x-1/2 -translate-y-1/2">
                {/* Pulsing Circle Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping opacity-60"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                
                {/* Main Marker */}
                <div className="relative z-10 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                
                {/* Location Label */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg">
                    Miami Data Center
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-500">
              Our Data Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;