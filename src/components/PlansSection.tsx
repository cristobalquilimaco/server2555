import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Server, Cloud, Cpu, HardDrive } from 'lucide-react';

interface PlansSectionProps {
  darkMode: boolean;
}

const PlansSection: React.FC<PlansSectionProps> = ({ darkMode }) => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'vps-small',
      name: 'VPS in Miami, FL - Small',
      price: '$14',
      period: 'USD/mo',
      icon: Server,
      features: [
        '3.3 Ghz Xeon E3-1230 CPU x1',
        '1 GB Memory RAM',
        '20 GB Hard Drive',
        '1 IPv4 IP addresses',
        'Unlimited Bandwidth',
        '24/7 Support'
      ],
      url: 'https://my.donhoster.com/cart.php?a=add&pid=1',
      popular: false
    },
    {
      id: 'dedicated-medium',
      name: 'Dedicated Servers in Miami, FL - Medium',
      price: '$82',
      period: 'USD/mo',
      icon: Cpu,
      features: [
        'Intel Dual Xeon 3.0 Ghz',
        '8 GB RAM Memory',
        '1 TB HHD',
        '1 IP (IPv4)',
        'Root access / Remote Desktop',
        '24/7 support'
      ],
      url: 'https://my.donhoster.com/cart.php?a=add&pid=2',
      popular: true
    },
    {
      id: 'cloud-vps-essential',
      name: 'Cloud VPS Essential',
      price: '$23',
      period: 'USD/mo',
      icon: Cloud,
      features: [
        'KVM Based Cloud Server in Miami',
        'Includes industry leading server control panel',
        'Intel Xeon processor families',
        'Up to 32GB memory support',
        'Up to 2TB SAN storage',
        'Cloud Hosted Infrastructure',
        'Redundant Power & Connectivity'
      ],
      url: 'https://my.donhoster.com/cart.php?a=add&pid=7',
      popular: false
    },
{
  id: 'reseller-hosting',
  name: 'Hosting Reseller - coming soon...',
  price: '$5',
  period: 'USD/mo',
  icon: HardDrive,
  features: [
    'Reseller Hosting Mx',
    '20 cPanel Accounts',
    'Includes SSL Certificate Free',
    'White Label - Custom DNS',
    '5GB SSD Disc Space',
    'Technical Support 24/7'
  ],
  url: '/contact',
  popular: false,
  comingSoon: true
}

  ];

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800'
          : 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Miami Dedicated Server Plans
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto">
            Explore our high-performance dedicated server hosting plans Miami. Choose the perfect solution for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-purple-400 shadow-2xl shadow-purple-500/25'
                    : darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                } hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex p-3 bg-purple-600 rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 h-12">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-purple-200 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

<button
  id={`choose-plan-${plan.id}`}
  onClick={() => navigate(plan.url)}
  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
    plan.comingSoon
      ? 'bg-gray-500 text-white cursor-pointer hover:bg-gray-600'
      : plan.popular
      ? 'bg-white text-purple-600 hover:bg-gray-100'
      : 'bg-purple-600 text-white hover:bg-purple-700'
  }`}
>
  {plan.comingSoon ? 'Coming Soon' : 'Choose Plan'}
</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
