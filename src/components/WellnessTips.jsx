import React, { useState } from 'react';
import { Lightbulb, RefreshCw } from 'lucide-react';

function WellnessTips() {
  const [currentTip, setCurrentTip] = useState("Drink at least 8 glasses of water daily to stay hydrated and support your overall health.");

  const tips = [
    "Drink at least 8 glasses of water daily to stay hydrated and support your overall health.",
    "Take a 10-minute walk after meals to improve digestion and blood sugar control.",
    "Practice deep breathing for 5 minutes daily to reduce stress and improve mental clarity.",
    "Aim for 7-9 hours of quality sleep each night for optimal physical and mental recovery."
  ];

  const handleNewTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-6 w-6 text-google-green mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Wellness Tips</h3>
      </div>
      
      <div className="bg-white/20 p-4 rounded-lg mb-6">
        <p className="text-brand-text text-sm leading-relaxed font-medium">{currentTip}</p>
      </div>
      
      <button
        onClick={handleNewTip}
        className="w-full bg-google-green text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-md"
      >
        <RefreshCw className="h-5 w-5 mr-2" />
        Get New Tip
      </button>
    </div>
  );
}

export default WellnessTips;