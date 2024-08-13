import React from 'react';

const RelicsCollection = () => {
  const relics = [
    { id: 1, name: 'Amulet of Despair', description: 'A cursed amulet that...' },
    // Add more relics here
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h2 className="text-3xl mb-6">Relics Collection</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relics.map((relic) => (
          <li key={relic.id} className="p-4 bg-gray-900 rounded">
            <h3 className="text-xl font-bold">{relic.name}</h3>
            <p>{relic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelicsCollection;
