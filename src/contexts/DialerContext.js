// src/contexts/DialerContext.js
import React, { createContext, useContext, useState } from 'react';

const DialerContext = createContext();

export const DialerProvider = ({ children }) => {
  const [dialerCode, setDialerCode] = useState("");

  return (
    <DialerContext.Provider value={{ dialerCode, setDialerCode }}>
      {children}
    </DialerContext.Provider>
  );
};

export const useDialer = () => {
  const context = useContext(DialerContext);
  if (context === undefined) {
    throw new Error('useDialer must be used within a DialerProvider');
  }
  return context;
};

