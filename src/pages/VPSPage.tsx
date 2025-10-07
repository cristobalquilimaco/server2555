import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Cpu, 
  HardDrive, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  ChevronDown
} from 'lucide-react';

interface VPSPageProps {
  darkMode: boolean;
}

const VPSPage: React.FC<VPSPageProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<keyof typeof comparisonData>('vps');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const vpsPlans = [
    {
      name: 'VPS Small - Miami',
      price: '14.00',
      setup: '0',
      specs: {
        cpu: '1 vCPU Xeon E3-1230 @ 3.3 GHz',
        ram: '1 GB',
        storage: '20 GB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 dedicated IP (IPv4)',
        'SSH root access',
        '24/7 technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=1"
    },
    {
      name: 'VPS Medium - Miami',
      price: '20.00',
      setup: '0',
      popular: true,
      specs: {
        cpu: '2 vCPU Xeon E3-1230 @ 3.3 GHz',
        ram: '2 GB',
        storage: '50 GB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 dedicated IP (IPv4)',
        'SSH root access',
        '24/7 technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=3"
    },
    {
      name: 'VPS Large - Miami',
      price: '27.00',
      setup: '0',
      specs: {
        cpu: '3 vCPU Xeon E3-1230 @ 3.3 GHz',
        ram: '3 GB',
        storage: '100 GB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 dedicated IP (IPv4)',
        'SSH root access',
        '24/7 technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=4"
    },
    {
      name: 'VPS Extra Large - Miami',
      price: '35.00',
      setup: '0',
      specs: {
        cpu: '4 vCPU Xeon E3-1230 @ 3.3 GHz',
        ram: '4 GB',
        storage: '250 GB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 dedicated IP (IPv4)',
        'SSH root access',
        '24/7 technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=5"
    }
  ];

  interface ComparisonData {
    title: string;
    pros: string[];
    ideal: string;
  }

  const comparisonData: Record<'vps' | 'dedicated', ComparisonData> = {
    vps: {
      title: 'VPS Hosting',
      pros: [
        'Guaranteed dedicated resources',
        'Full server control',
        'Instant scalability',
        'Best price-to-performance ratio',
        'Easy management and maintenance'
      ],
      ideal: 'Medium-sized websites, web applications, development and testing'
    },
    dedicated: {
      title: 'Dedicated Server',
      pros: [
        'Complete physical hardware',
        'Maximum performance',
        'No server neighbors',
        'Total customization',
        'Best for mission-critical applications'
      ],
      ideal: 'Large applications, high traffic, maximum security'
    }
  };

  const faqs = [
    {
      question: 'What is the difference between VPS and shared hosting?',
      answer: 'VPS offers you dedicated resources (CPU, RAM, storage) that you don\'t share with other users, while in shared hosting you share all server resources. This means better performance, greater control, and more stability.'
    },
    {
      question: 'Can I scale my VPS when needed?',
      answer: 'Yes, you can scale your VPS at any time. We can increase CPU, RAM, and storage with minimal downtime, typically in less than 30 minutes.'
    },
    {
      question: 'Does it include a control panel?',
      answer: 'Yes, all our VPS plans include an intuitive control panel from which you can manage your server, create backups, monitor resources, and configure applications.'
    },
    {
      question: 'What operating systems are available?',
      answer: 'We offer multiple options: Ubuntu, CentOS, Debian, Windows Server, and other popular distributions. We can also install the OS of your preference.'
    },
    {
      question: 'Do they include automatic backups?',
      answer: 'Yes, we perform automatic daily backups that are stored for 30 days. You can also create manual snapshots whenever you need.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen pt-20 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg')] bg-cover bg-center bg-black opacity-20"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-purple-400">Fast</span> and Scalable VPS Hosting in Miami
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            Private virtual servers with dedicated resources, full control, 
            and instant scalability. Perfect for growing projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>View VPS Plans</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* VPS Plans */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              VPS Plans in Miami
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dedicated resources and guaranteed performance for your project
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white transform scale-105'
                    : darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                    : 'bg-white hover:shadow-xl border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <Cloud className={`w-12 h-12 mx-auto mb-4 ${
                    plan.popular ? 'text-purple-200' : 'text-purple-600'
                  }`} />
                  <h3 className={`text-2xl font-bold mb-4 ${
                    plan.popular 
                      ? 'text-white' 
                      : darkMode 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className={`text-4xl font-bold ${
                      plan.popular 
                        ? 'text-white' 
                        : darkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}>USD {plan.price}</span>
                    <span className={`text-lg ${
                      plan.popular 
                        ? 'text-purple-200' 
                        : darkMode 
                        ? 'text-gray-300' 
                        : 'text-gray-600'
                    }`}>
                      /month
                    </span>
                  </div>
                  <p className={`text-sm ${
                    plan.popular 
                      ? 'text-purple-200' 
                      : darkMode 
                      ? 'text-gray-400' 
                      : 'text-gray-500'
                  }`}>
                    Setup: ${plan.setup}
                  </p>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${
                    plan.popular 
                      ? 'text-white' 
                      : darkMode 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}>
                    Specifications:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Cpu className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>RAM: {plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>Bandwidth: {plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>Connection: {plan.specs.connection}</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className={`font-semibold mb-3 ${
                    plan.popular 
                      ? 'text-white' 
                      : darkMode 
                      ? 'text-white' 
                      : 'text-gray-900'
                  }`}>
                    Included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className={`w-4 h-4 ${
                          plan.popular ? 'text-purple-200' : 'text-green-500'
                        }`} />
                        <span className={
                          plan.popular 
                            ? 'text-white' 
                            : darkMode 
                            ? 'text-white' 
                            : 'text-gray-900'
                        }>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  onClick={() => window.open(plan.url, '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              VPS vs. Dedicated Server
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Find the solution that best fits your needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex rounded-xl p-2 shadow-lg ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <button
                onClick={() => setActiveTab('vps')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'vps'
                    ? 'bg-purple-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-purple-400'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                VPS Hosting
              </button>
              <button
                onClick={() => setActiveTab('dedicated')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'dedicated'
                    ? 'bg-purple-600 text-white'
                    : darkMode
                    ? 'text-gray-300 hover:text-purple-400'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Dedicated Server
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className={`p-8 rounded-2xl shadow-xl ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                }`}>
                  {activeTab === 'vps' ? (
                    <Cloud className="w-8 h-8 text-purple-600" />
                  ) : (
                    <Server className="w-8 h-8 text-purple-600" />
                  )}
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {comparisonData[activeTab].title}
                </h3>
              </div>

              <div className="mb-8">
                <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Advantages:
                </h4>
                <ul className="space-y-3">
                  {comparisonData[activeTab].pros.map((pro, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-500" />
                      <span className={`transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{pro}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-purple-900/20' : 'bg-purple-50'
              }`}>
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-purple-300' : 'text-purple-900'
                }`}>
                  Ideal for:
                </h4>
                <p className={`${
                  darkMode ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  {comparisonData[activeTab].ideal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions about VPS
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We answer your most common questions about our VPS services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`p-6 pt-0 transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to get started with your VPS?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Set up your virtual server in minutes and start enjoying 
            full control over your infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get VPS Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            >
              Talk to an Expert
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default VPSPage;