import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

function EmergencySOS() {
  const handleEmergencyCall = () => {
    alert("Emergency services would be contacted here");
  };

  const handleEmergencyContact = () => {
    alert("Emergency contact would be notified here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass border-2 border-google-red/50">
      <div className="flex items-center mb-4">
        <AlertTriangle className="h-6 w-6 text-google-red mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Emergency SOS</h3>
      </div>
      
      <p className="text-brand-subtle mb-6">Quick access to emergency services and contacts.</p>
      
      <div className="space-y-3">
        <button
          onClick={handleEmergencyCall}
          className="w-full bg-google-red text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center font-semibold shadow-lg"
        >
          <Phone className="h-5 w-5 mr-2" />
          Call 911
        </button>
        
        <button
          onClick={handleEmergencyContact}
          className="w-full bg-google-yellow text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors font-semibold shadow-md"
        >
          Notify Emergency Contact
        </button>
      </div>
    </div>
  );
}

export default EmergencySOS;