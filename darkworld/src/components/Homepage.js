import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">The Cursed Tome</h1>
      <Link to="/create-character" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Create Your Character
      </Link>
    </div>
  );
};

export default Homepage;