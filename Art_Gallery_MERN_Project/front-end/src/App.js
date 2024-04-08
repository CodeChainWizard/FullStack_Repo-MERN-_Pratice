import { Login } from "./pages/Login.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register.jsx";
import { Home } from "./pages/Home.jsx";
import { addDigitalArts } from "./pages/addDigitalArts.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/addDigitalArts" element={<addDigitalArts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
