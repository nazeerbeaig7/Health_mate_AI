import React, { useState } from 'react';
import DoctorConnect from '../components/DoctorConnect';
import { 
  MessageCircle, 
  Users, 
  Phone, 
  Mail, 
  BookOpen, 
  Tv, 
  Award, 
  Search, 
  ArrowRight,
  HeartPulse,
  CalendarCheck,
  MessageSquare,
  Video,
  UserPlus,
  ChevronDown,
  Clock,
  ShieldCheck,
  Star,
  MessageSquareText
} from 'lucide-react';

function Connect() {
  const [activeTab, setActiveTab] = useState('doctors');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSupportChat = () => {
    // Implementation would go here
    console.log("Initiating support chat...");
  };

  const handleEmergencyCall = () => {
    // Implementation would go here
    console.log("Calling emergency line...");
  };

  const handleJoinCommunity = () => {
    // Implementation would go here
    console.log("Joining community...");
  };

  const doctors = [
    { 
      id: 1, 
      name: 'Dr. Sarah Johnson', 
      specialty: 'Cardiologist', 
      rating: 4.9, 
      reviews: 128, 
      available: true,
      languages: ['English', 'Spanish'],
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      nextAvailable: 'Today, 2:30 PM'
    },
    { 
      id: 2, 
      name: 'Dr. Michael Chen', 
      specialty: 'Dermatologist', 
      rating: 4.8, 
      reviews: 94, 
      available: true,
      languages: ['English', 'Mandarin'],
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      nextAvailable: 'Today, 3:45 PM'
    },
    { 
      id: 3, 
      name: 'Dr. Emily Wilson', 
      specialty: 'Pediatrician', 
      rating: 4.7, 
      reviews: 156, 
      available: false,
      languages: ['English', 'French'],
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      nextAvailable: 'Tomorrow, 9:00 AM'
    },
  ];

  const communityGroups = [
    { id: 1, name: 'Diabetes Support Group', members: '1.2k', online: 47 },
    { id: 2, name: 'Mental Health & Wellness', members: '3.4k', online: 128 },
    { id: 3, name: 'Fitness & Nutrition', members: '2.1k', online: 89 },
    { id: 4, name: 'Chronic Pain Warriors', members: '876', online: 32 },
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Heart Health',
      type: 'Article',
      duration: '8 min read',
      icon: HeartPulse,
      category: 'Cardiology'
    },
    {
      id: 2,
      title: 'Nutrition for Diabetes',
      type: 'Guide',
      duration: '12 min read',
      icon: BookOpen,
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'Managing Stress & Anxiety',
      type: 'Webinar',
      duration: '45 min',
      icon: Tv,
      category: 'Mental Health'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Care</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access healthcare professionals, join supportive communities, and find valuable resources
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                placeholder="Search doctors, topics, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-1 space-x-6">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`whitespace-nowrap px-4 py-4 font-medium text-sm border-b-2 ${
                activeTab === 'doctors'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <UserPlus className="h-5 w-5 mr-2" />
                Find a Doctor
              </div>
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`whitespace-nowrap px-4 py-4 font-medium text-sm border-b-2 ${
                activeTab === 'community'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Community
              </div>
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`whitespace-nowrap px-4 py-4 font-medium text-sm border-b-2 ${
                activeTab === 'resources'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Health Resources
              </div>
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`whitespace-nowrap px-4 py-4 font-medium text-sm border-b-2 ${
                activeTab === 'support'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <MessageSquareText className="h-5 w-5 mr-2" />
                Support
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'doctors' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Doctors</h2>
              <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                View all specialists
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="p-6">
                    <div className="flex items-start">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                          </div>
                          <div className="flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                            <Star className="h-3 w-3 mr-1 fill-current" />
                            {doctor.rating}
                          </div>
                        </div>
                        
                        <div className="mt-2 flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {doctor.nextAvailable}
                        </div>
                        
                        <div className="mt-3 flex flex-wrap gap-1">
                          {doctor.languages.map((lang, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {lang}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <button className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <Video className="h-4 w-4 mr-2" />
                            Video Visit
                          </button>
                          <button className="flex-1 flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'community' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Community Groups</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Create a group
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{group.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{group.members} members • {group.online} online now</p>
                    <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Join Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Health Resources</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Browse all resources
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
                    <div className="p-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {resource.type}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{resource.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{resource.category}</span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                          View
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {activeTab === 'support' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Get Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Live Support Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-100 text-green-600 mr-3">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Live Chat Support</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Chat with our support team for immediate assistance with any questions or concerns.</p>
                  <button 
                    onClick={handleSupportChat}
                    className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Start Chat
                  </button>
                </div>
              </div>
              
              {/* Emergency Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-red-100 text-red-600 mr-3">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Emergency Support</h3>
                  </div>
                  <p className="text-gray-600 mb-2">If this is a medical emergency, please call your local emergency number immediately.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <ShieldCheck className="h-4 w-4 mr-1 text-green-500" />
                    <span>24/7 Emergency Hotline: 911 (US) or 112 (EU)</span>
                  </div>
                  <button 
                    onClick={handleEmergencyCall}
                    className="w-full bg-red-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Call Emergency Services
                  </button>
                </div>
              </div>
              
              {/* Community Support */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden md:col-span-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Community Support</h3>
                  </div>
                  <p className="text-gray-600 mb-6">Connect with others who understand what you're going through in our supportive community forums.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleJoinCommunity}
                      className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Join Community
                    </button>
                    <button className="flex-1 border border-gray-300 bg-white text-gray-700 py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Browse Forums
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need more personalized help?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our team of healthcare professionals is here to provide you with the support and guidance you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Schedule a Consultation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;