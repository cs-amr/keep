import { useGlobal } from "./context/AppContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
