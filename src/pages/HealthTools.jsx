import React, { useState } from 'react';
import { 
  Stethoscope, 
  Mic, 
  Image as ImageIcon, 
  Watch, 
  Utensils, 
  Award,
  Search,
  HeartPulse,
  Pill,
  Activity,
  CalendarCheck,
  FileText
} from 'lucide-react';

const tools = [
  {
    id: 'symptom-checker',
    title: 'Symptom Checker',
    description: 'Check your symptoms and get AI-powered health insights',
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600',
    comingSoon: false
  },
  {
    id: 'voice-assistant',
    title: 'Voice Assistant',
    description: 'Get health advice through voice commands',
    icon: Mic,
    color: 'bg-purple-100 text-purple-600',
    comingSoon: false
  },
  {
    id: 'skin-analysis',
    title: 'Skin Analysis',
    description: 'Upload images for AI-powered skin condition analysis',
    icon: ImageIcon,
    color: 'bg-green-100 text-green-600',
    comingSoon: false
  },
  {
    id: 'wearables',
    title: 'Wearable Sync',
    description: 'Connect your fitness tracker or smartwatch',
    icon: Watch,
    color: 'bg-amber-100 text-amber-600',
    comingSoon: false
  },
  {
    id: 'diet-planner',
    title: 'Diet & Nutrition',
    description: 'Personalized meal plans and nutrition tracking',
    icon: Utensils,
    color: 'bg-emerald-100 text-emerald-600',
    comingSoon: true
  },
  {
    id: 'health-challenges',
    title: 'Health Challenges',
    description: 'Join fun challenges to improve your wellbeing',
    icon: Award,
    color: 'bg-rose-100 text-rose-600',
    comingSoon: true
  },
  {
    id: 'medication-tracker',
    title: 'Medication Tracker',
    description: 'Never miss a dose with smart reminders',
    icon: Pill,
    color: 'bg-indigo-100 text-indigo-600',
    comingSoon: true
  },
  {
    id: 'fitness-planner',
    title: 'Fitness Planner',
    description: 'Custom workout plans based on your goals',
    icon: Activity,
    color: 'bg-cyan-100 text-cyan-600',
    comingSoon: true
  }
];

function HealthTools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'health', name: 'Health' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'monitoring', name: 'Monitoring' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || 
                          (activeCategory === 'health' && ['symptom-checker', 'voice-assistant', 'medication-tracker'].includes(tool.id)) ||
                          (activeCategory === 'fitness' && ['fitness-planner', 'health-challenges'].includes(tool.id)) ||
                          (activeCategory === 'nutrition' && ['diet-planner'].includes(tool.id)) ||
                          (activeCategory === 'monitoring' && ['wearables', 'skin-analysis'].includes(tool.id));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health & Wellness Tools</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access our suite of AI-powered health tools to monitor, track, and improve your wellbeing
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
                placeholder="Search health tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-1 space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-3 font-medium text-sm border-b-2 ${
                  activeCategory === category.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <div 
                key={tool.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 ${
                  tool.comingSoon ? 'opacity-75' : 'cursor-pointer hover:border-blue-200'
                }`}
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${tool.color} mb-4`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {tool.title}
                    {tool.comingSoon && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{tool.description}</p>
                  <div className="flex items-center text-sm text-blue-600 font-medium">
                    {!tool.comingSoon ? 'Open Tool' : 'Learn More'}
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No tools found</h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find any tools matching your search. Try different keywords.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Health Tips Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Looking for something else?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We're constantly adding new tools to help you manage your health. Let us know what you'd like to see next!
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <FileText className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Suggest a New Tool
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthTools;