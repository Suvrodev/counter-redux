import React, { createContext } from "react";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const baseUrl = "http://localhost:3003";
  const authInfo = {
    baseUrl,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
