import React, { createContext, useContext, useState } from 'react';

const DrawerModeContext = createContext();

export const DrawerMode = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Update toggleDrawer to toggle the state
  const toggleDrawer = (state) => {
    setDrawerOpen(state);
  };

  return (
    <DrawerModeContext.Provider value={{ drawerOpen, toggleDrawer }}>
      {children}
    </DrawerModeContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerModeContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerMode Provider');
  }
  return context;
};