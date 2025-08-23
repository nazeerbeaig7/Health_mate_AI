import React from 'react';
import { BarChart3, TrendingUp, Heart, Moon, Footprints } from 'lucide-react';

function InsightsDashboard() {
  const handleViewDetails = () => {
    alert("Detailed health analytics would be displayed here");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 mr-4">
            <BarChart3 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Health Insights</h3>
        </div>
        
        {/* Metrics */}
        <div className="space-y-5 mb-6">
          {/* Steps */}
          <div>
            <div className="flex items-center mb-1">
              <Footprints className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm font-medium text-gray-500">Steps Today</span>
              <span className="ml-auto font-semibold text-green-600">8,432</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '84%' }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">1,168 steps to goal</div>
          </div>
          
          {/* Sleep Quality */}
          <div>
            <div className="flex items-center mb-1">
              <Moon className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-gray-500">Sleep Quality</span>
              <span className="ml-auto font-semibold text-blue-600">85%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: '85%' }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Great job! Better than 72% of users</div>
          </div>
          
          {/* Heart Rate */}
          <div>
            <div className="flex items-center mb-1">
              <Heart className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm font-medium text-gray-500">Heart Rate Avg</span>
              <span className="ml-auto font-semibold text-red-600">72 BPM</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
              <div 
                className="bg-red-500 h-2 rounded-full" 
                style={{ width: '60%' }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Resting heart rate</div>
          </div>
        </div>
        
        {/* View Button */}
        <button 
          onClick={handleViewDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          View Detailed Analytics
        </button>
      </div>
    </div>
  );
}

export default InsightsDashboard;