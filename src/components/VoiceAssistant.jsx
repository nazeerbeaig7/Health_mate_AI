import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    alert("Voice recognition would be activated here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Mic className="h-6 w-6 text-brand-primary mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Voice Assistant</h3>
      </div>
      
      <p className="text-brand-subtle mb-4">Speak naturally to get health advice and assistance</p>
      
      <div className="text-center">
        <button
          onClick={handleVoiceToggle}
          className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
            isListening 
              ? 'bg-google-red text-white scale-110'
              : 'bg-white/30 text-white'
          }`}
        >
          {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
        </button>
        
        <p className="mt-3 text-sm text-brand-subtle font-semibold">
          {isListening ? 'Listening...' : 'Click to Speak'}
        </p>
      </div>
    </div>
  );
}

export default VoiceAssistant;