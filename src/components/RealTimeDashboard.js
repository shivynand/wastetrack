import React, { useState, useEffect } from 'react';

const RealTimeDashboard = () => {
  const [recyclingRates, setRecyclingRates] = useState({});

  useEffect(() => {
    const interval = setInterval(fetchRecyclingRates, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchRecyclingRates = async () => {
    try {
      const response = await fetch('/api/recycling-rates');
      const data = await response.json();
      setRecyclingRates(data);
    } catch (error) {
      console.error('Error fetching recycling rates:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Real-Time Dashboard</h1>
      <div className="flex flex-col space-y-4">
        {Object.entries(recyclingRates).map(([key, rate]) => (
          <div key={key} className="bg-gray-100 p-4 rounded">
            <p>{key}: {rate}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeDashboard;
