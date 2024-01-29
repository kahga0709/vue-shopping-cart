// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqA2LPtFdZaEjO2_SvjXfoa5aqptOJ800",
  authDomain: "vue-shopping-9b0e4.firebaseapp.com",
  projectId: "vue-shopping-9b0e4",
  storageBucket: "vue-shopping-9b0e4.appspot.com",
  messagingSenderId: "601603985868",
  appId: "1:601603985868:web:30bb82f4e5c6aca6e40d69",
  measurementId: "G-QQ3JQNN8JS"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth(app);
