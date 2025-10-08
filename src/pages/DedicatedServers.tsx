import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReCAPTCHA from 'react-google-recaptcha';

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
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  captchaToken: string | null;
  timestamp: string;
  userIP: string;
}

interface SubmissionResult {
  success: boolean;
  message?: string;
  emailExists?: boolean;
  requiresCaptcha?: boolean;
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

interface ServerPageProps{
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
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [showMathChallenge, setShowMathChallenge] = useState(false);
  const [mathChallenge, setMathChallenge] = useState<MathChallenge | null>(null);
  const [userMathAnswer, setUserMathAnswer] = useState('');
  const [mathAttempts, setMathAttempts] = useState(0);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [userIP, setUserIP] = useState<string>('');
  const [attemptCount, setAttemptCount] = useState<number>(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const RECAPTCHA_SITE_KEY = "6LfiuLArAAAAADoOfpT7SkSPAp0yt30Dokg-qUQ1";
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbwKAuEJsHSauBV0hq5JHvqi30BVX_tJdDjxVmezS0MCSPJqNI_EwiTfSPzYQ70w6eQSTA/exec';
  const MAX_ATTEMPTS = 4;
  const TIME_WINDOW_HOURS = 24;
  const MAX_MATH_ATTEMPTS = 3;

  useEffect(() => {
    getUserIP();
    checkLocalAttempts();
  }, []);

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
        if (currentIP && currentIP.attempts >= MAX_ATTEMPTS) {
          setShowCaptcha(true);
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
        setShowCaptcha(false);
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
        
        if (currentAttempts >= MAX_ATTEMPTS) {
          setShowCaptcha(true);
        }
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
      const checkData: Record<string, string> = {
        action: 'checkEmail',
        email: email
      };

      const response = await submitToGoogleSheets(checkData as RequestData);
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
          formData.append(key, (data as Record<string, string>)[key] || '');
        });
        
        await fetch(GAS_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
        
        return { success: true };
      },

      async () => {
        return new Promise((resolve) => {
          const form = document.createElement('form');
          form.method = 'POST';
          form.action = GAS_URL;
          form.target = '_blank';
          form.style.display = 'none';
          
          Object.keys(data).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = (data as Record<string, string>)[key] || '';
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
      if (showCaptcha) {
        const captchaToken = recaptchaRef.current?.getValue();
        if (!captchaToken) {
          setMessage({ type: 'error', text: 'Please complete the reCAPTCHA verification' });
          setIsSubmitting(false);
          return;
        }
        await submitForm(captchaToken);
      } else {
        await submitForm();
      }
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

  const submitForm = async (captchaToken: string | null = null) => {
    try {
      if (!captchaToken) {
        const emailExists = await checkEmailExists(formData.email);
        if (emailExists) {
          setMessage({
            type: 'error',
            text: 'This email is already registered. Please use a different email.'
          });
          recordLocalAttempt(false);
          return;
        }
      }

      const requestData: RequestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        message: formData.message,
        captchaToken,
        timestamp: new Date().toISOString(),
        userIP: userIP
      };

      console.log('Sending data:', requestData);

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
      setShowCaptcha(false);
      setShowMathChallenge(false);
      setMathChallenge(null);
      setUserMathAnswer('');
      setMathAttempts(0);
      
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } else {
      recordLocalAttempt(false);
      
      if (result.emailExists) {
        setMessage({
          type: 'error',
          text: result.message || 'This email is already registered. Please use a different email.'
        });
      } else if (result.requiresCaptcha) {
        setShowCaptcha(true);
        setMessage({
          type: 'warning',
          text: result.message || 'Multiple attempts detected. Please complete the verification.'
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
      url: "https://my.donhoster.com/cart.php?a=add&pid=2&_gl=1*124z2fw*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      url: "https://my.donhoster.com/cart.php?a=add&pid=8&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      url: "https://my.donhoster.com/cart.php?a=add&pid=9&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      url: "https://my.donhoster.com/cart.php?a=add&pid=10&_gl=1*1s6hjcc*_gcl_au*MjEwNTg2ODAwMS4xNzUyMDIxODc2*_ga*MTg1NzgxNzE3MS4xNzA4MjcxMTE4*_ga_E8HRCWRKGG*czE3NTYwNDE0ODYkbzE1NyRnMSR0MTc1NjA0MzQ1MiRqNjAkbDAkaDA."
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
      <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Dedicated Server Plans
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
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
                  <Server className={`w-12 h-12 mx-auto mb-4 ${
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
                    }>CPU: {plan.specs.cpu}</span>
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
                    }>Storage: {plan.specs.storage}</span>
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
                      <Globe className={`w-4 h-4 ${
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
                  <span>Hire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>


      {/* Datacenter Section */}
      <AnimatedSection className={`py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Miami Data Center
              </h2>
              <p className={`text-xl mb-8 transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
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
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
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
      <AnimatedSection className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Use Cases
            </h2>
            <p className={`text-xl transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
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
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
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
                  {attemptCount >= MAX_ATTEMPTS && ' - Verification required'}
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
                      <h3 className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Anti-Spam Verification
                      </h3>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
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
                        <span className={`text-2xl font-bold ${
                          darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`}>
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
                        <p className={`text-sm ${
                          darkMode ? 'text-red-400' : 'text-red-600'
                        }`}>
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
                  name="nombre"
                  value={formData.nombre}
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
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="Phone *"
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
                />
                <select 
                  name="tipoProyecto"
                  value={formData.tipoProyecto}
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
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Tell us about your project and specific requirements... *"
                rows={4}
                required
                className="w-full mt-6 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 transition-colors duration-300"
              ></textarea>


              {/* reCAPTCHA */}
              {showCaptcha && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 flex justify-center"
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    theme="dark"
                  />
                </motion.div>
              )}
              
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
  );
};


export default DedicatedServers;
