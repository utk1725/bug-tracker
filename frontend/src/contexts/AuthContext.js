import React, { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Try to get authentication data from localStorage
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      
      if (token) {
        setUser({ token, role });
      }
    } catch (error) {
      console.error("Error getting authentication data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Provide a value object containing user state and setter
  const value = {
    user,
    setUser,
    loading
  };

  // Only render children when not loading
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};