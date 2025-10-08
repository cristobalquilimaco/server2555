import React from 'react';
import { MapPin, Shield, Clock, Globe } from 'lucide-react';

const DataCenterMap: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Data Center Location */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <MapPin className="w-6 h-6 text-purple-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Data Center - Miami, Florida</h3>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <div className="relative">
            <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg relative overflow-hidden">
              {/* Simplified map representation */}
              <div className="absolute inset-0 bg-blue-500">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-semibold text-gray-800 shadow-lg">
                    Miami, FL
                  </div>
                </div>
                {/* Florida outline simplified */}
                <div className="absolute top-1/3 right-1/3 w-16 h-20 border-2 border-white rounded-br-full opacity-50"></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              Active Data Center
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              Miami, Florida
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p className="mb-2">✓ High-speed services: seamless hosting integration.</p>
          <p>✓ Average response time: 2 minutes</p>
        </div>
      </div>

      {/* Technical Support */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-green-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">Technical Support</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Every day</span>
            <span className="text-green-600 font-bold text-xl">24 hours</span>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>Support available</p>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-800">Live chat</span>
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Email</span>
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Phone (Coming Soon)</span>
            </div>
            <p className="text-xs text-gray-500">
              Average response time: 2 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterMap;
