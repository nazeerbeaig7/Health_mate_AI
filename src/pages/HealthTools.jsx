import React from 'react';
import SymptomChecker from '../components/SymptomChecker';
import VoiceAssistant from '../components/VoiceAssistant';
import ImageUpload from '../components/ImageUpload';
import WearableIntegration from '../components/WearableIntegration';
import DietSuggestions from '../components/DietSuggestions';
import Gamification from '../components/Gamification';

function HealthTools() {
  return (
    <div className="p-6 min-h-screen">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Health Tools</h1>
          <p className="text-lg text-brand-subtle">AI-powered tools to monitor and improve your health</p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <SymptomChecker />
          <VoiceAssistant />
          <ImageUpload />
          <WearableIntegration />
          <DietSuggestions />
          <Gamification />
        </div>
      </div>
    </div>
  );
}

export default HealthTools;