import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loreUnlocked, setLoreUnlocked] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, loreUnlocked, setLoreUnlocked }}>
      {children}
    </AppContext.Provider>
  );
};
