import React, { useState } from 'react';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([
    { id: 1, title: 'Dark Sorcerer', url: 'path_to_image1.jpg' },
    // Add more artwork here
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-3xl mb-6">Art Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {artworks.map((art) => (
          <div key={art.id} className="rounded overflow-hidden">
            <img src={art.url} alt={art.title} className="w-full h-auto" />
            <h3 className="text-lg font-bold mt-2">{art.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;