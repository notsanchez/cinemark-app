// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEgyhqvV-5pyJOpAJsSc1uIW1696xGRgw",
  authDomain: "cinemark-app-1bc82.firebaseapp.com",
  projectId: "cinemark-app-1bc82",
  storageBucket: "cinemark-app-1bc82.appspot.com",
  messagingSenderId: "64678191131",
  appId: "1:64678191131:web:d2d8fa93cfc003a5ca98be",
  measurementId: "G-JSCHDPQWV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);