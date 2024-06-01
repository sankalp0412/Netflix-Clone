import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCFv01Akjk6tl1A2LMjM-OLDdS7o7ZzK88",
  authDomain: "react-netflix-clone-274ae.firebaseapp.com",
  projectId: "react-netflix-clone-274ae",
  storageBucket: "react-netflix-clone-274ae.appspot.com",
  messagingSenderId: "812565571678",
  appId: "1:812565571678:web:a78b143d396b8fd02c6ccf",
  measurementId: "G-8P38GLR57D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const fireBaseAuth = getAuth(app);