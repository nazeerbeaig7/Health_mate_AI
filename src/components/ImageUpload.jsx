import React, { useState } from 'react';
import { Camera, Upload, Image } from 'lucide-react';

function ImageUpload() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = () => {
    alert("Image upload and AI analysis interface would open here");
  };

  const handleTakePhoto = () => {
    alert("Camera interface would open for taking photos");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Image className="h-6 w-6 text-google-green mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Medical Image Analysis</h3>
      </div>
      
      <p className="text-brand-subtle mb-4">Upload or capture images for AI-powered analysis</p>
      
      <div className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center mb-4 bg-white/10">
        <Upload className="h-12 w-12 text-gray-300 mx-auto mb-2" />
        <p className="text-brand-subtle text-sm">Drag & drop an image here</p>
      </div>
      
      <div className="space-y-3">
        <button
          onClick={handleImageUpload}
          className="w-full bg-google-green text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center shadow-md"
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload Image
        </button>
        <button
          onClick={handleTakePhoto}
          className="w-full bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors flex items-center justify-center"
        >
          <Camera className="h-5 w-5 mr-2" />
          Take Photo
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;