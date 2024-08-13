import React from 'react';

const LoreLibrary = () => {
  const loreEntries = [
    { id: 1, title: 'The Forgotten Kingdom', content: 'Once a thriving empire...' },
    // Add more lore entries here
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl mb-6">Lore Library</h2>
      <ul>
        {loreEntries.map((entry) => (
          <li key={entry.id} className="mb-4">
            <h3 className="text-xl font-bold">{entry.title}</h3>
            <p>{entry.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoreLibrary;
