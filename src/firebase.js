// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwLNG63DgZ1fVQ74hWKd9vJaOyMQg1-wE",
  authDomain: "chit-chat-32cdc.firebaseapp.com",
  projectId: "chit-chat-32cdc",
  storageBucket: "chit-chat-32cdc.appspot.com",
  messagingSenderId: "759468051631",
  appId: "1:759468051631:web:62585769f63cbe2fc9185a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();