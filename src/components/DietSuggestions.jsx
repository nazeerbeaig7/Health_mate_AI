import React, { useState } from 'react';
import { Apple, RefreshCw } from 'lucide-react';

function DietSuggestions() {
  const [currentMeal, setCurrentMeal] = useState({
    name: "Mediterranean Bowl",
    calories: 450,
    ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Feta cheese", "Olive oil"]
  });

  const handleNewSuggestion = () => {
    alert("AI-powered meal recommendations would be generated here");
  };

  const handleTrackMeal = () => {
    alert("Meal tracking and nutrition logging would be activated here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Apple className="h-6 w-6 text-google-green mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Diet Suggestions</h3>
      </div>
      
      <div className="bg-white/20 p-4 rounded-lg mb-6">
        <h4 className="font-semibold text-brand-text">{currentMeal.name}</h4>
        <p className="text-sm text-brand-subtle mb-2">{currentMeal.calories} calories</p>
        <div className="text-xs text-brand-subtle font-medium">
          {currentMeal.ingredients.join(" • ")}
        </div>
      </div>
      
      <div className="space-y-3">
        <button
          onClick={handleTrackMeal}
          className="w-full bg-google-green text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-md"
        >
          Track This Meal
        </button>
        <button
          onClick={handleNewSuggestion}
          className="w-full bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Get New Suggestion
        </button>
      </div>
    </div>
  );
}

export default DietSuggestions;