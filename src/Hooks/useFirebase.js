import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { IMAGES } from "../Styles/constants";
import firebaseAuthentication from "../Firebase/firebase.init";
import { Navigate } from "react-router-dom";

firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password, name, phone) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password, name, phone)
      .then((data) => {
        updateProfile(data.user, {
          displayName: name,
          phoneNumber: phone,
          photoURL: IMAGES.USER_PHOTO,
        }).catch((error) => setError(error));
        setUser(data.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  //   sign in user
  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsLoading(false);
        Navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(true);
      });
  };

  // signIn with Google provider

  const signInGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user sign in observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return { createUser, user, error, signIn, isLoading, logOut, signInGoogle };
};

export default useFirebase;
