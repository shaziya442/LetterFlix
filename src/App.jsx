import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./pages/home.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location?.pathname === "/" ? <Header /> : null}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/featureCard" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/addressform" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
