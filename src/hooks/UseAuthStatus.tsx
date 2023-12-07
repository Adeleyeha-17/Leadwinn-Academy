import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UseAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { loggedIn, checkingStatus };
};
