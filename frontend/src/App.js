import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import AddBug from "./pages/AddBug";
import BugList from "./pages/BugList";
import ProjectList from "./pages/ProjectList";

// Components
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { user } = useContext(AuthContext) || {}; // Safe access with fallback
  
  return (
    <Router>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bugs" element={<BugList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
          <Route
            path="/add-project"
            element={<PrivateRoute><AddProject /></PrivateRoute>}
          />
          <Route
            path="/add-bug"
            element={<PrivateRoute><AddBug /></PrivateRoute>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;