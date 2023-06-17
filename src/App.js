import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateContent from "./Pages/GenerateContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenerateContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
