import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvMEi-42Q8qkijePGu54nJRcs_9JA8Jg8",
  authDomain: "coder-tennis4all.firebaseapp.com",
  projectId: "coder-tennis4all",
  storageBucket: "coder-tennis4all.appspot.com",
  messagingSenderId: "414144698185",
  appId: "1:414144698185:web:ad8a96c8d79355b3a5ec98"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


