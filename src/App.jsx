import "./App.css";
import { CharactersListPage } from "./pages/CharactersListPage.jsx";
import { Routes, Route } from "react-router-dom";
import { EpisodesPage } from "./pages/EpisodesPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CharactersListPage />} />
        <Route path="/episode" element={<EpisodesPage />} />
      </Routes>
    </>
  );
}

export default App;
