"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("token");
      if (saved) setToken(saved);
    } catch (e) {
      /* ignore */
    }
  }, []);

  const login = (jwt) => {
    try {
      localStorage.setItem("token", jwt);
    } catch (e) {}
    setToken(jwt);
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
    } catch (e) {}
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
