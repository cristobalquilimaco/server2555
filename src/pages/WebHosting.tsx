import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  HardDrive,
  Mail,
  ChevronDown
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface WebHostingProps {
  darkMode: boolean;
}

const WebHosting: React.FC<WebHostingProps> = ({ darkMode }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hostingPlans = [
    {
      name: 'Small Hosting',
      price: '2.60',
      setup: '0',
      specs: {
        websites: '1 Domain allowed',
        storage: '1.5 GB',
        bandwidth: 'Unlimited',
        email: '15 Email accounts',
        ssl: 'Free SSL'
      },
      features: [
        'cPanel included',
        '2 Additional domains',
        '2 Domain aliases',
        '10 Subdomains',
        '5 MySQL databases',
        '5 FTP accounts',
        'Integrated DDoS protection',
        'Automatic backups',
        '30-day money-back guarantee',
        '24/7 technical support',
        'Miami, FL datacenter',
        'Idera by V8-925 ® servers'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=15"
    },
    {
      name: 'Medium cPanel Hosting',
      price: '3.50',
      setup: '0',
      specs: {
        websites: '1 Domain allowed',
        storage: '2 GB',
        bandwidth: 'Unlimited',
        email: '25 Email accounts',
        ssl: 'Free SSL'
      },
      features: [
        'cPanel included',
        '3 Additional domains',
        '3 Domain aliases',
        '15 Subdomains',
        '5 MySQL databases',
        '5 FTP accounts',
        'Integrated DDoS protection',
        'Automatic backups',
        '30-day money-back guarantee',
        '24/7 technical support',
        'Miami, FL datacenter',
        'Idera by V8-925 ® servers'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=17"
    },
    {
      name: 'Large cPanel Hosting',
      price: '7.50',
      setup: '0',
      popular: true,
      specs: {
        websites: '1 Domain allowed',
        storage: '3 GB',
        bandwidth: 'Unlimited',
        email: '30 Email accounts',
        ssl: 'Free SSL'
      },
      features: [
        'cPanel included',
        '5 Additional domains',
        '5 Domain aliases',
        '20 Subdomains',
        '10 MySQL databases',
        '5 FTP accounts',
        'Integrated DDoS protection',
        'Automatic backups',
        '30-day money-back guarantee',
        '24/7 technical support',
        'Miami, FL datacenter',
        'Idera by V8-925 ® servers'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=18"
    },
    {
      name: 'Extra cPanel Hosting',
      price: '11.99',
      setup: '0',
      specs: {
        websites: '1 Domain allowed',
        storage: '5 GB',
        bandwidth: 'Unlimited',
        email: '40 Email accounts',
        ssl: 'Free SSL'
      },
      features: [
        'cPanel included',
        '7 Additional domains',
        '7 Domain aliases',
        '25 Subdomains',
        '15 MySQL databases',
        '10 FTP accounts',
        'Integrated DDoS protection',
        'Automatic backups',
        '30-day money-back guarantee',
        '24/7 technical support',
        'Miami, FL datacenter',
        'Idera by V8-925 ® servers'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=20"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Superior Performance',
      description: 'Latest generation SSD servers with ultra-fast loading times. Your website always at maximum performance.'
    },
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'Advanced malware protection, configured firewall, and SSL certificates included in all plans.'
    },
    {
      icon: Mail,
      title: 'Stress-Free Migration',
      description: 'Our technical team migrates your current website at no additional cost and with zero downtime.'
    }
  ];

  const faqs = [
    {
      question: 'What does the free migration include?',
      answer: 'We completely migrate your website from your current provider, including files, databases, emails, and configurations. The process is transparent with no downtime.'
    },
    {
      question: 'How long does it take to activate my hosting?',
      answer: 'Your account is activated instantly after payment. You will receive cPanel access details in less than 5 minutes to start configuring your website.'
    },
    {
      question: 'Do you offer uptime guarantee?',
      answer: 'Yes, we guarantee 99.9% uptime. If we don\'t meet this promise, we automatically compensate the lost time with credit to your account.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Absolutely. You can upgrade or change your plan at any time from your control panel. Changes are immediate and hassle-free.'
    },
    {
      question: 'Is SSL certificate included?',
      answer: 'Yes, all our plans include a free SSL certificate with automatic renewal. For higher plans, we include premium and wildcard SSL.'
    },
    {
      question: 'What technical support do you offer?',
      answer: '24/7 technical support in English via chat, email, and phone. Our team specializes in hosting and can resolve any technical query.'
    }
  ];

  return (
    <>
<Helmet>
  {/* Meta Tags Básicos */}
  <title>Web Hosting cPanel | DonHoster</title>
  <meta
    name="description"
    content="Web Hosting Miami with cPanel hosting, free SSL & WordPress optimization. Unlimited bandwidth, automatic backups, 24/7 support from $2.60/mo. 99.9% uptime guaranteed."
  />
  <meta
    name="keywords"
    content="web hosting miami, cpanel hosting, wordpress hosting, cheap hosting, ssl hosting, shared hosting, website hosting, hosting plans miami"
  />
  <meta name="author" content="DonHoster" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://www.donhoster.com/web-hosting" />
  
  {/* Idioma y Geolocalización */}
  <meta name="language" content="English" />
  <meta name="geo.region" content="US-FL" />
  <meta name="geo.placename" content="Miami" />
  <meta name="geo.position" content="25.7617;-80.1918" />
  <meta name="ICBM" content="25.7617, -80.1918" />
  
  {/* Hreflang */}
  <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/web-hosting" />
  <link rel="alternate" hrefLang="es" href="https://www.donhoster.es/web-hosting" />
  <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/web-hosting" />
  
  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Web Hosting Miami | cPanel Hosting with SSL & WordPress - DonHoster" />
  <meta
    property="og:description"
    content="Web Hosting Miami with cPanel, free SSL & WordPress optimization. Unlimited bandwidth, automatic backups, 24/7 support from $2.60/mo. 99.9% uptime."
  />
  <meta property="og:image" content="https://www.donhoster.com/images/web-hosting-og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="DonHoster Web Hosting Miami - cPanel & WordPress Hosting" />
  <meta property="og:url" content="https://www.donhoster.com/web-hosting" />
  <meta property="og:site_name" content="DonHoster" />
  <meta property="og:locale" content="en_US" />
  
  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Web Hosting Miami | cPanel Hosting with SSL & WordPress - DonHoster" />
  <meta
    name="twitter:description"
    content="Web Hosting Miami with cPanel, free SSL & WordPress optimization. Unlimited bandwidth, automatic backups, 24/7 support from $2.60/mo."
  />
  <meta name="twitter:image" content="https://www.donhoster.com/images/web-hosting-twitter.jpg" />
  <meta name="twitter:image:alt" content="DonHoster Web Hosting Miami - cPanel & WordPress Hosting" />
  
  {/* Additional Meta Tags */}
  <meta name="theme-color" content="#7c3aed" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="DonHoster Hosting" />
  
  {/* Schema.org - WebPage with Breadcrumb */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Web Hosting Miami | cPanel & WordPress Hosting",
      "url": "https://www.donhoster.com/web-hosting",
      "description": "Reliable and affordable web hosting in Miami with cPanel, free SSL certificates, WordPress optimization, and 24/7 technical support. Perfect for personal and business websites.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.donhoster.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Web Hosting",
            "item": "https://www.donhoster.com/web-hosting"
          }
        ]
      }
    })}
  </script>
  
  {/* Schema.org - Product Offers */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Web Hosting Plans Miami",
      "description": "Affordable cPanel web hosting plans in Miami with free SSL, unlimited bandwidth, and WordPress optimization",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Small Hosting",
            "description": "Entry-level web hosting with cPanel, 1.5GB storage, 15 email accounts, free SSL, and unlimited bandwidth",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "2.60",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=15"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "342"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Medium cPanel Hosting",
            "description": "Medium web hosting with cPanel, 2GB storage, 25 email accounts, free SSL, and unlimited bandwidth",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "3.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=17"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "428"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Large cPanel Hosting",
            "description": "Popular web hosting with cPanel, 3GB storage, 30 email accounts, free SSL, and unlimited bandwidth",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "7.50",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=18"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "567"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "Extra cPanel Hosting",
            "description": "Premium web hosting with cPanel, 5GB storage, 40 email accounts, free SSL, and unlimited bandwidth",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "11.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=20"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "389"
            }
          }
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
          "name": "What does the free migration include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We completely migrate your website from your current provider, including files, databases, emails, and configurations. The process is transparent with no downtime."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to activate my hosting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your account is activated instantly after payment. You will receive cPanel access details in less than 5 minutes to start configuring your website."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer uptime guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we guarantee 99.9% uptime. If we don't meet this promise, we automatically compensate the lost time with credit to your account."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change plans anytime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can upgrade or change your plan at any time from your control panel. Changes are immediate and hassle-free."
          }
        },
        {
          "@type": "Question",
          "name": "Is SSL certificate included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our plans include a free SSL certificate with automatic renewal. For higher plans, we include premium and wildcard SSL."
          }
        },
        {
          "@type": "Question",
          "name": "What technical support do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "24/7 technical support in English via chat, email, and phone. Our team specializes in hosting and can resolve any technical query."
          }
        }
      ]
    })}
  </script>
  
  {/* Schema.org - Service */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Hosting",
      "name": "cPanel Web Hosting Miami",
      "description": "Professional web hosting services with cPanel control panel, free SSL certificates, WordPress optimization, unlimited bandwidth, and 24/7 technical support",
      "provider": {
        "@type": "Organization",
        "name": "DonHoster",
        "url": "https://www.donhoster.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Miami, Florida, United States"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "2.60",
        "highPrice": "11.99",
        "priceCurrency": "USD",
        "offerCount": "4"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Hosting Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Small Hosting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium cPanel Hosting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Large cPanel Hosting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Extra cPanel Hosting"
            }
          }
        ]
      }
    })}
  </script>
  
  {/* Schema.org - SoftwareApplication (WordPress) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "WordPress Optimized Hosting",
      "applicationCategory": "WebApplication",
      "operatingSystem": "Linux",
      "offers": {
        "@type": "Offer",
        "price": "2.60",
        "priceCurrency": "USD"
      },
      "description": "WordPress specialized hosting with 1-click installation, premium themes, security plugins, automatic updates, and optimized cache for maximum performance"
    })}
  </script>
  
  {/* Schema.org - Organization Review */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DonHoster Web Hosting",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1726",
        "bestRating": "5",
        "worstRating": "1"
      }
    })}
  </script>
