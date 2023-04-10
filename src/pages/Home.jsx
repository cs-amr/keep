import { useEffect } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import { useGlobal } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user } = useGlobal();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("../login");
      return;
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex">
        <Board />
      </div>
    </div>
  );
}
