// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl9DNJmgFo3w8wi7XoBvGLRtEy_cO9h6c",
  authDomain: "netflix-6b552.firebaseapp.com",
  projectId: "netflix-6b552",
  storageBucket: "netflix-6b552.firebasestorage.app",
  messagingSenderId: "509914621691",
  appId: "1:509914621691:web:e98522e3c85b26fd53b25e",
  measurementId: "G-TJEHF3FMMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
