import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYB4KmxSRmrZ3QAWOdZe5UI_MOVtjYkVQ",
  authDomain: "leadwinn-academy-6a41d.firebaseapp.com",
  projectId: "leadwinn-academy-6a41d",
  storageBucket: "leadwinn-academy-6a41d.appspot.com",
  messagingSenderId: "247171471177",
  appId: "1:247171471177:web:7f74fdcb358e4a3ca42c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
