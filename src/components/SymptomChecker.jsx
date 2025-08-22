import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

function SymptomChecker() {
  const [symptom, setSymptom] = useState('');

  const handleCheck = () => {
    alert("AI symptom analysis would be processed here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <AlertCircle className="h-6 w-6 text-google-red mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Symptom Checker</h3>
      </div>
      
      <p className="text-brand-subtle mb-4">Describe your symptoms for AI-powered health insights</p>
      
      <div className="space-y-4">
        <textarea
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="Describe your symptoms..."
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors text-white placeholder-gray-300"
          rows={3}
        />
        
        <button
          onClick={handleCheck}
          className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center justify-center shadow-md"
        >
          <Search className="h-5 w-5 mr-2" />
          Analyze Symptoms
        </button>
      </div>
    </div>
  );
}

export default SymptomChecker;