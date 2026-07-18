'use client';

import { createContext, useContext, useState } from 'react';

// Estado compartido para que el login señale al BgmPlayer que debe
// iniciar la música tras la autenticación (gesto del usuario => autoplay permitido).
export const BgmContext = createContext({
  started: false,
  startBgm: () => {},
});

export function BgmProvider({ children }) {
  const [started, setStarted] = useState(false);
  const startBgm = () => setStarted(true);
  return (
    <BgmContext.Provider value={{ started, startBgm }}>
      {children}
    </BgmContext.Provider>
  );
}

export function useBgm() {
  return useContext(BgmContext);
}
