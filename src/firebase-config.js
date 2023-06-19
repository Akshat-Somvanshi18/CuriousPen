// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnrnPML4Sh89Ek3V95PPXJ8BukBUTSPkY",
  authDomain: "blogsite-6d2fb.firebaseapp.com",
  projectId: "blogsite-6d2fb",
  storageBucket: "blogsite-6d2fb.appspot.com",
  messagingSenderId: "756667252513",
  appId: "1:756667252513:web:ca7ba7bcd05c7f6a43c860",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
