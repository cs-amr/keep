import Board from "../components/Board";
import Header from "../components/Header";
import { useGlobal } from "../context/AppContext";

export default function Home() {
  const { darkMode, setDarkMode } = useGlobal();
  return (
    <div className={`${darkMode ? "dark" : ""} font-opensans`}>
      <Header />
      <div>
        <Board />
      </div>
    </div>
  );
}
