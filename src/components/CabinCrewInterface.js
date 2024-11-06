import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CabinCrewInterface = () => {
  const [action, setAction] = useState(null);
  const navigate = useNavigate();

  const handleActionChange = (e) => {
    setAction(e.target.value);
  };

  const handleLogWaste = () => {
    navigate('/log-waste');
  };

  const handleViewStats = () => {
    navigate('/flight-stats');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to WasteTrack</h1>
      <select
        value={action}
        onChange={handleActionChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select an action</option>
        <option value="1">Log Waste</option>
        <option value="2">View Stats</option>
        <option value="3">Exit</option>
      </select>

      {action === '1' && (
        <button onClick={handleLogWaste} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Log Waste
        </button>
      )}

      {action === '2' && (
        <button onClick={handleViewStats} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          View Flight Stats
        </button>
      )}
    </div>
  );
};

export default CabinCrewInterface;