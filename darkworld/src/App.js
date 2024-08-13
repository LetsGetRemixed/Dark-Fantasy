import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CharacterCreation from './components/CharacterCreation';
import Storyline from './components/Storyline';
import LoreLibrary from './components/LoreLibrary';
import RelicsCollection from './components/RelicsCollection';
import ArtGallery from './components/ArtGallery';
import CommunityQuests from './components/CommunityQuests';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-character" element={<CharacterCreation />} />
        <Route path="/storyline" element={<Storyline />} />
        <Route path="/lore-library" element={<LoreLibrary />} />
        <Route path="/relics-collection" element={<RelicsCollection />} />
        <Route path="/art-gallery" element={<ArtGallery />} />
        <Route path="/community-quests" element={<CommunityQuests />} />
      </Routes>
    </Router>
  );
};

export default App;

