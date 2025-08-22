import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Smartphone, Moon, ChevronRight } from 'lucide-react';

function Settings() {
  const [notifications, setNotifications] = useState({
    appointments: true,
    medications: true,
    wellness: false,
    emergency: true
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Settings</h1>
        <p className="text-lg text-brand-subtle">Customize your HealthMate experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Notifications */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-6">
            <Bell className="h-6 w-6 text-google-yellow mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-brand-text capitalize font-medium">{key} Reminders</span>
                <button
                  onClick={() => handleNotificationChange(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-brand-primary' : 'bg-white/30'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-google-green mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Privacy & Security</h3>
          </div>
          
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg hover:bg-white/20 transition-colors flex justify-between items-center">
              <div>
                <div className="font-medium text-brand-text">Change Password</div>
                <div className="text-sm text-brand-subtle">Update your account password</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </button>
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-white/20 transition-colors flex justify-between items-center">
              <div>
                <div className="font-medium text-brand-text">Two-Factor Authentication</div>
                <div className="text-sm text-brand-subtle">Add an extra layer of security</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </button>
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-white/20 transition-colors flex justify-between items-center">
              <div>
                <div className="font-medium text-brand-text">Data Export</div>
                <div className="text-sm text-brand-subtle">Download your health data</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Device Integration */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-6">
            <Smartphone className="h-6 w-6 text-google-blue mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Device Integration</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
              <div>
                <div className="font-medium text-brand-text">Apple Health</div>
                <div className="text-sm text-google-green font-semibold">Connected</div>
              </div>
              <button className="text-sm font-semibold text-google-red hover:underline">Disconnect</button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
              <div>
                <div className="font-medium text-brand-text">Google Fit</div>
                <div className="text-sm text-brand-subtle">Not connected</div>
              </div>
              <button className="text-sm font-semibold text-brand-primary hover:underline">Connect</button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-white/20 rounded-lg">
              <div>
                <div className="font-medium text-brand-text">Fitbit</div>
                <div className="text-sm text-brand-subtle">Not connected</div>
              </div>
              <button className="text-sm font-semibold text-brand-primary hover:underline">Connect</button>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-6">
            <Moon className="h-6 w-6 text-brand-primary mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Appearance</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-brand-text font-medium">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  darkMode ? 'bg-brand-primary' : 'bg-white/30'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="space-y-2">
              <label className="text-brand-text font-medium">Language</label>
              <select className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-white">
                <option className='text-black'>English</option>
                <option className='text-black'>Spanish</option>
                <option className='text-black'>French</option>
                <option className='text-black'>German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;