import { useEffect } from "react";
import Board from "../components/Board";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useGlobal } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Board />
      </div>
    </div>
  );
}
