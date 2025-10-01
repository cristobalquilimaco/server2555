import React from 'react';
import { Server } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-purple-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="animate-bounce">
            <Server className="w-20 h-20 text-purple-400 mx-auto animate-pulse" />
          </div>
          <div className="absolute inset-0 animate-ping">
            <Server className="w-20 h-20 text-purple-300 mx-auto opacity-30" />
          </div>
        </div>
        <div className="text-white text-2xl font-bold mb-4 animate-pulse">
          DONHOSTER
        </div>
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        </div>
        <div className="mt-4 text-purple-300 text-sm animate-fade-in">
          Initializing servers...
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
    </div>
  );
};

export default LoadingScreen;