import "./App.css";
import AddCricketData from "./components/AddCricketData";
import { Routes, Route } from "react-router-dom";
import GetPlayerData from "./components/GetPlayerData/GetPlayerData";
import Players from "./components/Admin/Players";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/admin/addPlayer" element={<AddCricketData />} />
        <Route path="/admin/updatePlayer" element={<AddCricketData />} />
        <Route path="/admin/getPlayer" element={<GetPlayerData />} />
        <Route path="/admin/getAllPlayers" element={<Players />} />
      </Routes>
    </div>
  );
}

export default App;
