// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIH0lTyuOjKqTKhIRjRmEnPUp5-wnBvBY",
  authDomain: "unicenso-5c92c.firebaseapp.com",
  projectId: "unicenso-5c92c",
  storageBucket: "unicenso-5c92c.appspot.com",
  messagingSenderId: "740123565994",
  appId: "1:740123565994:web:a1736e5b666fdc054c55d3",
  measurementId: "G-CC5V3DBL3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);