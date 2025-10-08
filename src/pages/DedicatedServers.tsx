import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Zap, 
  Globe,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database,
  AlertCircle,
  Loader2,
  Calculator,
  Shield
} from 'lucide-react';
import AnimatedSection from '../components/AnimateSection';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface RequestData {
  action?: string;
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  timestamp?: string;
  userIP?: string;
  [key: string]: string | undefined;
}

interface SubmissionResult {
  success: boolean;
  message?: string;
  emailExists?: boolean;
}

interface IPAttempt {
  ip: string;
  attempts: number;
  lastAttempt: number;
}

interface MathChallenge {
  num1: number;
  num2: number;
  operation: string;
  answer: number;
  question: string;
}

interface ServerPageProps {
  darkMode: boolean;
}

const DedicatedServers: React.FC<ServerPageProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMathChallenge, setShowMathChallenge] = useState(false);
  const [mathChallenge, setMathChallenge] = useState<MathChallenge | null>(null);
  const [userMathAnswer, setUserMathAnswer] = useState('');
  const [mathAttempts, setMathAttempts] = useState(0);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userIP, setUserIP] = useState<string>('');
  const [attemptCount, setAttemptCount] = useState<number>(0);

  const GAS_URL = 'https://script.google.com/macros/s/AKfycbwKAuEJsHSauBV0hq5JHvqi30BVX_tJdDjxVmezS0MCSPJqNI_EwiTfSPzYQ70w6eQSTA/exec';
  const MAX_ATTEMPTS = 4;
  const TIME_WINDOW_HOURS = 24;
  const MAX_MATH_ATTEMPTS = 3;

  useEffect(() => {
    getUserIP();
  }, []);

  useEffect(() => {
    if (userIP) {
      checkLocalAttempts();
    }
  }, [userIP]);

  const getUserIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setUserIP(data.ip);
    } catch (error) {
      console.error('Error getting IP:', error);
      setUserIP('unknown');
    }
  };

  const generateMathChallenge = (): MathChallenge => {
    const operations = [
      { op: '+', symbol: '+' },
      { op: '-', symbol: '-' },
      { op: '*', symbol: '×' }
    ];
    
    const selectedOp = operations[Math.floor(Math.random() * operations.length)];
    let num1: number, num2: number, answer: number;
    
    switch (selectedOp.op) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 50) + 25;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 2;
        num2 = Math.floor(Math.random() * 9) + 2;
        answer = num1 * num2;
        break;
      default:
        num1 = 2;
        num2 = 2;
        answer = 4;
    }
    
    return {
      num1,
      num2,
      operation: selectedOp.op,
      answer,
      question: `${num1} ${selectedOp.symbol} ${num2} = ?`
    };
  };

  const checkLocalAttempts = () => {
    try {
      const stored = localStorage.getItem('formAttempts');
      if (stored) {
        const attempts: IPAttempt[] = JSON.parse(stored);
        const now = Date.now();
        const windowStart = now - (TIME_WINDOW_HOURS * 60 * 60 * 1000);
        
        const validAttempts = attempts.filter(attempt => attempt.lastAttempt > windowStart);
        localStorage.setItem('formAttempts', JSON.stringify(validAttempts));
        
        const currentIP = attempts.find(attempt => attempt.ip === userIP);
        if (currentIP) {
          setAttemptCount(currentIP.attempts);
        }
      }
    } catch (error) {
      console.error('Error checking local attempts:', error);
    }
  };

  const recordLocalAttempt = (success: boolean = false) => {
    try {
      const stored = localStorage.getItem('formAttempts');
      let attempts: IPAttempt[] = stored ? JSON.parse(stored) : [];
      const now = Date.now();
      
      if (success) {
        attempts = attempts.filter(attempt => attempt.ip !== userIP);
        setAttemptCount(0);
      } else {
        const existingIndex = attempts.findIndex(attempt => attempt.ip === userIP);
        if (existingIndex >= 0) {
          attempts[existingIndex].attempts++;
          attempts[existingIndex].lastAttempt = now;
        } else {
          attempts.push({
            ip: userIP,
            attempts: 1,
            lastAttempt: now
          });
        }
        
        const currentAttempts = attempts.find(attempt => attempt.ip === userIP)?.attempts || 0;
        setAttemptCount(currentAttempts);
      }
      
      localStorage.setItem('formAttempts', JSON.stringify(attempts));
    } catch (error) {
      console.error('Error recording local attempt:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setMessage({ type: 'error', text: 'Name is required' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return false;
    }
    if (!formData.phone.trim()) {
      setMessage({ type: 'error', text: 'Phone number is required' });
      return false;
    }
    if (!formData.projectType) {
      setMessage({ type: 'error', text: 'Please select a project type' });
      return false;
    }
    if (!formData.message.trim()) {
      setMessage({ type: 'error', text: 'Please describe your project' });
      return false;
    }
    return true;
  };

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const checkData: RequestData = {
        action: 'checkEmail',
        email: email
      };

      const response = await submitToGoogleSheets(checkData);
      return response.emailExists || false;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  };

  const submitToGoogleSheets = async (data: RequestData): Promise<SubmissionResult> => {
    const methods = [
      async () => {
        await fetch(GAS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        return { success: true };
      },

      async () => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          const value = data[key];
          if (value !== undefined) {
            formData.append(key, value);
          }
        });
        
        await fetch(GAS_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
        
        return { success: true };
      },

      async () => {
        return new Promise<SubmissionResult>((resolve) => {
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = GAS_URL;
          form.target = '_blank';
          form.style.display = 'none';
          
          Object.keys(data).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            const value = data[key];
            input.value = value !== undefined ? value : '';
            form.appendChild(input);
          });
          
          document.body.appendChild(form);
          form.submit();
          document.body.removeChild(form);
          
          setTimeout(() => resolve({ success: true }), 1000);
        });
      }
    ];

    for (const method of methods) {
      try {
        const result = await method();
        return result;
      } catch (methodError) {
        console.log('Method failed, trying next:', methodError);
        continue;
      }
    }
    
    throw new Error('All submission methods failed');
  };

  const validateMathChallenge = (): boolean => {
    if (!mathChallenge || !userMathAnswer.trim()) {
      return false;
    }
    
    const userAnswer = parseInt(userMathAnswer.trim());
    return userAnswer === mathChallenge.answer;
  };

  const handleMathChallengeSubmit = () => {
    if (validateMathChallenge()) {
      setShowMathChallenge(false);
      setMathAttempts(0);
      setUserMathAnswer('');
      setMessage({ type: 'success', text: 'Validation successful. Sending form...' });
      setTimeout(() => proceedWithFormSubmission(), 1000);
    } else {
      const newAttempts = mathAttempts + 1;
      setMathAttempts(newAttempts);
      
      if (newAttempts >= MAX_MATH_ATTEMPTS) {
        setMessage({ 
          type: 'error', 
          text: 'Too many incorrect attempts. Please refresh the page and try again.' 
        });
        setShowMathChallenge(false);
        recordLocalAttempt(false);
        return;
      }
      
      setMessage({ 
        type: 'error', 
        text: `Incorrect answer. Attempt ${newAttempts} of ${MAX_MATH_ATTEMPTS}` 
      });
      setUserMathAnswer('');
      setMathChallenge(generateMathChallenge());
    }
  };

  const proceedWithFormSubmission = async () => {
    setIsSubmitting(true);
    
    try {
      await submitForm();
    } catch (error) {
      console.error('Error in proceedWithFormSubmission:', error);
      setMessage({
        type: 'error',
        text: 'Error processing the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitForm = async () => {
    try {
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setMessage({
          type: 'error',
          text: 'This email is already registered. Please use a different email.'
        });
        recordLocalAttempt(false);
        return;
      }

      const requestData: RequestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        timestamp: new Date().toISOString(),
        userIP: userIP
      };

      const result = await submitToGoogleSheets(requestData);
      handleSubmissionResult(result);
      
    } catch (error) {
      console.error('Error in submitForm:', error);
      recordLocalAttempt(false);
      setMessage({
        type: 'error',
        text: 'Connection error. Please try again.'
      });
    }
  };

  const handleSubmissionResult = (result: SubmissionResult) => {
    if (result.success) {
      setMessage({
        type: 'success',
        text: result.message || 'Request sent successfully. We will contact you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      
      recordLocalAttempt(true);
      setShowMathChallenge(false);
      setMathChallenge(null);
      setUserMathAnswer('');
      setMathAttempts(0);
    } else {
      recordLocalAttempt(false);
      
      if (result.emailExists) {
        setMessage({
          type: 'error',
          text: result.message || 'This email is already registered. Please use a different email.'
        });
      } else {
        setMessage({
          type: 'error',
          text: result.message || 'Server error. Please try again.'
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setMessage({ type: '', text: '' });

    const challenge = generateMathChallenge();
    setMathChallenge(challenge);
    setShowMathChallenge(true);
    setUserMathAnswer('');
    setMathAttempts(0);
  };

  const serverPlans = [
    {
      name: 'Small Dedicated Server - Miami',
      price: '60.00',
      setup: '0',
      specs: {
        cpu: 'Intel Dual Xeon 3.0 GHz',
        ram: '4 GB',
        storage: '500 GB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'Root access / Remote desktop',
        '24/7 Technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=2"
    },
    {
      name: 'Medium Dedicated Server - Miami',
      price: '82.00',
      setup: '0',
      popular: true,
      specs: {
        cpu: 'Intel Dual Xeon 3.0 GHz',
        ram: '8 GB',
        storage: '1 TB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'Root access / Remote desktop',
        '24/7 Technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=8"
    },
    {
      name: 'Large Dedicated Server - Miami',
      price: '120.00',
      setup: '0',
      specs: {
        cpu: 'Intel Dual Xeon 3.0 GHz',
        ram: '16 GB',
        storage: '1 TB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'Root access / Remote desktop',
        '24/7 Technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=9"
    },
    {
      name: 'Extra Large Dedicated Server - Miami',
      price: '220.00',
      setup: '0',
      specs: {
        cpu: 'Intel Dual Xeon 3.0 GHz',
        ram: '32 GB',
        storage: '2x1 TB HDD',
        bandwidth: 'Unlimited',
        connection: '1 Gbps'
      },
      features: [
        '1 Dedicated IP (IPv4)',
        'Root access / Remote desktop',
        '24/7 Technical support'
      ],
      url: "https://my.donhoster.com/cart.php?a=add&pid=10"
    }
  ];

  const useCases = [
    {
      icon: Monitor,
      title: 'Corporate Companies',
      description: 'Corporate websites with high traffic, internal applications, and enterprise management systems.'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Online stores with thousands of products, payment processing, and inventory management.'
    },
    {
      icon: Database,
      title: 'SaaS Applications',
      description: 'Software as a service, high-performance APIs, and complex web applications.'
    }
  ];

  const datacenterFeatures = [
    'Tier III+ Certification',
    'N+1 Power Redundancy',
    'Advanced Climate Control',
    '24/7 Physical Security',
    'Multiple Connectivity',
    'Continuous Monitoring'
  ];

  return (
    <>
import { Helmet } from 'react-helmet-async';

// Agregar esto al inicio del componente DedicatedServers, después de los useState

<Helmet>
  {/* Meta Tags Básicos */}
  <title>Dedicated Servers Miami | DonHoster</title>
  <meta
    name="description"
    content="Dedicated Servers Miami with enterprise hardware & 99% uptime. Intel Xeon processors, unlimited bandwidth, root access, 24/7 support from $60/mo. Premium performance."
  />
  <meta
    name="keywords"
    content="dedicated servers miami, bare metal servers, enterprise hosting, server rental, managed dedicated server, colocation miami, high performance servers"
  />
  <meta name="author" content="DonHoster" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="bingbot" content="index, follow" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://www.donhoster.com/dedicated-servers" />
  
  {/* Idioma y Geolocalización */}
  <meta name="language" content="English" />
  <meta name="geo.region" content="US-FL" />
  <meta name="geo.placename" content="Miami" />
  <meta name="geo.position" content="25.7617;-80.1918" />
  <meta name="ICBM" content="25.7617, -80.1918" />
  
  {/* Hreflang */}
  <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/dedicated-servers" />
  <link rel="alternate" hrefLang="es" href="https://www.donhoster.com/es/servidores-dedicados" />
  <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/dedicated-servers" />
  
  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Dedicated Servers Miami | Enterprise Hardware & 99% Uptime - DonHoster" />
  <meta
    property="og:description"
    content="Dedicated Servers Miami with enterprise hardware & 99% uptime. Intel Xeon processors, unlimited bandwidth, root access, 24/7 support from $60/mo."
  />
  <meta property="og:image" content="https://www.donhoster.com/images/dedicated-servers-og.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="DonHoster Dedicated Servers Miami - Enterprise Hardware" />
  <meta property="og:url" content="https://www.donhoster.com/dedicated-servers" />
  <meta property="og:site_name" content="DonHoster" />
  <meta property="og:locale" content="en_US" />
  
  {/* Twitter Cards */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dedicated Servers Miami | Enterprise Hardware & 99% Uptime - DonHoster" />
  <meta
    name="twitter:description"
    content="Dedicated Servers Miami with enterprise hardware & 99% uptime. Intel Xeon processors, unlimited bandwidth, root access, 24/7 support from $60/mo."
  />
  <meta name="twitter:image" content="https://www.donhoster.com/images/dedicated-servers-twitter.jpg" />
  <meta name="twitter:image:alt" content="DonHoster Dedicated Servers Miami - Enterprise Hardware" />
  
  {/* Additional Meta Tags */}
  <meta name="theme-color" content="#7c3aed" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="DonHoster Dedicated" />
  
  {/* Schema.org - WebPage with Breadcrumb */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dedicated Servers Miami | Enterprise Hardware",
      "url": "https://www.donhoster.com/dedicated-servers",
      "description": "High-performance dedicated servers in Miami with Intel Xeon processors, unlimited bandwidth, full root access, and 24/7 technical support. Perfect for corporate, e-commerce, and SaaS applications.",
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
            "name": "Dedicated Servers",
            "item": "https://www.donhoster.com/dedicated-servers"
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
      "name": "Dedicated Server Plans Miami",
      "description": "Enterprise-grade dedicated server hosting plans in Miami with Intel Xeon processors and unlimited bandwidth",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Small Dedicated Server - Miami",
            "description": "Entry dedicated server with Intel Dual Xeon 3.0 GHz, 4GB RAM, 500GB HDD, unlimited bandwidth, root access",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "60.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=2"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "reviewCount": "198"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Medium Dedicated Server - Miami",
            "description": "Popular dedicated server with Intel Dual Xeon 3.0 GHz, 8GB RAM, 1TB HDD, unlimited bandwidth, root access",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "82.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=8"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "287"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Large Dedicated Server - Miami",
            "description": "Advanced dedicated server with Intel Dual Xeon 3.0 GHz, 16GB RAM, 1TB HDD, unlimited bandwidth, root access",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "120.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=9"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "234"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "Extra Large Dedicated Server - Miami",
            "description": "Premium dedicated server with Intel Dual Xeon 3.0 GHz, 32GB RAM, 2x1TB HDD, unlimited bandwidth, root access",
            "brand": {
              "@type": "Brand",
              "name": "DonHoster"
            },
            "offers": {
              "@type": "Offer",
              "price": "220.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "url": "https://my.donhoster.com/cart.php?a=add&pid=10"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "176"
            }
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
      "serviceType": "Dedicated Server Hosting",
      "name": "Dedicated Servers Miami",
      "description": "Enterprise-grade dedicated server hosting in Miami with Intel Xeon processors, unlimited bandwidth, full root access, and 24/7 technical support. Ideal for corporate websites, e-commerce platforms, and SaaS applications.",
      "provider": {
        "@type": "Organization",
        "name": "DonHoster",
        "url": "https://www.donhoster.com",
        "logo": "https://www.donhoster.com/logo.png"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Miami, Florida, United States"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "60.00",
        "highPrice": "220.00",
        "priceCurrency": "USD",
        "offerCount": "4"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dedicated Server Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Small Dedicated Server"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium Dedicated Server"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Large Dedicated Server"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Extra Large Dedicated Server"
            }
          }
        ]
      }
    })}
  </script>
  
  {/* Schema.org - DataCenter */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "DonHoster Miami Data Center",
      "description": "Tier III+ certified data center in Miami with enterprise-grade infrastructure, N+1 power redundancy, advanced climate control, and 24/7 physical security",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.7617",
        "longitude": "-80.1918"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Tier III+ Certification",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "N+1 Power Redundancy",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "24/7 Physical Security",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Advanced Climate Control",
          "value": true
        }
      ]
    })}
  </script>
  
  {/* Schema.org - Use Cases */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dedicated Server Use Cases",
      "description": "Dedicated servers perfect for corporate websites, e-commerce platforms, and SaaS applications requiring maximum performance and reliability",
      "mainEntity": [
        {
          "@type": "Service",
          "name": "Corporate Dedicated Hosting",
          "description": "Enterprise-grade dedicated servers for corporate websites with high traffic, internal applications, and enterprise management systems"
        },
        {
          "@type": "Service",
          "name": "E-commerce Dedicated Hosting",
          "description": "High-performance dedicated servers for online stores with thousands of products, payment processing, and inventory management"
        },
        {
          "@type": "Service",
          "name": "SaaS Application Hosting",
          "description": "Scalable dedicated servers for Software as a Service platforms, high-performance APIs, and complex web applications"
        }
      ]
    })}
  </script>
  
  {/* Schema.org - ContactPoint */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English", "Spanish"],
      "areaServed": ["US", "LATAM", "ES"],
      "contactOption": "TollFree",
      "description": "Contact our sales team for customized dedicated server solutions and enterprise quotes"
    })}
  </script>
  
  {/* Schema.org - TechArticle (Features) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Miami Data Center Features",
      "description": "World-class Miami data center with Tier III+ certification, N+1 power redundancy, advanced climate control, 24/7 physical security, multiple connectivity options, and continuous monitoring",
      "about": {
        "@type": "Thing",
        "name": "Data Center Infrastructure"
      },
      "author": {
        "@type": "Organization",
        "name": "DonHoster"
      }
    })}
  </script>
  
  {/* Schema.org - Offer with Guarantee */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "Dedicated Server Hosting with 99% Uptime Guarantee",
      "description": "Enterprise dedicated servers with 99% uptime SLA guarantee, unlimited bandwidth, and 24/7 technical support",
      "seller": {
        "@type": "Organization",
        "name": "DonHoster"
      },
      "warranty": {
        "@type": "WarrantyPromise",
        "durationOfWarranty": {
          "@type": "QuantitativeValue",
          "value": "99",
          "unitText": "Percent Uptime"
        }
      }
    })}
  </script>
  
  {/* Schema.org - Organization Review */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "DonHoster Dedicated Servers",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "895",
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
        className={`min-h-screen pt-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      >
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black opacity-100"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg')] bg-cover bg-center bg-black opacity-20"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              High-Performance Dedicated <span className="text-purple-400">Servers</span> in Miami
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            >
              Full power for your business. Premium hardware, exceptional connectivity, and specialized technical support in Spanish.
            </motion.p>
          </div>
        </section>

        {/* Server Plans */}
        <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Dedicated Server Plans
              </h2>
              <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Guaranteed power and performance for your most demanding projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {serverPlans.map((plan, index) => (
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
                    <Server className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                    <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                        USD {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-purple-200' : darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        /month
                      </span>
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-purple-200' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Setup: ${plan.setup}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Specifications:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Cpu className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                          CPU: {plan.specs.cpu}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Database className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                          RAM: {plan.specs.ram}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <HardDrive className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                          Storage: {plan.specs.storage}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                          Bandwidth: {plan.specs.bandwidth}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                        <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                          Connection: {plan.specs.connection}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className={`font-semibold mb-3 ${plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-purple-200' : 'text-green-500'}`} />
                          <span className={plan.popular ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'}>
                            {feature}
                          </span>
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
                    <span>Hire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Datacenter Section */}
        <AnimatedSection className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Miami Data Center
                </h2>
                <p className={`text-xl mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Our servers are hosted in a world-class Miami data center, optimized connections for Spain and Latin America.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {datacenterFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <Link to="https://donhoster.es/sobre-nosotros"> 
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>See Certifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg"
                  alt="Miami Data Center"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Use Cases */}
        <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Use Cases
              </h2>
              <p className={`text-xl transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Perfect for enterprise projects requiring maximum performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
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
                      {useCase.title}
                    </h3>
                    <p className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {useCase.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Quote Form */}
        <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need a Customized Setup?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Our experts will help you find the perfect solution for your project.
              </p>

              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                {/* Attempt Counter */}
                {attemptCount > 0 && (
                  <div className="mb-4 p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-center text-sm">
                    Attempts: {attemptCount} of {MAX_ATTEMPTS}
                  </div>
                )}

                {/* Math Challenge Modal */}
                {showMathChallenge && mathChallenge && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-2xl p-8 max-w-md w-full shadow-2xl ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      }`}
                    >
                      <div className="text-center mb-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", duration: 0.6 }}
                          className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                            darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                          }`}
                        >
                          <Shield className="w-8 h-8 text-purple-600" />
                        </motion.div>
                        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Anti-Spam Verification
                        </h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          To confirm you are not a robot, solve this operation:
                        </p>
                      </div>

                      <div className={`rounded-xl p-6 mb-6 text-center ${
                        darkMode 
                          ? 'bg-purple-900/30 border border-purple-700' 
                          : 'bg-gradient-to-r from-purple-100 to-purple-200'
                      }`}>
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          <Calculator className="w-6 h-6 text-purple-600" />
                          <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                            {mathChallenge.question}
                          </span>
                        </div>
                        
                        <input
                          type="number"
                          value={userMathAnswer}
                          onChange={(e) => setUserMathAnswer(e.target.value)}
                          placeholder="Your answer..."
                          className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-center text-xl font-semibold ${
                            darkMode
                              ? 'bg-gray-700 border-purple-600 focus:border-purple-500 text-purple-400'
                              : 'bg-white border-purple-300 focus:border-purple-500 text-purple-600'
                          }`}
                          autoFocus
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleMathChallengeSubmit();
                            }
                          }}
                        />
                      </div>

                      {mathAttempts > 0 && (
                        <div className={`mb-4 p-3 rounded-lg text-center ${
                          darkMode
                            ? 'bg-red-900/30 border border-red-700'
                            : 'bg-red-50 border border-red-200'
                        }`}>
                          <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                            Attempt {mathAttempts} of {MAX_MATH_ATTEMPTS}
                          </p>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <motion.button
                          type="button"
                          onClick={() => {
                            setShowMathChallenge(false);
                            setMathChallenge(null);
                            setUserMathAnswer('');
                            setMathAttempts(0);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 px-4 py-3 rounded-lg transition-colors duration-200 font-semibold ${
                            darkMode
                              ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                          }`}
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={handleMathChallengeSubmit}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold"
                        >
                          Verify
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Message Display */}
                {message.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                      message.type === 'success' ? 'bg-green-500/20 border border-green-500/30' :
                      message.type === 'warning' ? 'bg-yellow-500/20 border border-yellow-500/30' :
                      'bg-red-500/20 border border-red-500/30'
                    }`}
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{message.text}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name *"
                    required
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business email *"
                    required
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone *"
                    required
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                  />
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                  >
                    <option className='text-purple-500' value="">Project type *</option>
                    <option className='text-purple-500' value="corporate">Corporate Site</option>
                    <option className='text-purple-500' value="ecommerce">E-commerce</option>
                    <option className='text-purple-500' value="saas">SaaS Application</option>
                    <option className='text-purple-500' value="other">Other</option>
                  </select>
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project and specific requirements... *"
                  rows={4}
                  required
                  className="w-full mt-6 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                ></textarea>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full mt-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
};

export default DedicatedServers;