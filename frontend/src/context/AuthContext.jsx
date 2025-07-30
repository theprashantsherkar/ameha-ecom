import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (email, password) => {
    // This is a placeholder. In real-world, validate from backend
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = (email, password) => {
    // This is just for UI. No real registration happens
    if (email && password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

