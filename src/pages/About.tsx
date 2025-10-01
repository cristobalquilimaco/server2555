import React from 'react';
import { Users, Award, Globe, Clock } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen pt-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About DonHoster</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading provider of hosting solutions with over a decade of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Users, title: '10,000+', desc: 'Happy Customers' },
            { icon: Award, title: '99.9%', desc: 'Uptime Guarantee' },
            { icon: Globe, title: '5+', desc: 'Data Centers' },
            { icon: Clock, title: '24/7', desc: 'Expert Support' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`p-8 rounded-2xl text-center ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{stat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`rounded-2xl p-12 mb-20 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At DonHoster, we're committed to providing reliable, high-performance hosting solutions 
              that empower businesses to succeed online. With state-of-the-art infrastructure, 
              expert support, and competitive pricing, we make hosting simple and affordable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;