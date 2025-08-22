import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

function InsightsDashboard() {
  const handleViewDetails = () => {
    alert("Detailed health analytics would be displayed here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <BarChart3 className="h-6 w-6 text-brand-primary mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Health Insights</h3>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-brand-subtle">Steps Today</span>
          <span className="font-semibold text-google-green">8,432</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-brand-subtle">Sleep Quality</span>
          <span className="font-semibold text-google-blue">85%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-brand-subtle">Heart Rate Avg</span>
          <span className="font-semibold text-google-red">72 BPM</span>
        </div>
      </div>
      
      <button
        onClick={handleViewDetails}
        className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center justify-center shadow-md"
      >
        <TrendingUp className="h-5 w-5 mr-2" />
        View Detailed Analytics
      </button>
    </div>
  );
}

export default InsightsDashboard;