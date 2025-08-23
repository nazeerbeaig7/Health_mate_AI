import React, { useState, useEffect } from 'react';
import { Lightbulb, RefreshCw, Droplets, Footprints, Moon, Heart, Sparkles } from 'lucide-react';

function WellnessTips() {
  const tips = [
    {
      id: 1,
      content: "Drink at least 8 glasses of water daily to stay hydrated and support your overall health.",
      category: "Hydration",
      icon: Droplets,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      content: "Take a 10-minute walk after meals to improve digestion and blood sugar control.",
      category: "Activity",
      icon: Footprints,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      content: "Practice deep breathing for 5 minutes daily to reduce stress and improve mental clarity.",
      category: "Mindfulness",
      icon: Heart,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      content: "Aim for 7-9 hours of quality sleep each night for optimal physical and mental recovery.",
      category: "Sleep",
      icon: Moon,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 5,
      content: "Incorporate strength training 2-3 times per week to maintain muscle mass and bone density.",
      category: "Fitness",
      icon: Sparkles,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  const [currentTip, setCurrentTip] = useState(tips[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNewTip = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const currentIndex = tips.findIndex(tip => tip.id === currentTip.id);
      const nextIndex = (currentIndex + 1) % tips.length;
      setCurrentTip(tips[nextIndex]);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-rotate tips every 15 seconds
  useEffect(() => {
    const timer = setInterval(handleNewTip, 15000);
    return () => clearInterval(timer);
  }, [currentTip]);

  const TipIcon = currentTip.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className={`p-2 rounded-lg ${currentTip.color} mr-3`}>
              <TipIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Daily Wellness Tip</h3>
              <span className="text-xs font-medium text-gray-500">{currentTip.category}</span>
            </div>
          </div>
          <div className="flex space-x-1">
            {tips.map((tip) => (
              <div 
                key={tip.id}
                className={`h-1.5 w-1.5 rounded-full ${currentTip.id === tip.id ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
        
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">{currentTip.content}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <span>Tip {tips.findIndex(tip => tip.id === currentTip.id) + 1} of {tips.length}</span>
            </div>
            <button
              onClick={handleNewTip}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Next tip"
            >
              Next tip
              <RefreshCw className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Did you find this helpful?</span>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WellnessTips;