</Helmet>
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg')] bg-cover bg-center bg-black opacity-20"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Reliable and <span className="text-purple-400">Affordable</span> Hosting Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            WordPress-optimized web hosting with exceptional performance, 
            advanced security, and premium technical support.
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
              onClick={() => {
                document.getElementById("hosting-plans")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>View Hosting Plans</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section 
        id="hosting-plans"
        className={`py-16 lg:py-24 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Web Hosting Plans
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From personal projects to enterprise websites
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingPlans.map((plan, index) => (
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
                  <Globe className={`w-12 h-12 mx-auto mb-4 ${
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
                      <Globe className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>{plan.specs.websites}</span>
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
                      <Mail className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>{plan.specs.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className={`w-4 h-4 ${
                        plan.popular ? 'text-purple-200' : 'text-purple-600'
                      }`} />
                      <span className={
                        plan.popular 
                          ? 'text-white' 
                          : darkMode 
                          ? 'text-white' 
                          : 'text-gray-900'
                      }>{plan.specs.ssl}</span>
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
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hosting Advantages
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need for your website's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {benefit.title}
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WordPress Section */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Optimized for WordPress
              </h2>
              <p className={`text-xl mb-8 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                WordPress specialized hosting with all the necessary tools 
                to create professional websites quickly and securely.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    1-click WordPress installation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Premium themes included
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Pre-configured security plugins
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Automatic updates
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Optimized cache for maximum performance
                  </span>
                </div>
              </div>

              <motion.button
                onClick={() => {
                  document.getElementById("hosting-plans")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Start with WordPress</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
                alt="WordPress Hosting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Frequently Asked Questions About Hosting
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Everything you need to know about our hosting services
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
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                    darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${
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
                  <div className={`p-6 pt-0 ${
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
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to launch your website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our hosting 
            to grow their online presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              onClick={() => {
                document.getElementById("hosting-plans")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-lg transition-all duration-200"
            >
              Free Migration
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
};

export default WebHosting;