import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZPquaBeTE4Ca61KJap-Sz-Ma03uMbA6E",
  authDomain: "unicenso.firebaseapp.com",
  projectId: "unicenso",
  storageBucket: "unicenso.appspot.com",
  messagingSenderId: "1016551148844",
  appId: "1:1016551148844:web:7d270a07accefef322f089"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

