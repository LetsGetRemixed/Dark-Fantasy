import React, { useState } from 'react';

const Storyline = () => {
  const [currentChapter, setCurrentChapter] = useState(1);

  const handleChoice = (choice) => {
    // Logic to progress the story based on the user's choice
    setCurrentChapter(currentChapter + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl mb-6">Chapter {currentChapter}</h2>
      <p className="mb-8">
        {/* Story content based on currentChapter */}
      </p>
      <div className="flex space-x-4">
        <button onClick={() => handleChoice('option1')} className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Choice 1
        </button>
        <button onClick={() => handleChoice('option2')} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Choice 2
        </button>
      </div>
    </div>
  );
};

export default Storyline;
