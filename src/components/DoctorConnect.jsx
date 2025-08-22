import React from 'react';
import { UserCheck, Video, MessageCircle, Calendar } from 'lucide-react';

function DoctorConnect() {
  const handleVideoCall = () => {
    alert("Video consultation interface would open here");
  };

  const handleMessage = () => {
    alert("Messaging interface with healthcare providers would open here");
  };

  const handleSchedule = () => {
    alert("Appointment scheduling interface would open here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <UserCheck className="h-6 w-6 text-brand-primary mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Connect with Doctors</h3>
      </div>
      
      <p className="text-brand-subtle mb-6">Get professional medical advice and care.</p>
      
      <div className="space-y-3">
        <button
          onClick={handleVideoCall}
          className="w-full bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors flex items-center justify-center"
        >
          <Video className="h-5 w-5 mr-2" />
          Start Video Consultation
        </button>
        <button
          onClick={handleMessage}
          className="w-full bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Message a Doctor
        </button>
        <button
          onClick={handleSchedule}
          className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center justify-center shadow-md"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorConnect;