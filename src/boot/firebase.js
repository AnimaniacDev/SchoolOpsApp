// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkI63kko0a40sTSHild6BjoBmnU384QDg",
  authDomain: "schoolops-a33b1.firebaseapp.com",
  databaseURL: "https://schoolops-a33b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "schoolops-a33b1",
  storageBucket: "schoolops-a33b1.appspot.com",
  messagingSenderId: "12100101643",
  appId: "1:12100101643:web:4c3e7b753c82062ca8c90e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
