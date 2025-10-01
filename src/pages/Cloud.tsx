import React from 'react';
import { Cloud, Database, Shield, Zap } from 'lucide-react';

interface CloudProps {
  darkMode: boolean;
}

const CloudPage: React.FC<CloudProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Flexible and scalable cloud infrastructure for modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Cloud, title: 'Cloud Computing', desc: 'Scalable cloud resources' },
            { icon: Database, title: 'Cloud Storage', desc: 'Secure data storage' },
            { icon: Shield, title: 'Cloud Security', desc: 'Advanced protection' },
            { icon: Zap, title: 'Auto Scaling', desc: 'Dynamic resource scaling' }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`p-8 rounded-2xl text-center ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CloudPage;