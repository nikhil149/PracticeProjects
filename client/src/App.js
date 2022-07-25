import "./App.css";
import AddCricketData from "./components/AddCricketData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin/addPlayer" element={<AddCricketData />} />
      </Routes>
    </div>
  );
}

export default App;
