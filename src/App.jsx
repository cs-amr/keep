import { useGlobal } from "./context/AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

export default function App() {
  const { darkMode, setDarkMode } = useGlobal();

  return (
    <main className={`${darkMode ? "dark" : ""} font-opensans`}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
