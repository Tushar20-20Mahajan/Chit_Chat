// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4vA5k5OAq1kEymvaH3xJC_N8cO9FMQw",
  authDomain: "chit-chat-hub-ac057.firebaseapp.com",
  projectId: "chit-chat-hub-ac057",
  storageBucket: "chit-chat-hub-ac057.appspot.com",
  messagingSenderId: "737758787287",
  appId: "1:737758787287:web:dd00a57283685df3a3e292"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();