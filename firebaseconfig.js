import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1Kt6soa8DdDok5J7gBCrUBkiGkMW8HYw",
    authDomain: "paysafe-payment-app.firebaseapp.com",
    projectId: "paysafe-payment-app",
    storageBucket: "paysafe-payment-app.appspot.com",
    messagingSenderId: "189322805457",
    appId: "1:189322805457:web:a5c8581e010c5d680805f0",
    measurementId: "G-MJ2TRNJJNB"
  };

export const app = initializeApp(firebaseConfig);