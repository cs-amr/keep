import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, SetSidebarOpen] = useState(true);
  const [columnView, setcolumnView] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        sidebarOpen,
        SetSidebarOpen,
        columnView,
        setcolumnView,
        user,
        setUser,
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
