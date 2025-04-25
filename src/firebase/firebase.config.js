// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALNXA_j6ENeShBRZUpo0EroSCqH9c-hxQ",
  authDomain: "coffee-store-17417.firebaseapp.com",
  projectId: "coffee-store-17417",
  storageBucket: "coffee-store-17417.firebasestorage.app",
  messagingSenderId: "87957128438",
  appId: "1:87957128438:web:446977c757e1f56a2c18d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
