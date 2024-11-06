import React from 'react';

const FlightCard = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 className="text-xl font-bold">Flight HX302 - HKG → TPE</h2>
      <p>Turnaround Time: 45 minutes</p>
      <div className="bg-gray-200 h-2 rounded mt-2">
        {/* Assuming totalWaste is a percentage for progress */}
        <div className="bg-teal-600 h-full rounded" style={{ width: `${stats.recyclingRate}%` }}></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-teal-600 text-white p-4 rounded text-center">
          <h3>Total Waste</h3>
          <p>{stats.totalWaste} kg</p>
        </div>
        <div className="bg-teal-600 text-white p-4 rounded text-center">
          <h3>Recycling Rate</h3>
          <p>{stats.recyclingRate.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;