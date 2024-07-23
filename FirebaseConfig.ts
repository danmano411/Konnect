// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKMRrIxFWKKpjW9C-jovpaqP3LLAfoRmA",
  authDomain: "konnect-a8054.firebaseapp.com",
  projectId: "konnect-a8054",
  storageBucket: "konnect-a8054.appspot.com",
  messagingSenderId: "1020520417692",
  appId: "1:1020520417692:web:5c666aec672651ff286059",
  measurementId: "G-0ZXCWEWHE9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);