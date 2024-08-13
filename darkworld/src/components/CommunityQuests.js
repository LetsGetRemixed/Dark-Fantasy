import React from 'react';

const CommunityQuests = () => {
  const quests = [
    { id: 1, title: 'The Gathering of Shadows', description: 'Join forces with others to...' },
    // Add more quests here
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl mb-6">Community Quests</h2>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id} className="mb-4">
            <h3 className="text-xl font-bold">{quest.title}</h3>
            <p>{quest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityQuests;
