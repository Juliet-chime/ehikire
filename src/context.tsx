import React, { useState, createContext, useContext } from "react";

export type AppContextType = {
  active?: boolean;
  setActive?: any;
  screenSize?: any;
  setScreenSize?: any;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext) as AppContextType;

export function AppContextProvider({ children }: any) {
  const [active, setActive] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ active, setActive, screenSize, setScreenSize }}
    >
      {children}
    </AppContext.Provider>
  );
}
