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

const ContactPage: React.FC<ContactPageProps> = () => {
  const contactRef = useRef<HTMLDivElement | null>(null); 

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth' });
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
    <Helmet>
      {/* Basic Configuration */}
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* SEO Meta Tags */}
      <title>24/7 Hosting Support & Contact | DonHoster</title>
      <meta name="description" content="24/7 Hosting Support & Contact. Get expert help with web hosting, VPS, dedicated servers. Fast response, technical support always available. Contact DonHoster today." />
      <meta 
        name="keywords" 
        content="contact donhoster, hosting support, 24/7 support, vps support, dedicated server support, technical support, hosting inquiries, server contact, miami hosting support, customer service" 
      />
      <meta name="author" content="DonHoster" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.donhoster.com/contact" />

      {/* Language and Geolocation */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Miami, Florida" />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/contact" />
      <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/contact" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="24/7 Hosting Support & Contact" />
      <meta property="og:description" content="24/7 Hosting Support & Contact. Get expert help with web hosting, VPS, dedicated servers. Fast response, technical support always available." />
      <meta property="og:image" content="https://www.donhoster.com/images/og-contact.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DonHoster 24/7 Hosting Support" />
      <meta property="og:url" content="https://www.donhoster.com/contact" />
      <meta property="og:site_name" content="DonHoster" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@donhoster" />
      <meta name="twitter:creator" content="@donhoster" />
      <meta name="twitter:title" content="24/7 Hosting Support & Contact" />
      <meta name="twitter:description" content="24/7 Hosting Support & Contact. Get expert help with web hosting, VPS, dedicated servers. Fast response, technical support always available." />
      <meta name="twitter:image" content="https://www.donhoster.com/images/og-contact.jpg" />
      <meta name="twitter:image:alt" content="DonHoster Contact Support" />

      {/* Schema.org - ContactPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact DonHoster",
          "description": "Contact DonHoster for hosting, VPS and dedicated server inquiries. 24/7 technical support available.",
          "url": "https://www.donhoster.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "DonHoster",
            "url": "https://www.donhoster.com",
            "email": "info@donhoster.com",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@donhoster.com",
                "availableLanguage": "English",
                "serviceArea": {
                  "@type": "Place",
                  "name": "United States"
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
              },
              {
                "@type": "ContactPoint",
                "contactType": "technical support",
                "email": "support@donhoster.com",
                "availableLanguage": "English",
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
            ],
            "sameAs": [
              "https://www.facebook.com/donhoster",
              "https://www.twitter.com/donhoster",
              "https://www.instagram.com/donhoster",
              "https://www.linkedin.com/company/donhoster"
            ]
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
              "name": "Contact",
              "item": "https://www.donhoster.com/contact"
            }
          ]
        })}
      </script>

      {/* Schema.org - FAQPage (si tienes FAQ en la página) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the response time for support inquiries?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our technical support team typically responds within 2 hours. We offer 24/7 support, 7 days a week for all our hosting services."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact DonHoster technical support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us via email at info@donhoster.com or through our contact form. Our support team is available 24/7 to assist you."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer support in English?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer full technical support in English for all our hosting, VPS, and dedicated server services."
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
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Mobile App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="DonHoster Contact" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#9333ea" />

      {/* Security */}
      <meta name="referrer" content="no-referrer-when-downgrade" />
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
