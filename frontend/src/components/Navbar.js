import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  // Safe access with default empty object to prevent destructuring errors
  const { user, setUser } = useContext(AuthContext) || {};

  const handleLogout = () => {
    if (setUser) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setUser(null);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Bug Tracker</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        {user?.role === "admin" && <li><Link to="/add-project">Add Project</Link></li>}
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/bugs">Bugs</Link></li>
        {user ? (
          <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;