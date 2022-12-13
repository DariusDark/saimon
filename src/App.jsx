import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
