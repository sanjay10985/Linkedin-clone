// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2dODiODFeox5ZgvLOuq_bO2rPLFH-Zko",
  authDomain: "linkedin-clone-21a54.firebaseapp.com",
  projectId: "linkedin-clone-21a54",
  storageBucket: "linkedin-clone-21a54.appspot.com",
  messagingSenderId: "112459473433",
  appId: "1:112459473433:web:9686bece4519a4e0810088"
};      

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);