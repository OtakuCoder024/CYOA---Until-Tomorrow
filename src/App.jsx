import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import Chapters from "./pages/Chapters.jsx";
function App() {


  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/Chapters" element={<Chapters />}/>
    </Routes>
  )
}

export default App
