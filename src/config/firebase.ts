import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBx7maIRXL2FyQL55UN1QEBHnfGMtvElsg",
  authDomain: "leadwinn--academy.firebaseapp.com",
  projectId: "leadwinn--academy",
  storageBucket: "leadwinn--academy.appspot.com",
  messagingSenderId: "491509515150",
  appId: "1:491509515150:web:1d475aead92bc2f5bd5adf",
  measurementId: "G-EMV5YM31QP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
