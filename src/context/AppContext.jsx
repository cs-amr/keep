import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, SetSidebarOpen] = useState(true);
  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        sidebarOpen,
        SetSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useGlobal() {
  const context = useContext(AppContext);
  return context;
}
