import React, { useState } from 'react';
import { Bell, Plus } from 'lucide-react';

function Reminders() {
  const [reminders] = useState([
    { id: 1, text: 'Take morning vitamins', time: '08:00 AM' },
    { id: 2, text: 'Doctor appointment', time: '02:30 PM' },
    { id: 3, text: 'Evening workout', time: '06:00 PM' }
  ]);

  const handleAddReminder = () => {
    alert("Add new reminder interface would open here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Bell className="h-6 w-6 text-google-yellow mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Health Reminders</h3>
      </div>
      
      <div className="space-y-3 mb-6">
        {reminders.map(reminder => (
          <div key={reminder.id} className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
            <span className="text-sm font-medium text-brand-text">{reminder.text}</span>
            <span className="text-xs text-brand-subtle font-semibold">{reminder.time}</span>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleAddReminder}
        className="w-full bg-google-yellow text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-md"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Reminder
      </button>
    </div>
  );
}

export default Reminders;