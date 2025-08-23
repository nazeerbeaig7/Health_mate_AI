import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Activity, 
  Heart, 
  Clock, 
  Calendar, 
  Droplet, 
  Zap, 
  Bell, 
  MessageCircle,
  User,
  Plus
} from 'lucide-react';
import HealthReminder from '../components/HealthReminder';
import InsightsDashboard from '../components/InsightsDashboard';
import WellnessTips from '../components/WellnessTips';
import EmergencySOS from '../components/EmergencySOS';

function Dashboard() {
  const { currentUser } = useAuth();
  const userName = currentUser?.displayName?.split(' ')[0] || 'there';
  
  const [healthMetrics, setHealthMetrics] = useState([
    { 
      id: 'steps',
      label: 'Steps', 
      value: 0, 
      icon: Activity, 
      color: 'bg-blue-100 text-blue-600',
      target: 10000,
      unit: ''
    },
    { 
      id: 'heartRate',
      label: 'Heart Rate', 
      value: 0, 
      icon: Heart, 
      color: 'bg-red-100 text-red-600',
      unit: 'BPM',
      status: '--'
    },
    { 
      id: 'sleep',
      label: 'Sleep', 
      value: 0, 
      icon: Clock, 
      color: 'bg-amber-100 text-amber-600',
      target: 8,
      unit: 'h'
    },
    { 
      id: 'water',
      label: 'Water Intake', 
      value: 0, 
      icon: Droplet, 
      color: 'bg-cyan-100 text-cyan-600',
      target: 3,
      unit: 'L'
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Quick actions (static for now)
  const quickActions = [
    { 
      id: 'bookAppointment',
      label: 'Book Appointment', 
      icon: Calendar, 
      color: 'bg-purple-100 text-purple-600',
      onClick: () => window.location.href = '/appointments'
    },
    { 
      id: 'logWorkout',
      label: 'Log Workout', 
      icon: Activity, 
      color: 'bg-blue-100 text-blue-600',
      onClick: () => logActivity('workout')
    },
    { 
      id: 'trackWater',
      label: 'Track Water', 
      icon: Droplet, 
      color: 'bg-cyan-100 text-cyan-600',
      onClick: () => updateMetric('water', 0.5)
    },
    { 
      id: 'emergencySOS',
      label: 'Emergency SOS', 
      icon: Zap, 
      color: 'bg-red-100 text-red-600',
      onClick: () => window.location.href = '/emergency'
    },
  ];

  // Simulate loading data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Initialize with some default values
      setHealthMetrics(prev => prev.map(metric => {
        const value = metric.id === 'heartRate' ? 72 : 0;
        return { ...metric, value };
      }));
      
      setRecentActivities([]);
      setIsLoading(false);
    };
    
    loadData();
  }, []);

  const updateMetric = (metricId, amount) => {
    setHealthMetrics(prev => 
      prev.map(metric => {
        if (metric.id === metricId) {
          const newValue = Math.max(0, metric.value + amount);
          const activity = {
            id: Date.now(),
            title: `Updated ${metric.label}`,
            time: `${newValue}${metric.unit}`,
            icon: metric.icon,
            timeAgo: 'Just now'
          };
          
          setRecentActivities(prev => [activity, ...prev].slice(0, 5));
          
          return { 
            ...metric, 
            value: newValue,
            status: metric.id === 'heartRate' ? getHeartRateStatus(newValue) : metric.status
          };
        }
        return metric;
      })
    );
  };

  const logActivity = (type) => {
    const activities = {
      workout: {
        title: 'Workout Completed',
        time: '30m',
        icon: Activity,
        action: () => updateMetric('steps', 1000)
      },
      water: {
        title: 'Water Intake',
        time: '0.5L',
        icon: Droplet,
        action: () => updateMetric('water', 0.5)
      },
      sleep: {
        title: 'Sleep Logged',
        time: '8h',
        icon: Clock,
        action: () => updateMetric('sleep', 1)
      }
    };
    
    const activity = activities[type] || {
      title: 'Activity Logged',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      icon: Activity
    };
    
    const newActivity = {
      id: Date.now(),
      ...activity,
      timeAgo: 'Just now'
    };
    
    setRecentActivities(prev => [newActivity, ...prev].slice(0, 5));
    
    if (activity.action) {
      activity.action();
    }
  };
  
  const getHeartRateStatus = (bpm) => {
    if (bpm < 60) return 'Low';
    if (bpm > 100) return 'High';
    return 'Normal';
  };
  
  const getMetricDisplay = (metric) => {
    if (metric.id === 'steps') {
      return metric.value.toLocaleString();
    }
    return `${metric.value}${metric.unit}`;
  };
  
  const getProgress = (metric) => {
    if (!metric.target) return 0;
    return Math.min(Math.round((metric.value / metric.target) * 100), 100);
  };
  
  const getChangeType = (metric) => {
    // This would come from comparing with previous data in a real app
    return metric.value > 0 ? 'increase' : 'neutral';
  };
  
  const getChangeText = (metric) => {
    // This would come from comparing with previous data in a real app
    if (metric.id === 'heartRate') return '';
    return metric.value > 0 ? `+${metric.value}${metric.unit}` : '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-500">Welcome back, {userName}! 👋</p>
            </div>
            <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center space-x-1 sm:space-x-3">
                <button 
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                </button>
                <div className="h-8 w-px bg-gray-200"></div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="hidden sm:inline text-sm font-medium text-gray-700">
                  {currentUser?.displayName || 'User'}
                </span>
                <div className="relative">
                  {currentUser?.photoURL ? (
                    <img 
                      className="h-9 w-9 rounded-full border-2 border-white shadow-sm" 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName || 'User'}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-white shadow-sm">
                      <User className="h-5 w-5" />
                    </div>
                  )}
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {quickActions.map((action) => (
            <button 
              key={action.id}
              onClick={action.onClick}
              className="group flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-transparent"
            >
              <div className={`p-3 rounded-full ${action.color} mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {healthMetrics.map((metric) => {
            const progress = getProgress(metric);
            const changeType = getChangeType(metric);
            const changeText = getChangeText(metric);
            
            return (
              <div 
                key={metric.id} 
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-transparent"
              >
                <div className="flex justify-between items-start">
                  <div className={`p-2.5 rounded-xl ${metric.color.split(' ')[0]} ${metric.color.includes('bg-') ? 'bg-opacity-10' : 'bg-opacity-20'} mb-4`}>
                    <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                  {changeText && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${changeType === 'increase' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      {changeType === 'increase' ? '↑ ' : '↓ '}{changeText}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{getMetricDisplay(metric)}</h3>
                <p className="text-sm text-gray-500 mb-4">{metric.label}</p>
                
                {metric.target !== undefined && (
                  <div className="space-y-2">
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          progress >= 100 ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-blue-400 to-blue-600'
                        }`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 flex justify-between items-center">
                      <span>{progress}%</span>
                      <span className="text-xs font-medium text-gray-900">
                        {progress >= 100 ? '🎉 Target achieved!' : `Target: ${metric.target}${metric.unit}`}
                      </span>
                    </p>
                  </div>
                )}
                
                {metric.status && (
                  <div className="mt-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      metric.status === 'Normal' ? 'bg-green-100 text-green-800' : 
                      metric.status === 'High' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                )}
                
                {metric.id === 'steps' && (
                  <button 
                    onClick={() => updateMetric('steps', 1000)}
                    className="mt-4 text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center group"
                  >
                    <span className="inline-flex items-center justify-center h-5 w-5 mr-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      <Plus className="h-3 w-3" />
                    </span>
                    Add Steps
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <InsightsDashboard />
            <WellnessTips />
            <HealthReminder />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="px-6 py-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <button 
                    onClick={() => setRecentActivities([])}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    disabled={recentActivities.length === 0}
                  >
                    Clear All
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {recentActivities.length > 0 ? (
                  recentActivities.map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${
                          activity.icon === Activity ? 'bg-blue-100 text-blue-600' : 
                          activity.icon === Droplet ? 'bg-cyan-100 text-cyan-600' : 'bg-purple-100 text-purple-600'
                        } mr-3`}>
                          <activity.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{activity.timeAgo}</p>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap ml-2">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-6">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-3">
                      <Activity className="h-5 w-5 text-gray-400" />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900">No activities yet</h4>
                    <p className="mt-1 text-sm text-gray-500">Get started by logging your first activity</p>
                    <button
                      onClick={() => logActivity('workout')}
                      className="mt-4 inline-flex items-center px-3.5 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <Plus className="h-3.5 w-3.5 mr-1.5" />
                      Log Workout
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <EmergencySOS />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;