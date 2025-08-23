import React, { useState } from 'react';
import { AlertTriangle, Phone, Shield, User, ChevronDown, AlertCircle, X } from 'lucide-react';

function EmergencySOS() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [emergencyType, setEmergencyType] = useState('');

  const handleEmergencyCall = (type = 'police') => {
    setEmergencyType(type);
    setShowConfirmation(true);
  };

  const handleConfirmEmergency = () => {
    // Implementation for actual emergency call would go here
    console.log(`Calling emergency services: ${emergencyType}`);
    setShowConfirmation(false);
    // In a real app, this would trigger the actual emergency call
    alert(`Calling emergency services (${emergencyType})...`);
  };

  const handleEmergencyContact = () => {
    // Implementation for notifying emergency contact would go here
    console.log("Notifying emergency contact...");
    alert("Your emergency contacts have been notified with your location.");
  };

  const emergencyServices = [
    { id: 'police', name: 'Police', number: '911', color: 'bg-blue-600 hover:bg-blue-700' },
    { id: 'medical', name: 'Medical', number: '911', color: 'bg-red-600 hover:bg-red-700' },
    { id: 'fire', name: 'Fire Department', number: '911', color: 'bg-orange-600 hover:bg-orange-700' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 overflow-hidden hover:shadow-md transition-all duration-200">
      <div className="bg-gradient-to-r from-red-50 to-red-100 p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600">
              <Shield className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">Emergency SOS</h3>
            <p className="text-sm text-gray-600 mt-1">Immediate assistance when you need it most</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Emergency Services</h4>
            <div className="space-y-2">
              {emergencyServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleEmergencyCall(service.id)}
                  className={`w-full text-white py-2.5 px-4 rounded-lg flex items-center justify-between ${service.color} transition-colors`}
                >
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-white" />
                    <span>{service.name}</span>
                  </div>
                  <span className="font-mono font-medium">{service.number}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="pt-2">
            <button
              onClick={handleEmergencyContact}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 px-4 rounded-lg flex items-center justify-center font-medium transition-colors"
            >
              <User className="h-4 w-4 mr-2" />
              Notify My Emergency Contacts
            </button>
          </div>
          
          <div className="pt-2">
            <button className="w-full text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center">
              View emergency information
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Emergency Call</h3>
              <button 
                onClick={() => setShowConfirmation(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">
                  Are you sure you want to call emergency services? This will connect you to {emergencyType}.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEmergency}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Call 911
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmergencySOS;