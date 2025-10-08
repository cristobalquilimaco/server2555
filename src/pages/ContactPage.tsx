import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Clock } from 'lucide-react';
import ContactInfoCard from '../components/contactPage/ContactInfoCard';
import ContactForm from '../components/contactPage/ContactFormWH';
import DataCenterMap from '../components/contactPage/DataCenterMap';
import FAQ from '../components/contactPage/FAQ';
import CallToAction from '../components/contactPage/CallToAction';
import { Helmet } from 'react-helmet-async';

interface ContactPageProps{
  darkMode: boolean;
}

const ContactPage: React.FC<ContactPageProps> = (darkMode) => {
  const contactRef = useRef<HTMLDivElement | null>(null); 

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth' });
  }

  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - DonHoster Spain",
    "description": "Contact DonHoster for hosting, VPS and dedicated server inquiries. 24/7 technical support in Spanish.",
    "url": "https://donhoster.es/contacto",
    "mainEntity": {
      "@type": "Organization",
      "name": "DonHoster",
      "url": "https://donhoster.com",
      "email": "info@donhoster.es",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@donhoster.es",
          "availableLanguage": ["English"],
          "serviceArea": {
            "@type": "Place",
            "name": "Donhoster"
          },
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", 
              "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      ]
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://donhoster.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://donhoster.com/contact"
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <Helmet>
        <title>24/7 Hosting Support | DonHoster</title>
        <meta
          name="description"
          content="Contact DonHoster Spain for inquiries about web hosting, VPS, and dedicated servers. 24/7 technical support in Spanish. Response in less than 2 hours."
        />
        <meta
          name="keywords"
          content="contact donhoster, hosting support, vps inquiries, spanish tech support, miami hosting, server contact"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://donhoster.es/contacto" />
        <meta name="author" content="DonHoster Spain" />
        <meta name="copyright" content="© 2025 DonHoster Spain" />
        <meta httpEquiv="content-language" content="es-ES" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#7c3aed" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DonHoster Spain" />
        <meta property="og:title" content="Contact DonHoster Spain - 24/7 Hosting Support" />
        <meta
          property="og:description"
          content="Contact our hosting experts. 24/7 technical support in Spanish for hosting, VPS, and dedicated servers."
        />
        <meta property="og:url" content="https://donhoster.es/contacto" />
        <meta property="og:image" content="https://donhoster.es/assets/og-contacto-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@donhoster" />
        <meta name="twitter:title" content="Contact DonHoster Spain - 24/7 Hosting Support" />
        <meta name="twitter:description" content="Specialized technical support for hosting, VPS, and dedicated servers. Fast response in Spanish." />
        <meta name="twitter:image" content="https://donhoster.es/assets/twitter-contacto-card.jpg" />
        <meta name="twitter:url" content="https://donhoster.es/contacto" />
        <link rel="alternate" hrefLang="es" href="https://donhoster.es/contacto" />
        <link rel="alternate" hrefLang="en" href="https://donhoster.es/en/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://donhoster.es/contacto" />
        <script type="application/ld+json">
          {JSON.stringify(contactPageStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto"
          >
            Our team of experts is here to help you find the perfect solution for your digital infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactInfoCard
              icon={Mail}
              title="Email"
              subtitle="info@donhoster.com"
              description="Response within 2 hours"
            />
            <ContactInfoCard
              icon={Clock}
              title="Support Hours"
              subtitle="24 hours, 7 days a week"
              description="Technical support always available"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contactRef} className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-8">
                <MessageCircle className="w-8 h-8 text-purple-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
              </div>
              <ContactForm />
            </div>

            {/* Data Center Map */}
            <DataCenterMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Call to Action */}
      <CallToAction onContactClick={scrollToContact} />
    </motion.div>
  );
};

export default ContactPage;
