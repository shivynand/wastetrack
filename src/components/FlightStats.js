import React, { useState } from 'react';
import axios from 'axios';

const FlightStats = ({ flightId }) => {
  const [stats, setStats] = useState(null);

  const fetchFlightStats = async () => {
    try {
      const response = await axios.get(`/api/stats/${flightId}`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Flight Statistics</h1>
      <input
        type="text"
        value={flightId}
        onChange={(e) => setStats(null)}
        placeholder="Enter flight ID"
        className="w-full p-2 border rounded mb-4"
      />
      <button onClick={fetchFlightStats} className="bg-green-500 text-white px-4 py-2 rounded">
        View Stats
      </button>

      {stats && (
        <div className="mt-4">
          <p>Total Waste: {stats.totalWaste} kg</p>
          <p>Recycling Rate: {stats.recyclingRate}%</p>
        </div>
      )}
    </div>
  );
};

export default FlightStats;
