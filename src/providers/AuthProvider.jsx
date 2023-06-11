import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  const createUser = (email, password) => {
    setLoad(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

    const logIn = (email, password) => {
      setLoad(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

    const logOut = () => {
      setLoad(true)
      return signOut(auth)
  }

  const updateUser = (name,image) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoad(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const allAuth = {
    user,
    load,
    createUser,
    logIn,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={allAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
