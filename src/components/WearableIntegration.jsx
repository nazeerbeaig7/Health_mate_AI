import React, { useState } from 'react';
import { Watch, Smartphone, Wifi } from 'lucide-react';

function WearableIntegration() {
  const [connectedDevices, setConnectedDevices] = useState(['Apple Watch', 'Fitbit Versa']);

  const handleConnectDevice = () => {
    alert("Wearable device pairing interface would open here");
  };

  const handleSync = () => {
    alert("Syncing data from connected wearable devices");
  };

  return (
    <div className="glass-card p-6 rounded-xl shadow-glass">
      <div className="flex items-center mb-4">
        <Watch className="h-6 w-6 text-brand-primary mr-3" />
        <h3 className="text-xl font-semibold text-brand-text">Wearable Integration</h3>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-brand-text mb-2">Connected Devices:</h4>
        {connectedDevices.map(device => (
          <div key={device} className="flex items-center p-2 bg-white/20 rounded-lg mb-2">
            <Wifi className="h-4 w-4 text-google-green mr-2" />
            <span className="text-sm text-brand-text font-medium">{device}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <button
          onClick={handleSync}
          className="w-full bg-brand-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-brand-primary-light transition-colors shadow-md"
        >
          Sync Data
        </button>
        <button
          onClick={handleConnectDevice}
          className="w-full bg-white/30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/50 transition-colors flex items-center justify-center"
        >
          <Smartphone className="h-5 w-5 mr-2" />
          Connect New Device
        </button>
      </div>
    </div>
  );
}

export default WearableIntegration;