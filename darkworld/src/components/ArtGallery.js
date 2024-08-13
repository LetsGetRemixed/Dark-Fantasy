import React, { useState } from 'react';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([
    { id: 1, title: 'Dark Sorcerer', url: 'DarkSorcerer.png' },
    // Initial artwork
  ]);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArt = {
      id: artworks.length + 1, // Simple ID generation
      title: title,
      url: url,
    };
    setArtworks([...artworks, newArt]); // Update the artworks state with the new submission
    setTitle(''); // Clear form fields
    setUrl('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl mb-6">Art Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {artworks.map((art) => (
          <div key={art.id} className="rounded overflow-hidden">
            <img src={art.url} alt={art.title} className="w-full h-auto" />
            <h3 className="text-lg font-bold mt-2">{art.title}</h3>
          </div>
        ))}
      </div>
      <h3 className="text-2xl mb-4">Submit Your Artwork</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Image URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 rounded bg-gray-800"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Artwork
        </button>
      </form>
    </div>
  );
};

export default ArtGallery;
