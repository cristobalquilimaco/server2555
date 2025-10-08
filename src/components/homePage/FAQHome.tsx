import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQhomeProps {
  darkMode: boolean;
}

const FAQHome: React.FC<FAQhomeProps> = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What makes DonHoster’s servers stand out in Miami?",
      answer:
        "Our Miami data center offers ultra-low latency, high-speed connectivity, and enterprise-grade hardware optimized for performance and reliability. Perfect for businesses that demand stability and power.",
    },
    {
      question: "How fast is my server activated after purchase?",
      answer:
        "Dedicated servers are usually activated within 24 hours. VPS and Cloud instances are deployed instantly after payment confirmation.",
    },
    {
      question: "Can I upgrade or change my plan anytime?",
      answer:
        "Yes, all our plans are fully scalable. You can upgrade your server resources or switch to another plan at any time without downtime.",
    },
    {
      question: "Do you provide data backup services?",
      answer:
        "Absolutely. We perform automatic daily backups to ensure your data is always secure and recoverable at any moment.",
    },
    {
      question: "Is my data secure with DonHoster?",
      answer:
        "Yes. Our infrastructure is protected with advanced firewalls, DDoS protection, and 24/7 monitoring to keep your data safe from any threat.",
    },
    {
      question: "Does DonHoster offer free migration?",
      answer:
        "Yes. Our expert team will migrate your website or applications from any hosting provider to DonHoster at no additional cost.",
    },
    {
      question: "Is technical support available 24/7?",
      answer:
        "Definitely. Our specialized support team is available around the clock via chat, email, or phone to assist you whenever you need.",
    },
    {
      question: "Where are your data centers located?",
      answer:
        "Our main data center is located in Miami, Florida, strategically connected to major Internet exchange points, ensuring the best connectivity across the U.S. and Latin America.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-16 lg:py-24 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Find answers to the most common questions about our Dedicated Servers, VPS, and Cloud Hosting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden transition-colors duration-300 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-300 hover:${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
                  type="button"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                >
                  <h3
                    className={`font-semibold pr-4 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  id={`faq-panel-${index}`}
                  aria-labelledby={`faq-header-${index}`}
                  className={`overflow-hidden transition-[max-height,opacity,padding] duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 p-0'
                  }`}
                >
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHome;
