import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!admin);

  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]);

  const logOut = () => {
    setAdmin(null);
    setIsLoggedIn(false);
    localStorage.removeItem("admin");
    window.location.reload();
  };
  return (
    <AuthContext.Provider
      value={{ admin, setAdmin, isLoggedIn, setIsLoggedIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
