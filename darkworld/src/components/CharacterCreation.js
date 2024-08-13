import React, { useState } from 'react';
import { db } from '../firebase'; // Import Firestore
import { collection, addDoc } from 'firebase/firestore'; // Firestore functions
import { useNavigate } from 'react-router-dom';

const CharacterCreation = () => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('defaultAvatar');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, 'characters'), {
        name: name,
        avatar: avatar,
        createdAt: new Date(),
      });
      navigate('/storyline'); // Redirect to the storyline page
    } catch (err) {
      setError('Failed to create character. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
    <h2 className="text-3xl mb-6">Create Your Character</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Character Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Choose Avatar</label>
          <select
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
          >
            <option value="defaultAvatar">Default Avatar</option>
            {/* Add more avatar options here */}
          </select>
        </div>
        <button
           type="submit"
           className={`bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
           disabled={loading}
         >
           {loading ? 'Creating...' : 'Create Character'}
         </button>
       </form>
 
       {error && (
         <p className="text-red-500 mt-4">{error}</p>
       )}
     </div>
   );
 };

export default CharacterCreation;
