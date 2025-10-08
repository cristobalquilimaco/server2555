import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PlansSection from '../components/PlansSection';
import WhyDonHosterSection from '../components/WhyDonHosterSection';
import LocationSection from '../components/LocationSection';
import FAQHome from '../components/homePage/FAQHome';
import CallToAction from '../components/contactPage/CallToAction';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicos */}
        <title>Dedicated Server Miami | DonHoster</title>
        <meta 
          name="description" 
          content="Dedicated Server Miami with 99% uptime and enterprise performance. Blazing-fast servers, VPS & cloud hosting with 24/7 support. Plans from $14/mo." 
        />
        <meta 
          name="keywords" 
          content="dedicated server miami, vps hosting miami, cloud hosting, server hosting miami, cheap dedicated server, enterprise hosting, colocation miami" 
        />
        <meta name="author" content="DonHoster" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.donhoster.com/" />
        
        {/* Idioma y Geolocalización */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Miami" />
        <meta name="geo.position" content="25.7617;-80.1918" />
        <meta name="ICBM" content="25.7617, -80.1918" />
        
        {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href="https://www.donhoster.com/" />
      <link rel="alternate" hrefLang="x-default" href="https://www.donhoster.com/" />
        
        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dedicated Server Miami | DonHoster - 99% Uptime Guaranteed" />
        <meta 
          property="og:description" 
          content="Dedicated Server Miami with 99% uptime and enterprise performance. Blazing-fast servers, VPS & cloud hosting with 24/7 support. Plans from $14/mo." 
        />
        <meta property="og:image" content="https://www.donhoster.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DonHoster - Dedicated Server Miami Data Center" />
        <meta property="og:url" content="https://www.donhoster.com/" />
        <meta property="og:site_name" content="DonHoster" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dedicated Server Miami | DonHoster - 99% Uptime Guaranteed" />
        <meta 
          name="twitter:description" 
          content="Dedicated Server Miami with 99% uptime reliability and enterprise-grade performance. Get blazing-fast dedicated servers, VPS hosting, and cloud solutions with 24/7 support." 
        />
        <meta name="twitter:image" content="https://www.donhoster.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="DonHoster - Dedicated Server Miami Data Center" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#9f00b4ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DonHoster" />
        <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
        <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa"></meta>

        {/* Schema.org Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DonHoster",
            "url": "https://www.donhoster.com",
            "description": "Dedicated Server Miami with 99% uptime reliability. High-performance hosting solutions including dedicated servers, VPS, and cloud hosting.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.donhoster.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Schema.org - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DonHoster",
            "url": "https://www.donhoster.com",
            "logo": "https://www.donhoster.com/logo.png",
            "description": "Leading provider of dedicated servers, VPS hosting, and cloud solutions in Miami with 99% uptime guarantee and 24/7 support.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "admin@donhoster.com",
              "areaServed": ["US", "LATAM"],
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/donhoster",
              "https://www.twitter.com/donhoster",
              "https://www.linkedin.com/company/donhoster"
            ]
          })}
        </script>
        
        {/* Schema.org - Service Offers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "VPS in Miami, FL - Small",
                  "description": "Small VPS server in Miami with 1GB RAM, 20GB storage, and unlimited bandwidth",
                  "offers": {
                    "@type": "Offer",
                    "price": "14",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "Dedicated Servers in Miami, FL - Medium",
                  "description": "Medium dedicated server with Intel Dual Xeon 3.0 Ghz, 8GB RAM, and 1TB HDD",
                  "offers": {
                    "@type": "Offer",
                    "price": "82",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Cloud VM Miami",
                  "description": "KVM Based Cloud Server in Miami with Intel Xeon processor and up to 32GB memory",
                  "offers": {
                    "@type": "Offer",
                    "price": "18.05",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "US/East Coast - Supermicro MicroCloud",
                  "description": "Bare Metal Dedicated Server in USA with Intel Xeon E3 processor and up to 32GB DDR3",
                  "offers": {
                    "@type": "Offer",
                    "price": "120",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2025-12-31"
                  }
                }
              }
            ]
          })}
        </script>
        
        {/* Schema.org - FAQ Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes DonHoster's servers stand out in Miami?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DonHoster provides enterprise-grade dedicated servers in Miami with 99% uptime reliability, blazing-fast performance, unbeatable security, and 24/7 expert support."
                }
              },
              {
                "@type": "Question",
                "name": "How fast is my server activated after purchase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Server activation is typically completed within a few hours after purchase, ensuring you can start deploying your applications quickly."
                }
              },
              {
                "@type": "Question",
                "name": "Can I upgrade or change my plan anytime?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can upgrade or change your hosting plan at any time to match your growing business needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide data backup services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, DonHoster provides 24/7 daily backup services to keep your data safe and secure."
                }
              },
              {
                "@type": "Question",
                "name": "Is my data secure with DonHoster?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We implement advanced security systems, proactive monitoring, and high-level security protocols to protect your business data."
                }
              },
              {
                "@type": "Question",
                "name": "Does DonHoster offer free migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer migration assistance to help you transfer your existing infrastructure to our Miami data center."
                }
              },
              {
                "@type": "Question",
                "name": "Is technical support available 24/7?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our world-class support team is available 24/7 to ensure your business stays operational with fast and reliable assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Where are your data centers located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our primary data center is located in Miami, Florida, serving as a pivotal hub within one of the world's largest internet exchanges, linking Latin America and the Northeast US."
                }
              }
            ]
          })}
        </script>
        
        {/* Schema.org - DataCenter */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "DonHoster Miami Data Center",
            "description": "State-of-the-art data center in Miami offering cutting-edge hosting solutions with top-tier infrastructure and connectivity",
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
            }
          })}
        </script>
        
        {/* Schema.org - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DonHoster",
            "image": "https://www.donhoster.com/logo.png",
            "@id": "https://www.donhoster.com",
            "url": "https://www.donhoster.com",
            "priceRange": "$14 - $120",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Miami Data Center",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.7617,
              "longitude": -80.1918
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/donhoster",
              "https://www.twitter.com/donhoster",
              "https://www.linkedin.com/company/donhoster"
            ]
          })}
        </script>
        
        {/* Schema.org - Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.donhoster.com/"
              }
            ]
          })}
        </script>
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
      
      <main>
        <HeroSection darkMode={darkMode} />
        <ServicesSection darkMode={darkMode} />
        <PlansSection darkMode={darkMode} />
        <WhyDonHosterSection darkMode={darkMode} />
        <LocationSection darkMode={darkMode} />
        <FAQHome darkMode={darkMode} />
        <CallToAction onContactClick={scrollToContact} />
      </main>
    </>
  );
};

export default Home;