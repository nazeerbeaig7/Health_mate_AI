import React from 'react';
import { User, Edit } from 'lucide-react';

function HealthProfile() {
  const handleEditProfile = () => {
    alert("Profile editing interface would open here");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <User className="h-6 w-6 text-brand-primary mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Health Profile</h3>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-brand-subtle">Age:</span>
          <span className="font-medium text-brand-text">28 years</span>
        </div>
        <div className="flex justify-between">
          <span className="text-brand-subtle">Blood Type:</span>
          <span className="font-medium text-brand-text">O+</span>
        </div>
        <div className="flex justify-between">
          <span className="text-brand-subtle">Allergies:</span>
          <span className="font-medium text-brand-text">Peanuts</span>
        </div>
        <div className="flex justify-between">
          <span className="text-brand-subtle">Last Checkup:</span>
          <span className="font-medium text-brand-text">3 months ago</span>
        </div>
      </div>
      
      <button
        onClick={handleEditProfile}
        className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors flex items-center justify-center shadow-md"
      >
        <Edit className="h-5 w-5 mr-2" />
        Edit Profile
      </button>
    </div>
  );
}

export default HealthProfile;