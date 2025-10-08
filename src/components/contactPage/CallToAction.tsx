import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

interface CallToActionProps {
  onContactClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg lg:text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Our team is waiting to help you find the perfect solution for your digital project.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Button with controlled scroll */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact by Email
          </button>

          <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200">
            <MessageCircle className="w-5 h-5 mr-2" />
            Live Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
