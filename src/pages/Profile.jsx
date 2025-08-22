import React from 'react';
import HealthProfile from '../components/HealthProfile';
import PreventiveCare from '../components/PreventiveCare';
import MultilingualSupport from '../components/MultilingualSupport';
import { User, Shield, Globe } from 'lucide-react';

function Profile() {
  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Your Profile</h1>
        <p className="text-lg text-brand-subtle">Manage your health information and preferences</p>
      </div>

      {/* Profile Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <HealthProfile />
        <PreventiveCare />
        <MultilingualSupport />
        
        {/* Additional Profile Info */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-google-green mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Privacy & Security</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-brand-subtle">Data Encryption</span>
              <span className="text-google-green font-medium">Enabled</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-brand-subtle">Two-Factor Auth</span>
              <span className="text-google-green font-medium">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-brand-subtle">Data Sharing</span>
              <span className="text-brand-subtle font-medium">Restricted</span>
            </div>
          </div>
          <button className="w-full mt-6 bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors">
            Manage Privacy Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;