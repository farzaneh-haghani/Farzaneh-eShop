import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Nw_JY_Jw2ttG2m1zlqNxTjbCO4ytYE4",
  authDomain: "farzaneh-s-eshop.firebaseapp.com",
  projectId: "farzaneh-s-eshop",
  storageBucket: "farzaneh-s-eshop.appspot.com",
  messagingSenderId: "301938957968",
  appId: "1:301938957968:web:62d6ddacad8556251cc215"
};

export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
