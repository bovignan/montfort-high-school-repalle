import { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import AdminPanel from "./admin/AdminPanel";
import Login from "./admin/Login";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import CircularsAndActivities from "./pages/CircularsAndActivities";
import Events from "./pages/Events";
import FeeStructure from "./pages/FeeStructure";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";

function App() {
  const [updates, setUpdates] = useState(() => {
    try {
      const saved = localStorage.getItem("school-updates");
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error("Error parsing updates from localStorage:", err);
      return [];
    }
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("admin-logged-in") === "true";
  });

  useEffect(() => {
    localStorage.setItem("school-updates", JSON.stringify(updates));
  }, [updates]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const addUpdate = (update) => {
    setUpdates((prev) => [update, ...prev]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("admin-logged-in", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("admin-logged-in");
  };

  return (
    <Router basename="/montfort-high-school-repalle"> {/* ✅ Fixed for GitHub Pages */}
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events updates={updates} />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/fee" element={<FeeStructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/circulars" element={<CircularsAndActivities />} />
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <AdminPanel addUpdate={addUpdate} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/admin" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
