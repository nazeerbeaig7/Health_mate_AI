import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';

function MultilingualSupport() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Arabic'];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    alert(`Language changed to ${language} - Translation system would activate here`);
  };

  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
      <div className="flex items-center mb-4">
        <Globe className="h-6 w-6 text-google-yellow mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Language Support</h3>
      </div>
      
      <p className="text-brand-subtle mb-4">Choose your preferred language for health assistance</p>
      
      <div className="space-y-2 mb-4">
        {languages.map(language => (
          <button
            key={language}
            onClick={() => handleLanguageChange(language)}
            className={`w-full p-2 rounded-md text-left flex items-center justify-between transition-colors font-medium ${
              selectedLanguage === language
                ? 'bg-brand-primary/10 text-brand-primary'
                : 'hover:bg-gray-100 text-brand-text'
            }`}
          >
            <span>{language}</span>
            {selectedLanguage === language && <Check className="h-5 w-5" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MultilingualSupport;