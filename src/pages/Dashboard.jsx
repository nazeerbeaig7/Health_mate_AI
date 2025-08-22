import React from 'react';
import { Activity, Heart, Clock, TrendingUp } from 'lucide-react';
import InsightsDashboard from '../components/InsightsDashboard';
import WellnessTips from '../components/WellnessTips';
import Reminders from '../components/Reminders';
import EmergencySOS from '../components/EmergencySOS';

function Dashboard() {
  const quickStats = [
    { label: 'Steps Today', value: '8,432', icon: Activity, color: 'text-google-blue' },
    { label: 'Heart Rate', value: '72 BPM', icon: Heart, color: 'text-google-red' },
    { label: 'Sleep', value: '7.5 hrs', icon: Clock, color: 'text-google-yellow' },
    { label: 'Health Score', value: '85%', icon: TrendingUp, color: 'text-google-green' },
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-welcome-gradient rounded-xl p-6 text-white shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
          <p className="opacity-90 text-lg">Here's your health overview for today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="glass-card p-4 rounded-xl shadow-glass transition-transform transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-full bg-white/20 mb-3`}>
                  <Icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-brand-text">{stat.value}</p>
                <p className="text-md text-brand-subtle font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InsightsDashboard />
          <WellnessTips />
          <Reminders />
          <EmergencySOS />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;