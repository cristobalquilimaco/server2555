import React from 'react';
import { Server, Zap, Shield, Clock, Globe } from 'lucide-react';

interface DedicatedServersProps {
  darkMode: boolean;
}

const DedicatedServers: React.FC<DedicatedServersProps> = ({ darkMode }) => {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Latest Intel Xeon processors with SSD storage for maximum speed',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'DDoS protection, firewall, and 24/7 security monitoring',
    },
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Guaranteed uptime with redundant infrastructure',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Multiple data center locations for optimal performance',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800' 
          : 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              Dedicated Servers
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Powerful dedicated hosting solutions with full root access, 
              guaranteed resources, and enterprise-grade infrastructure.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              View Plans
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose Our Dedicated Servers?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${
                    darkMode ? 'bg-purple-900' : 'bg-purple-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Get Started?
          </h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Contact our team to find the perfect dedicated server solution for your needs.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105">
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default DedicatedServers;