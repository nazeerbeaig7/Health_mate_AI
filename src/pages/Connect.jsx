import React from 'react';
import DoctorConnect from '../components/DoctorConnect';
import { MessageCircle, Users, Phone, Mail, BookOpen, Tv, Award } from 'lucide-react';

function Connect() {
  const handleSupportChat = () => {
    alert("Support chat interface would open here");
  };

  const handleCommunityForum = () => {
    alert("Community forum would open here");
  };

  const handleEmergencyLine = () => {
    alert("Emergency hotline would be called");
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Connect & Support</h1>
        <p className="text-lg text-brand-subtle">Get help, connect with professionals, and join our community</p>
      </div>

      {/* Main Connect Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <DoctorConnect />
        
        {/* Support Options */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-6 w-6 text-brand-primary mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Support Center</h3>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={handleSupportChat}
              className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center justify-center shadow-md"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Live Chat Support
            </button>
            
            <button
              onClick={handleEmergencyLine}
              className="w-full bg-google-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              24/7 Emergency Line
            </button>
            
            <div className="flex items-center justify-center text-sm text-brand-subtle pt-2">
              <Mail className="h-4 w-4 mr-2" />
              support@healthmate.com
            </div>
          </div>
        </div>

        {/* Community */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-google-green mr-3" />
            <h3 className="text-xl font-semibold text-brand-text">Community</h3>
          </div>
          
          <p className="text-brand-subtle mb-4">Connect with others on similar health journeys</p>
          
          <div className="space-y-3">
            <div className="bg-white/20 p-3 rounded-lg text-center">
              <h4 className="font-semibold text-brand-text">Active Discussions</h4>
              <p className="text-sm text-google-green font-bold">1,247 members online</p>
            </div>
            
            <button
              onClick={handleCommunityForum}
              className="w-full bg-google-green text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-md"
            >
              Join Community Forum
            </button>
          </div>
        </div>

        {/* Resources */}
        <div className="glass-card p-6 rounded-xl shadow-glass">
          <h3 className="text-xl font-semibold text-brand-text mb-4">Health Resources</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <BookOpen className="h-6 w-6 text-brand-primary mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-brand-text">Health Library</h4>
                <p className="text-sm text-brand-subtle">Access medical articles and guides</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="h-6 w-6 text-google-yellow mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-brand-text">Wellness Programs</h4>
                <p className="text-sm text-brand-subtle">Join structured health improvement programs</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Tv className="h-6 w-6 text-google-red mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-brand-text">Expert Webinars</h4>
                <p className="text-sm text-brand-subtle">Attend live sessions with healthcare professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;