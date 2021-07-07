//1. importing various dependencies
import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";

//2. Initializing context for authentication
export const AuthContext = React.createContext();

//3. Setting up authentication provider which will provide the state to the various components of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
