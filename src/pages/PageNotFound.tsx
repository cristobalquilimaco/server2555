import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Search, 
  AlertTriangle,
  ArrowLeft,
  Server,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface NotFoundPageProps {
  darkMode: boolean;
}

const PageNotFound: React.FC<NotFoundPageProps> = ({ darkMode }) => {
  const quickLinks = [
    {
      icon: Home,
      title: 'Home',
      description: 'Return to our main page',
      path: '/'
    },
    {
      icon: Server,
      title: 'Dedicated Servers',
      description: 'View our server plans',
      path: '/dedicated-servers'
    },
    {
      icon: Zap,
      title: 'Services',
      description: 'Explore all our services',
      path: '/services'
    },
    {
      icon: HelpCircle,
      title: 'Support',
      description: 'Get help from our team',
      path: '/contact'
    }
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | DonHoster</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to DonHoster homepage or explore our dedicated server hosting solutions."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.donhoster.com/404" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black opacity-100"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg')] bg-cover bg-center bg-black opacity-10"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"
          />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-purple-600/30 rounded-full backdrop-blur-sm border-2 border-purple-400/50">
                <AlertTriangle className="w-16 h-16 text-purple-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Oops! The page you're looking for seems to have gone offline. 
                Don't worry, we'll help you find your way back.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg shadow-purple-500/50"
                >
                  <Home className="w-5 h-5" />
                  <span>Go to Homepage</span>
                </motion.button>
              </Link>

              <Link to="/dedicated-servers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center space-x-2 border border-white/30"
                >
                  <Server className="w-5 h-5" />
                  <span>View Servers</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={`py-16 lg:py-24 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Where would you like to go?
              </h3>
              <p className={`text-xl transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Explore our most popular sections
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={link.path}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                            : 'bg-white hover:bg-gray-50 border border-gray-200'
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                            darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                          }`}
                        >
                          <Icon className="w-7 h-7 text-purple-600" />
                        </motion.div>
                        <h4 className={`text-lg font-semibold mb-2 text-center transition-colors duration-300 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {link.title}
                        </h4>
                        <p className={`text-sm text-center transition-colors duration-300 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {link.description}
                        </p>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className={`py-16 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`max-w-3xl mx-auto text-center p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-gray-900/50 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                }`}
              >
                <Search className="w-8 h-8 text-purple-600" />
              </motion.div>
              
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Still can't find what you're looking for?
              </h3>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our support team is here to help you 24/7. Contact us and we'll get you back on track.
              </p>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Contact Support</span>
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Error Code Section */}
        <section className={`py-8 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <p className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Error Code: 404 | Page Not Found
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default PageNotFound;