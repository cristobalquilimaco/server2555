import React from 'react';
import { Zap, Shield, Globe, Database } from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode }) => {
  const services = [
    {
      icon: Zap,
      title: 'Blazing-Fast Performance',
      description: '10x faster speeds with top-tier dedicated servers',
      color: 'text-orange-400'
    },
    {
      icon: Shield,
      title: 'Unbeatable Security',
      description: 'High-level security protocols',
      color: 'text-red-400'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Seamless high-speed connections worldwide',
      color: 'text-blue-400'
    },
    {
      icon: Database,
      title: '24/7 Daily Backup',
      description: 'Daily backups to keep your data safe',
      color: 'text-green-400'
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose DonHoster for Dedicated Server Hosting
          </h2>
          <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Listed below our awesome hosting packages. You can select any web hosting services below!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-900/50 to-gray-800/50 hover:from-purple-800/60 hover:to-gray-700/60' 
                    : 'bg-gradient-to-br from-purple-50 to-gray-50 hover:from-purple-100 hover:to-gray-100'
                } hover:shadow-2xl border ${
                  darkMode ? 'border-purple-800/50' : 'border-purple-200/50'
                }`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } group-hover:scale-110 shadow-lg`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;