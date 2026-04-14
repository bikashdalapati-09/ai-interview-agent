import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewx-79e75.firebaseapp.com",
  projectId: "interviewx-79e75",
  storageBucket: "interviewx-79e75.firebasestorage.app",
  messagingSenderId: "872898826170",
  appId: "1:872898826170:web:c925522e268ddbb3805783"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}