// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqA2LPtFdZaEjO2_SvjXfoa5aqptOJ800",
  authDomain: "vue-shopping-9b0e4.firebaseapp.com",
  projectId: "vue-shopping-9b0e4",
  storageBucket: "vue-shopping-9b0e4.appspot.com",
  messagingSenderId: "601603985868",
  appId: "1:601603985868:web:30bb82f4e5c6aca6e40d69",
  measurementId: "G-QQ3JQNN8JS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
