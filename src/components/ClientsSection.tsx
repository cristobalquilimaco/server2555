import React from 'react';
import { Building2 } from 'lucide-react';

interface ClientsSectionProps {
  darkMode: boolean;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ darkMode }) => {
  // Generate client placeholders
  const clients = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    name: `Client DonHoster${index + 1}`,
    logo: Building2
  }));

  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Trusted by Leading Companies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands of satisfied customers who rely on DonHoster for their hosting needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {clients.map((client) => {
            const LogoComponent = client.logo;
            return (
              <div
                key={client.id}
                className={`group p-6 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                    : 'bg-white hover:bg-gray-50 border border-gray-200'
                } hover:shadow-lg`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-lg mb-2 transition-colors duration-300 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <LogoComponent className={`w-6 h-6 transition-colors duration-300 ${
                      darkMode ? 'text-purple-400' : 'text-purple-600'
                    }`} />
                  </div>
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {client.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className={`text-lg font-medium transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to join them?
          </p>
          <button className="mt-4 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;