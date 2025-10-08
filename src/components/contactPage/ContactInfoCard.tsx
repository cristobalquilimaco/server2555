import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-lg text-purple-600 font-semibold mb-2">{subtitle}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ContactInfoCard;
