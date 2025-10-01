import React from 'react';
import { Server, Cpu, HardDrive, Wifi } from 'lucide-react';

interface VPSProps {
  darkMode: boolean;
}

const VPS: React.FC<VPSProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">VPS Hosting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Scalable Virtual Private Servers with full root access and dedicated resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Server, title: 'Full Control', desc: 'Complete root access' },
            { icon: Cpu, title: 'Dedicated CPU', desc: 'Guaranteed processing power' },
            { icon: HardDrive, title: 'SSD Storage', desc: 'High-speed storage' },
            { icon: Wifi, title: 'High Bandwidth', desc: 'Unlimited traffic' }
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

export default VPS;