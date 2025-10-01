import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from "../public/logo.png"

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Dedicated server', path: '/dedicated-servers' },
    { name: 'VPS KVM', path: '/vps' },
    { name: 'Cloud server', path: '/cloud' },
    { name: 'Contact', path: '/contact' },
    { name: 'Data Center', path: '/about' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' }
  ];

  return (
    <footer className={`transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-50 border-gray-200'
    } border-t`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} className={` h-6 transition-colors duration-300 ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`} />
            
            </Link>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 transition-colors duration-300 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <span className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  admin@donhoster.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`w-5 h-5 transition-colors duration-300 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <span className={`transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Miami, USA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 hover:text-purple-600 ${
                      darkMode 
                        ? 'text-gray-300 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/dedicated-servers"
                  className={`transition-colors duration-300 hover:text-purple-600 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link
                  to="/web-hosting"
                  className={`transition-colors duration-300 hover:text-purple-600 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link
                  to="/vps"
                  className={`transition-colors duration-300 hover:text-purple-600 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  to="/cloud"
                  className={`transition-colors duration-300 hover:text-purple-600 ${
                    darkMode 
                      ? 'text-gray-300 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white' 
                        : 'bg-gray-200 text-gray-600 hover:bg-purple-600 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="mt-8">
              <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`flex-1 px-4 py-2 rounded-l-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-colors duration-300 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Copyright ©2023 DonHoster All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className={`text-sm transition-colors duration-300 hover:text-purple-600 ${
                darkMode 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`text-sm transition-colors duration-300 hover:text-purple-600 ${
                darkMode 
                  ? 'text-gray-400 hover:text-purple-400' 
                  : 'text-gray-500 hover:text-purple-600'
              }`}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;