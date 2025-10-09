import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Shield,
  Heart,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimateSection';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

interface AboutPageProps {
  darkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  const milestones = [
    {
      year: '2017',
      title: 'DonHoster Foundation',
      description: 'Operations started in Miami with a focus on quality and personalized service.'
    },
    {
      year: '2019',
      title: 'Expansion to Miami',
      description: 'Opening of our data center in Miami to enhance global connectivity.'
    },
    {
      year: '2021',
      title: '1,000+ Customers',
      description: 'Reached one thousand active customers with 98% satisfaction.'
    },
    {
      year: '2023',
      title: 'ISO 27001 Certification',
      description: 'Obtained international information security certification.'
    },
    {
      year: '2024',
      title: 'Cloud Hosting',
      description: 'Launch of cloud services with automatic scaling technology.'
    },
    {
      year: '2025',
      title: '5,000+ Customers',
      description: 'More than 5,000 customers trust our infrastructure for their businesses.'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'PCI DSS', description: 'Payment Data Security' },
    { name: 'Tier III+', description: 'Data Center Certification' }
  ];

  const partners = [
    'Intel', 'Dell', 'Cisco', 'VMware', 'CloudFlare', 'Veeam'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security',
      description: 'We protect your information with the highest industry standards.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'State-of-the-art infrastructure to guarantee maximum performance.'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Committed to the success of our clients and their digital growth.'
    },
    {
      icon: Users,
      title: 'Support',
      description: 'Specialized human team available 24/7 to answer any query.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About DonHoster | 8 Years Leading Hosting in Spain</title>
        <meta name="description" content="Meet DonHoster: 8 years offering enterprise hosting in Spain. ISO 27001 certifications, Miami data center, 5000+ clients, and 24/7 support." />
        <meta name="keywords" content="donhoster history, enterprise hosting spain, iso 27001 certification, miami data center, hosting spain company, donhoster values" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DonHoster Spain" />
        <meta name="copyright" content="© 2025 DonHoster Spain" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About DonHoster | 8 Years Leading Hosting in Spain" />
        <meta property="og:description" content="Discover DonHoster's history: 8 years of experience, international certifications, Miami data center, and over 5000 satisfied clients." />
        <meta property="og:image" content="https://donhoster.es/images/sobre-donhoster-empresa-spain.jpg" />
        <meta property="og:url" content="https://donhoster.es/sobre-nosotros" />
        <meta property="og:site_name" content="DonHoster Spain" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DonHoster" />
        <meta name="twitter:creator" content="@DonHoster" />
        <meta name="twitter:title" content="About DonHoster | 8 Years Leading Hosting in Spain" />
        <meta name="twitter:description" content="8 years of experience in enterprise hosting, ISO certifications and Miami data center." />
        <meta name="twitter:image" content="https://donhoster.es/images/sobre-donhoster-empresa-spain.jpg" />
        <link rel="canonical" href="https://donhoster.es/sobre-nosotros" />
        <link rel="alternate" hrefLang="en" href="https://donhoster.com/about-donhoster" />
        <link rel="alternate" hrefLang="es" href="https://donhoster.es/sobre-nosotros" />
        <link rel="alternate" hrefLang="x-default" href="https://donhoster.es/sobre-nosotros" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
        <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa"></meta>
          {/* GTM */}
        <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-57P7TBP');
        `}
      </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/60 to-transparent"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            About <span className="text-purple-400">DonHoster</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
           8 years of experience providing enterprise hosting solutions with cutting-edge technology and exceptional human support.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>
                  What Drives Us
                </h2>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Provide high-quality enterprise hosting solutions that allow our clients to focus on growing their businesses while we keep their digital infrastructure running optimally, securely, and reliably 24/7.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-lg`}
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-2xl font-bold`}>
                  Where We Are Going
                </h2>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                To be the leading hosting provider for Spanish and Latin American companies, recognized for our technical excellence, constant innovation, and unwavering commitment to our clients' success in the digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-16 lg:py-24`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-bold mb-4`}>
              Our History
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xl mb-0`}>
              8 years innovating hosting solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-purple-600">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mr-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-purple-300"></div>
                  )}
                </div>
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} flex-1 p-6 rounded-lg shadow-lg`}>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-xl font-semibold mb-2`}>
                    {milestone.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-3xl lg:text-4xl font-bold mb-4`}>
              Our Values
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-xl mb-0`}>
              The principles that guide our work every day
            </p>
          </div>

          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`${darkMode ? 'bg-gray-700' : 'bg-white'} text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center"
                  >
                    <Icon className={`${darkMode ? 'bg-gray-700' : 'bg-white'}w-8 h-8 text-white`} />
                  </motion.div>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-xl font-semibold mb-3`}>
                    {value.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications & Partners */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="text-center mb-12">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-3xl font-bold mb-4`}>
                  Certifications
                </h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We meet the highest international standards
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <div>
                        <h4 className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold`}>
                          {cert.name}
                        </h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div>
              <div className="text-center mb-12">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-3xl font-bold mb-4`}>
                  Technology Partners
                </h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  We work with industry leaders
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                  >
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-semibold`}>
                      {partner}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Want to be part of our story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses that trust DonHoster for their digital infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={()=>navigate('/dedicated-servers')}
            >
              Buy dedicated
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            onClick={()=> navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default AboutPage;
