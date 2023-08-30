// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnIwz9XRlhX7BRaIzRwvf7PZPAzcX4aeU",
  authDomain: "ecommerce-c4234.firebaseapp.com",
  projectId: "ecommerce-c4234",
  storageBucket: "ecommerce-c4234.appspot.com",
  messagingSenderId: "584925451949",
  appId: "1:584925451949:web:b5d0fb7e93cab37ffe9824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()