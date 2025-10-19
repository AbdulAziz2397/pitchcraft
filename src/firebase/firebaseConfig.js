// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE4JdRQC5L8Kv8FpQyt_EUzpj0Rlp_E60",
  authDomain: "pitchcraft-9d137.firebaseapp.com",
  projectId: "pitchcraft-9d137",
  storageBucket: "pitchcraft-9d137.firebasestorage.app",
  messagingSenderId: "1092520580189",
  appId: "1:1092520580189:web:c9cf8daafc18bf3e7929b4",
  measurementId: "G-L2CG5BVWRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);