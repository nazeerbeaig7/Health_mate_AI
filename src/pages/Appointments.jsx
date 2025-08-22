import React, { useState } from 'react';
import { Calendar, Clock, User, Video, MapPin, Plus } from 'lucide-react';

function Appointments() {
  const [appointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Video Call',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Practitioner',
      date: '2024-01-20',
      time: '2:30 PM',
      type: 'In-Person',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Emily Davis',
      specialty: 'Dermatologist',
      date: '2024-01-10',
      time: '11:00 AM',
      type: 'Video Call',
      status: 'completed'
    }
  ]);

  const handleScheduleNew = () => {
    alert("New appointment scheduling interface would open here");
  };

  const handleJoinCall = () => {
    alert("Video call interface would open here");
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Appointments</h1>
          <p className="text-lg text-brand-subtle">Manage your healthcare appointments</p>
        </div>
        <button
          onClick={handleScheduleNew}
          className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center shadow-md"
        >
          <Plus className="h-5 w-5 mr-2" />
          Schedule New
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="glass-card p-6 rounded-xl shadow-glass transition-transform transform hover:scale-105">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="flex-1 mb-4 sm:mb-0">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-brand-primary mr-3" />
                  <h3 className="text-lg font-semibold text-brand-text">{appointment.doctor}</h3>
                  <span className="ml-2 text-sm text-brand-subtle">({appointment.specialty})</span>
                </div>
                
                <div className="flex flex-wrap items-center space-x-4 text-sm text-brand-subtle mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center">
                    {appointment.type === 'Video Call' ? (
                      <Video className="h-4 w-4 mr-1.5" />
                    ) : (
                      <MapPin className="h-4 w-4 mr-1.5" />
                    )}
                    {appointment.type}
                  </div>
                </div>

                <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                  appointment.status === 'upcoming' 
                    ? 'bg-white/20 text-google-green'
                    : 'bg-white/10 text-brand-subtle'
                }`}>
                  {appointment.status}
                </span>
              </div>

              <div className="flex space-x-3 self-start sm:self-center">
                {appointment.status === 'upcoming' && appointment.type === 'Video Call' && (
                  <button
                    onClick={handleJoinCall}
                    className="bg-google-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm shadow-md"
                  >
                    Join Call
                  </button>
                )}
                <button className="bg-white/30 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/50 transition-colors text-sm">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;