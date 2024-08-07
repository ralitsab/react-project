// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyBbt3ER2BTvwZg-gzYf4OdokCULBt16Kf0",
  authDomain: "rali-project-76a2a.firebaseapp.com",
  databaseURL: "https://rali-project-76a2a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rali-project-76a2a",
  storageBucket: "rali-project-76a2a.appspot.com",
  messagingSenderId: "970543111879",
  appId: "1:970543111879:web:d180fb6e2c39ebe0ebe8e2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);