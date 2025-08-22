import React, { useState } from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

function PreventiveCare() {
  const [screenings, setScreenings] = useState([
    { name: "Annual Physical", due: "Due in 2 months", status: "upcoming" },
    { name: "Dental Cleaning", due: "Overdue by 1 week", status: "overdue" },
    { name: "Eye Exam", due: "Due in 8 months", status: "upcoming" },
    { name: "Blood Work", due: "Completed", status: "completed" }
  ]);

  const handleScheduleScreening = () => {
    alert("Preventive care scheduling interface would open here");
  };

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
      <div className="flex items-center mb-4">
        <Shield className="h-6 w-6 text-google-blue mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Preventive Care</h3>
      </div>
      
      <div className="space-y-2 mb-4">
        {screenings.map((screening, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-brand-surface rounded-md">
            <div className="flex items-center">
              {screening.status === 'completed' ? (
                <CheckCircle className="h-4 w-4 text-google-green mr-2" />
              ) : (
                <Clock className="h-4 w-4 text-google-yellow mr-2" />
              )}
              <span className="text-sm font-medium text-brand-text">{screening.name}</span>
            </div>
            <span className={`text-xs font-semibold ${
              screening.status === 'overdue' ? 'text-google-red' : 
              screening.status === 'completed' ? 'text-google-green' : 'text-brand-subtle'
            }`}>
              {screening.due}
            </span>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleScheduleScreening}
        className="w-full border-2 border-gray-400 text-brand-text py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
      >
        Schedule Screening
      </button>
    </div>
  );
}

export default PreventiveCare;