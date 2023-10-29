import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";
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
import { IMAGES } from "../Styles/constants";

firebaseAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState("");

  const createUser = (email, password, name, phone, navigate, from) => {
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
        navigate(from.pathname);
        const saveData = {
          name,
          email,
        };
        userStorage(saveData, "POST");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  // send user to db
  const userStorage = (data, method) => {
    fetch("https://hello-sky-server.onrender.com/users", {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data);
  };

  //   sign in user
  const signIn = (email, password, navigate, from) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsLoading(false);
        navigate(from.pathname);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(true);
      });
  };

  // signIn with Google provider

  const signInGoogle = (navigate) => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        navigate("/");
        const saveData = {
          name: result.user.displayName,
          email: result.user.email,
        };
        userStorage(saveData, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // user sign in observer
  // obserbing redering---
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
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // user role check

  useEffect(() => {
    if (!user?.email) return;
    fetch(`https://hello-sky-server.onrender.com/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserRole(data.role || "User");
      });
  }, [user]);

  //   logout
  const logOut = (navigate) => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return {
    createUser,
    user,
    error,
    signIn,
    isLoading,
    logOut,
    signInGoogle,
    userRole,
  };
};

export default useFirebase;
