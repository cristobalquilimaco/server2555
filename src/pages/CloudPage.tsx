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
  ChevronDown,
  Shield,
  Globe,
  Headphones,
  Download,
  Settings,
  Monitor
} from 'lucide-react';
import AnimatedSection from '../components/AnimateSection';
import { Helmet } from 'react-helmet-async';

interface CloudPageProps{
  darkMode: boolean;
}

const CloudPage: React.FC<CloudPageProps> = ({ darkMode}) => {
  const [activeTab, setActiveTab] = useState<keyof typeof comparisonData>('cloud');
  const [openFaq, setOpenFaq] = useState<number | null>(null); 
  const cloudPlans = [
    {
      name: 'Cloud VPS Essential',
      subtitle: 'Cloud Miami 1',
      price: '23.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 2 Core',
        ram: '2 GB RAM memory',
        storage: '50 GB SATA SSD',
        bandwidth: '2TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Data Center Location Miami'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'IPv6 Class /64 included',
        'VMware control panel',
        'Snapshots included',
        'Full root access'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=7"
    },
    {
      name: 'Cloud VPS Advanced',
      subtitle: 'Cloud Miami 2',
      price: '39.00',
      setup: '0',
      popular: true,
      specs: {
        cpu: 'Shared vCPU 2 Core',
        ram: '4 GB RAM memory',
        storage: '80 GB SATA SSD',
        bandwidth: '3TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Data Center Location Miami'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'IPv6 Class /64 included',
        'VMware control panel',
        'Snapshots included',
        'Full root access'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=21"
    },
    {
      name: 'Cloud VPS Performance',
      subtitle: 'Cloud Miami 3',
      price: '59.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 4 Core',
        ram: '8 GB RAM memory',
        storage: '120 GB SATA SSD',
        bandwidth: '4TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Data Center Location Miami'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'IPv6 Class /64 included',
        'VMware control panel',
        'Snapshots included',
        'Full root access'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=22"
    },
    {
      name: 'Cloud VPS Ultra',
      subtitle: 'Cloud Miami 4',
      price: '89.00',
      setup: '0',
      specs: {
        cpu: 'Shared vCPU 8 Core',
        ram: '16 GB RAM memory',
        storage: '160 GB SATA SSD',
        bandwidth: '5TB Bandwidth / Month',
        support: 'Support 24Hrs',
        location: 'Data Center Location Miami'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'IPv6 Class /64 included',
        'VMware control panel',
        'Snapshots included',
        'Full root access'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=23"
    }
  ];

  interface ComparisonItem {
    title: string;
    pros: string[];
    ideal: string;
    dedicated?: string[];
  }

  const comparisonData: Record<'cloud' | 'dedicated', ComparisonItem> = {
    cloud: {
      title: 'Cloud Computing',
      pros: [
        'Cutting-edge performance with latest Intel CPUs',
        'High-speed NVMe SSD storage',
        'High-speed, low-latency network',
        '99.9% uptime guarantee',
        'Instant resource scalability'
      ],
      ideal: 'High-traffic websites, enterprise applications, development, and testing'
    },
    dedicated: {
      title: 'Dedicated Server',
      pros: [
        'Full physical hardware',
        'Guaranteed maximum performance',
        'No neighbors on the server',
        'Complete hardware customization',
        'Full server control'
      ],
      ideal: 'Critical applications, maximum security, heavy processing'
    }
  };

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Redundant Network',
      description: 'Fully redundant network infrastructure to ensure continuous operation.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Latest Generation Intel CPUs',
      description: 'Latest Intel CPUs offering top-tier performance for intensive applications.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Virtual Server Snapshots',
      description: 'Ability to create snapshots of the virtual machine at any point in time.'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Choose Your Data Storage Location',
      description: 'Option to select the infrastructure for service activation in Miami.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'SSD Storage',
      description: 'Cutting-edge NVMe/SSD storage for maximum performance.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'VMware Hypervisor',
      description: 'Virtualization managed by VMware, a leader in cloud infrastructure.'
    }
  ];

  const faqs = [
    {
      question: 'What is Cloud Computing and how does it differ from traditional hosting?',
      answer: 'Cloud Computing is a technology that enables access to computing resources (servers, storage, applications) over the internet in a scalable and flexible way. Unlike traditional hosting, it offers higher availability, automatic scaling, and pay-as-you-go, guaranteeing 99.9% uptime.'
    },
    {
      question: 'Can I scale my cloud server as my project grows?',
      answer: 'Absolutely. Our cloud servers allow vertical and horizontal scaling in real-time. You can increase CPU, RAM, and storage on-demand with no downtime and pay according to usage.'
    },
    {
      question: 'What uptime guarantees do your cloud servers offer?',
      answer: 'We offer a 99.9% uptime guarantee backed by SLA. Our redundant infrastructure in Miami includes multiple network connections, redundant power systems, and 24/7 monitoring to ensure maximum availability.'
    },
    {
      question: 'Is specialized technical support included for cloud computing?',
      answer: 'Yes, we provide 24/7 specialized technical support for cloud computing. Our expert team will assist with migration, setup, optimization, and any incidents related to your cloud infrastructure.'
    },
    {
      question: 'Which operating systems are available for cloud servers?',
      answer: 'We offer a wide variety of operating systems: Ubuntu, CentOS, Debian, Windows Server, Red Hat Enterprise Linux, and many others. Preconfigured templates for apps like WordPress, Magento, and Joomla are also available.'
    },
    {
      question: 'How do snapshots and backups work on the cloud?',
      answer: 'Snapshots let you create server snapshots anytime, perfect for safe updates. Additionally, we perform daily automatic backups stored for 30 days, ensuring full data protection.'
    },
    {
      question: 'Is it possible to migrate my current website to your cloud platform?',
      answer: 'Yes, we provide free migration services for websites and applications. Our technical team handles data, settings, and app transfer without affecting your service availability.'
    },
    {
      question: 'What advantages does having the data center in Miami offer for Spain?',
      answer: 'Miami is a strategic tech hub offering excellent connectivity with Spain and Europe. We guarantee low latency, compliance with international regulations, and fast access for Spanish and Latin American users, optimizing your app’s global performance.'
    }
  ];

  // Structured Data omitted here for brevity but should be included similarly with translations if needed.

  return (
    <>
        <Helmet>
      {/* Basic Configuration */}
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* SEO Meta Tags */}
      <title>Cloud VPS Miami from $23/month | DonHoster</title>
      <meta name="description" content="Cloud VPS Miami from $23/month with Intel CPUs, NVMe SSD, VMware hypervisor & 24/7 support. Scalable virtual servers, snapshots included. 99.9% uptime guaranteed." />
      <meta 
        name="keywords" 
        content="cloud vps miami, virtual private server, vps hosting, cloud computing, vmware vps, nvme ssd vps, scalable vps, miami cloud hosting, linux vps, windows vps, dedicated resources vps, managed vps" 
      />
      <meta name="author" content="DonHoster" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.donhoster.com/cloud" />

      {/* Language and Geolocation */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Miami, Florida" />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/cloud" />
      <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/cloud" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cloud VPS Miami from $23/month" />
      <meta property="og:description" content="Cloud VPS Miami from $23/month with Intel CPUs, NVMe SSD, VMware hypervisor & 24/7 support. Scalable virtual servers with 99.9% uptime guaranteed." />
      <meta property="og:image" content="https://www.donhoster.com/images/og-cloud.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DonHoster Cloud VPS Hosting Plans" />
      <meta property="og:url" content="https://www.donhoster.com/cloud" />
      <meta property="og:site_name" content="DonHoster" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@donhoster" />
      <meta name="twitter:creator" content="@donhoster" />
      <meta name="twitter:title" content="Cloud VPS Miami from $23/month" />
      <meta name="twitter:description" content="Cloud VPS Miami from $23/month with Intel CPUs, NVMe SSD, VMware hypervisor & 24/7 support. Scalable virtual servers with 99.9% uptime guaranteed." />
      <meta name="twitter:image" content="https://www.donhoster.com/images/og-cloud-vps.jpg" />
      <meta name="twitter:image:alt" content="DonHoster Cloud VPS" />
      <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
      <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa"></meta>

      {/* Schema.org - Product (VPS Plans) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Cloud VPS Miami",
          "description": "Scalable Cloud VPS with Intel CPUs, NVMe SSD storage, VMware hypervisor and 24/7 technical support",
          "brand": {
            "@type": "Brand",
            "name": "DonHoster"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "23.00",
            "highPrice": "89.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.donhoster.com/cloud",
            "priceValidUntil": "2025-12-31",
            "offerCount": "4"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150"
          }
        })}
      </script>

      {/* Schema.org - Individual Offers */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Offer",
              "position": 1,
              "name": "Cloud VPS Essential",
              "description": "2 vCPU, 2GB RAM, 50GB SSD, 2TB Bandwidth",
              "price": "23.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=7"
            },
            {
              "@type": "Offer",
              "position": 2,
              "name": "Cloud VPS Advanced",
              "description": "2 vCPU, 4GB RAM, 80GB SSD, 3TB Bandwidth",
              "price": "39.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=21"
            },
            {
              "@type": "Offer",
              "position": 3,
              "name": "Cloud VPS Performance",
              "description": "4 vCPU, 8GB RAM, 120GB SSD, 4TB Bandwidth",
              "price": "59.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=22"
            },
            {
              "@type": "Offer",
              "position": 4,
              "name": "Cloud VPS Ultra",
              "description": "8 vCPU, 16GB RAM, 160GB SSD, 5TB Bandwidth",
              "price": "89.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=23"
            }
          ]
        })}
      </script>

      {/* Schema.org - Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Cloud VPS Hosting",
          "name": "Cloud Virtual Private Server Hosting",
          "description": "Scalable cloud VPS with guaranteed resources, full root access, and VMware virtualization",
          "provider": {
            "@type": "Organization",
            "name": "DonHoster",
            "url": "https://www.donhoster.com"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Global"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://www.donhoster.com/cloud",
            "serviceLocation": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "addressCountry": "US"
              }
            }
          }
        })}
      </script>

      {/* Schema.org - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.donhoster.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Cloud VPS",
              "item": "https://www.donhoster.com/cloud"
            }
          ]
        })}
      </script>

      {/* Schema.org - FAQPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Cloud Computing and how does it differ from traditional hosting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cloud Computing is a technology that enables access to computing resources (servers, storage, applications) over the internet in a scalable and flexible way. Unlike traditional hosting, it offers higher availability, automatic scaling, and pay-as-you-go, guaranteeing 99.9% uptime."
              }
            },
            {
              "@type": "Question",
              "name": "Can I scale my cloud server as my project grows?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our cloud servers allow vertical and horizontal scaling in real-time. You can increase CPU, RAM, and storage on-demand with no downtime and pay according to usage."
              }
            },
            {
              "@type": "Question",
              "name": "What uptime guarantees do your cloud servers offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer a 99.9% uptime guarantee backed by SLA. Our redundant infrastructure in Miami includes multiple network connections, redundant power systems, and 24/7 monitoring to ensure maximum availability."
              }
            },
            {
              "@type": "Question",
              "name": "Which operating systems are available for cloud servers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer a wide variety of operating systems: Ubuntu, CentOS, Debian, Windows Server, Red Hat Enterprise Linux, and many others. Preconfigured templates for apps like WordPress, Magento, and Joomla are also available."
              }
            },
            {
              "@type": "Question",
              "name": "Is it possible to migrate my current website to your cloud platform?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide free migration services for websites and applications. Our technical team handles data, settings, and app transfer without affecting your service availability."
              }
            }
          ]
        })}
      </script>

      {/* Google Tag Manager - Head */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-57P7TBP');
        `}
      </script>

      {/* DNS Prefetch and Preconnect for Performance */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://my.donhoster.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload Critical Images */}
      <link 
        rel="preload" 
        as="image" 
        href="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
      />

      {/* Mobile App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="DonHoster Cloud" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#9333ea" />

      {/* Security */}
      <meta name="referrer" content="no-referrer-when-downgrade" />
    </Helmet>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      {/* Invisible H1 for SEO */}
      <div className="sr-only">
        <h1>Cloud VPS Miami USA - Scalable Virtual Servers with VMware and 24/7 Support</h1>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg')] bg-cover bg-center opacity-20"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl transform translate-x-1/2"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            <div className= "text-white">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6"
              >
                CLOUD <span className="text-purple-400">VPS</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg lg:text-xl mb-8 max-w-2xl"
              >
                The best VPS (Virtual Private Server) with full Cloud power and flexibility, guaranteed resources, software installation or any web service in minutes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WP</span>
                </div>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MG</span>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JM</span>
                </div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JS</span>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PHP</span>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200"
                onClick={() => {
                  document.getElementById("cloud-plans")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Pricing
              </motion.button>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`absolute top-0 right-0 p-4 rounded-lg border ${darkMode ? 'bg-gray-800/90 border-purple-500/30 backdrop-blur-sm' : 'bg-gray-200 border-purple-300'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/20">
                    <Headphones className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className={darkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>24x7 Support</h4>
                    <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Specialized technical assistance</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`absolute top-24 right-12 p-4 rounded-lg border ${darkMode ? 'bg-gray-800/90 border-purple-500/30 backdrop-blur-sm' : 'bg-gray-200 border-purple-300'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/20">
                    <Download className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className={darkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>"Drag and mount" ISOs and templates</h4>
                    <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Simplified installation</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`absolute top-48 right-0 p-4 rounded-lg border ${darkMode ? 'bg-gray-800/90 border-purple-500/30 backdrop-blur-sm' : 'bg-gray-200 border-purple-300'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/20">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className={darkMode ? 'text-white font-semibold' : 'text-gray-900 font-semibold'}>Data Center in Miami</h4>
                    <p className={darkMode ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>Global high availability network</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Plans Section */}
      <AnimatedSection  className="py-16 lg:py-24" >
        <div id="cloud-plans" className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cloud VPS Plans in Miami
            </h3>
            <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Cutting-edge performance with the latest Intel CPUs and NVMe SSD storage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 ${
                  plan.popular
                    ? (darkMode ? 'bg-gradient-to-br from-purple-800 to-purple-900 text-white transform scale-105' : 'bg-gradient-to-br from-purple-600 to-purple-800 text-white transform scale-105')
                    : (darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:shadow-xl border border-gray-200')
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
                  <Cloud className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                  <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h4>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-purple-200' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-sm">Starting since:</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold">USD {plan.price}</span>
                  </div>
                  <p className={`text-lg ${plan.popular ? 'text-purple-200' : darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Monthly
                  </p>
                </div>

                <div className="text-center mb-6">
                  <span className={`inline-block px-3 py-1 text-xs rounded ${
                    plan.popular ? 'bg-purple-700 text-purple-200' : 'bg-purple-100 text-purple-600'
                  }`}>
                    vmware
                  </span>
                </div>

                <div className="mb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Cpu className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Database className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.support}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                      <span>{plan.specs.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <span className={darkMode ? 'text-gray-300' : 'text-sm'}>🇺🇸 Data Center United States</span>
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
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              DonHoster Cloud Computing Advantages
            </h3>
            <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              DonHoster Cloud technology infrastructure offers scalable and flexible solutions to meet the needs of any type of project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-purple-600 ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                  {feature.icon}
                </div>
                <h4 className={`text-xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h4>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Cloud Computing vs. Dedicated Server
            </h3>
            <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Find the solution best suited for your needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex rounded-xl p-2 shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <button
                onClick={() => setActiveTab('cloud')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'cloud'
                    ? 'bg-purple-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Cloud Computing
              </button>
              <button
                onClick={() => setActiveTab('dedicated')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'dedicated'
                    ? 'bg-purple-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-purple-600'
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
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-xl`}>
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${darkMode ? 'bg-purple-900' : 'bg-purple-100'}`}>
                  {activeTab === 'cloud' ? (
                    <Cloud className="w-8 h-8 text-purple-600" />
                  ) : (
                    <Server className="w-8 h-8 text-purple-600" />
                  )}
                </div>
                <h4 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {comparisonData[activeTab].title}
                </h4>
              </div>

              <div className="mb-8">
                <h5 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Advantages:
                </h5>
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
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{pro}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={`${darkMode ? 'bg-purple-900/20 text-purple-300' : 'bg-purple-50 text-purple-700'} p-6 rounded-lg`}>
                <h5 className="text-lg font-semibold mb-2">
                  Ideal for:
                </h5>
                <p>
                  {comparisonData[activeTab].ideal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Operating Systems Section */}
      <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Operating Systems for Cloud Computing
            </h3>
            <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Instant OS setup on your virtual machine. Our platform supports a wide variety of popular operating systems.
            </p>
          </div>

          <div className="flex justify-center">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-2xl shadow-xl`}>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h4 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Linux</h4>
              </div>
              <p className={`text-center max-w-2xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ubuntu, CentOS, Debian, Red Hat Enterprise Linux and many other distributions available with automatic configuration and pre-installed templates.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions about Cloud Computing
            </h3>
            <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We answer your most common questions about our cloud computing services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors duration-200 hover:${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}
                >
                  <h5 className={`text-lg font-semibold pr-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {faq.question}
                  </h5>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`p-6 pt-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to start with Cloud VPS?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Configure your cloud server in minutes and start enjoying full control over your infrastructure with 24/7 technical support in Spanish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              onClick={() => {
                document.getElementById("cloud-plans")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Order Cloud VPS Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200 inline-block"
            >
              Talk to an Expert
            </motion.a>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
    </>
  );
};

export default CloudPage;
