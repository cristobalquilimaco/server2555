import React, { useState, useEffect } from 'react';
import { Server, Globe, HardDrive, Cloud, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  darkMode: boolean;
}

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  icon: React.ElementType;
  buttonText: string;
}

const services: Service[] = [
  {
    id: 'dedicated',
    title: 'Dedicated Server',
    subtitle: 'Miami',
    description: 'Dedicated Server Miami with 99% uptime reliability and enterprise-grade performance.',
    backgroundImage: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920',
    primaryColor: 'from-purple-700 via-purple-600 to-purple-800',
    secondaryColor: 'from-purple-900 via-gray-900 to-purple-800',
    accentColor: 'purple',
    icon: Server,
    buttonText: 'Dedicated Server'
  },
  {
    id: 'vps',
    title: 'Virtual Private',
    subtitle: 'Servers',
    description: 'Scalable VPS solutions with full root access and guaranteed resources for your applications.',
    backgroundImage: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920',
    primaryColor: 'from-blue-700 via-blue-600 to-cyan-700',
    secondaryColor: 'from-blue-900 via-gray-900 to-cyan-800',
    accentColor: 'purple',
    icon: HardDrive,
    buttonText: 'Explore VPS Plans'
  },
  {
    id: 'hosting',
    title: 'Web Hosting',
    subtitle: 'Solutions',
    description: 'Reliable shared hosting with cPanel, unlimited bandwidth and 24/7 technical support.',
    backgroundImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1920',
    primaryColor: 'from-emerald-700 via-emerald-600 to-teal-700',
    secondaryColor: 'from-emerald-900 via-gray-900 to-teal-800',
    accentColor: 'purple',
    icon: Globe,
    buttonText: 'View Hosting Plans'
  },
  {
    id: 'cloud',
    title: 'Cloud',
    subtitle: 'Infrastructure',
    description: 'Modern cloud infrastructure with auto-scaling, load balancing and global CDN coverage.',
    backgroundImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1920',
    primaryColor: 'from-orange-700 via-orange-600 to-red-700',
    secondaryColor: 'from-orange-900 via-gray-900 to-red-800',
    accentColor: 'purple',
    icon: Cloud,
    buttonText: 'Cloud Services'
  }
];

const HeroCarousel: React.FC<HeroCarouselProps> = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentService = services[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      setIsTransitioning(false);
    }, 400);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const IconComponent = currentService.icon;

  return (
    <section 
      className="relative h-[70vh] overflow-hidden transition-all duration-800 ease-in-out"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 transition-all duration-800">
        <img 
          src={currentService.backgroundImage}
          alt={currentService.title}
          className="w-full h-full object-cover transition-all duration-800"
        />
        <div className={`absolute inset-0 bg-gradient-to-br opacity-80 transition-all duration-800 ${
          darkMode ? currentService.secondaryColor : currentService.primaryColor
        }`}></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-20">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-20">
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

{/* Main Content */}
<div className="container mx-auto px-4 pt-24 pb-16 md:py-16 relative z-10 min-h-[70vh] flex items-center">
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
    {/* Left Content */}
    <div className="text-center lg:text-left">
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
        <div className="flex items-center justify-center lg:justify-start mb-4 md:mb-6">
          <div className={`p-3 md:p-4 rounded-2xl bg-gradient-to-r from-${currentService.accentColor}-400/20 to-${currentService.accentColor}-600/20 backdrop-blur-sm border border-white/10`}>
            <IconComponent className={`w-10 h-10 md:w-12 md:h-12 text-${currentService.accentColor}-300`} />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          <span className="block transition-all duration-700 delay-100">
            {currentService.title}
          </span>
          <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${currentService.accentColor}-300 to-pink-300 block transition-all duration-700 delay-200`}>
            {currentService.subtitle}
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-all duration-700 delay-300 max-w-2xl mx-auto lg:mx-0">
          {currentService.description}
        </p>

        <div className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 delay-500">
          <button className={`flex-1 sm:flex-none bg-${currentService.accentColor}-600 text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-${currentService.accentColor}-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${currentService.accentColor}-500/25 transform text-sm sm:text-base`}>
            {currentService.buttonText}
          </button>
          <button className={`flex-1 sm:flex-none border border-${currentService.accentColor}-300 text-${currentService.accentColor}-100 px-4 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-${currentService.accentColor}-700/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}>
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* Right Content - Animated Service Illustration */}
    <div className="relative hidden lg:block">
      <div className={`relative w-full h-96 flex items-center justify-center transition-all duration-500 ${isTransitioning ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
        {/* Central Icon with Glow */}
        <div className="absolute z-10">
          <div className="relative">
            <IconComponent className={`w-24 h-24 md:w-32 md:h-32 text-${currentService.accentColor}-300 animate-pulse-slow`} />
            <div className={`absolute inset-0 animate-ping opacity-20`}>
              <IconComponent className={`w-24 h-24 md:w-32 md:h-32 text-${currentService.accentColor}-200`} />
            </div>
            <div className={`absolute inset-0 blur-xl bg-${currentService.accentColor}-400/30 rounded-full animate-pulse`}></div>
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="absolute animate-spin-slow"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-120px)`,
                animationDuration: `${20 + index * 5}s`,
                animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
              }}
            >
              <div className="animate-counter-rotate">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-${currentService.accentColor}-400 to-white animate-pulse`}
                     style={{ animationDelay: `${index * 0.3}s` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Rays */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={`ray-${index}`}
              className={`absolute w-0.5 h-24 bg-gradient-to-t from-${currentService.accentColor}-400/50 to-transparent animate-pulse`}
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
                transformOrigin: 'center bottom',
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Service Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `bg-${currentService.accentColor}-400 scale-125`
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>

      {/* Service Names */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`text-center transition-all duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-white/70 text-sm font-medium tracking-wider uppercase">
            {currentService.id} • {currentIndex + 1} of {services.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;