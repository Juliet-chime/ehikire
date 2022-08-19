import React, { useState, createContext, useContext } from "react";
import sublinks from "./components/navnav/data";

export type AppContextType = {
  active?: boolean;
  setActive?: any;
  screenSize?: any;
  setScreenSize?: any;
  scroll?: any;
  setScroll?: any;
  isSubmenuOpen?: any;
  setIsSubmenuOpen?: any;
  page?: any;
  setPage?: any;
  location?: any;
  setLocation?: any;
  openSubmenu?: any;
  closeSubmenu?: any;
};

export type Props = {
  text?: any;
  coordinates?: any;
  page?: string;
  links?: {
    label?: string;
    url?: string;
  }[];
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext) as AppContextType;

export function AppContextProvider({ children }: any) {
  const [active, setActive] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [scroll, setScroll] = useState(0);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<Props | undefined>({
    page: "",
    links: [],
  });
  const [location, setLocation] = useState({});

  const openSubmenu = ({ text, coordinates }: Props) => {
    const pages = sublinks.find((link: any) => link.page === text);
    setPage(pages);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        active,
        setActive,
        screenSize,
        setScreenSize,
        scroll,
        setScroll,
        isSubmenuOpen,
        setIsSubmenuOpen,
        page,
        setPage,
        location,
        setLocation,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
