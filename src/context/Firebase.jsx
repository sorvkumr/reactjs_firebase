import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHSpqiJP3hrFVIYs_SEvWFrluv6PMxdi8",
  authDomain: "learn-1-1d8ee.firebaseapp.com",
  projectId: "learn-1-1d8ee",
  storageBucket: "learn-1-1d8ee.appspot.com",
  messagingSenderId: "240745738850",
  appId: "1:240745738850:web:3d99eb50c57b9cce35573b",
  databaseURL: "https://learn-1-1d8ee-default-rtdb.firebaseio.com"
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = (props) => {

  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(firebaseDatabase, key), data);

  return (
    <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword, signInUserWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
