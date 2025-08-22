import React, { useState } from 'react';
import { Trophy, Star } from 'lucide-react';

function Gamification() {
  const [points, setPoints] = useState(1250);
  const [level, setLevel] = useState(3);

  const handleCompleteChallenge = () => {
    alert("Challenge completion system would activate here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Trophy className="h-6 w-6 text-google-yellow mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Health Challenges</h3>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-sm">
          <span className="text-brand-subtle">Current Level</span>
          <span className="font-semibold text-google-yellow">Level {level}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-brand-subtle">Health Points</span>
          <span className="font-semibold text-google-green">{points} pts</span>
        </div>
        
        <div className="bg-white/20 rounded-full h-2.5">
          <div className="bg-google-yellow h-2.5 rounded-full" style={{width: '75%'}}></div>
        </div>
      </div>
      
      <div className="mb-6 p-3 bg-white/20 rounded-lg">
        <h4 className="text-sm font-semibold text-brand-text mb-1">Today's Challenge:</h4>
        <p className="text-sm text-brand-subtle">Walk 10,000 steps</p>
      </div>
      
      <button
        onClick={handleCompleteChallenge}
        className="w-full bg-google-yellow text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-md"
      >
        <Star className="h-5 w-5 mr-2" />
        View Challenges
      </button>
    </div>
  );
}

export default Gamification;