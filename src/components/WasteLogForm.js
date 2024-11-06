import React, { useState } from 'react';

const WasteLogForm = () => {
  const [wasteType, setWasteType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Implement logic to log waste here
    const wasteData = {
      type: wasteType,
      quantity: quantity,
      location: location
    };
    
    // Example: Send waste data to API or database
    fetch('/api/log-waste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wasteData),
    })
    .then(response => response.json())
    .then(data => console.log('Waste logged successfully:', data))
    .catch(error => console.error('Error logging waste:', error));
    
    // Clear form fields after submission
    setWasteType('');
    setQuantity('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        value={wasteType}
        onChange={(e) => setWasteType(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select waste type</option>
        <option value="bottles">Bottles</option>
        <option value="cans">Cans</option>
        <option value="paper">Paper</option>
        <option value="other">Other</option>
      </select>

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter quantity"
        className="w-full p-2 border rounded"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select location</option>
        <option value="front-galley">Front Galley</option>
        <option value="mid-galley">Mid Galley</option>
        <option value="rear-galley">Rear Galley</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Log Waste
      </button>
    </form>
  );
};

export default WasteLogForm;