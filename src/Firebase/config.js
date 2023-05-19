// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHn-raIRtbcfo3_XESwsEZGiGELeS6Mfw",
  authDomain: "base-vivero.firebaseapp.com",
  projectId: "base-vivero",
  storageBucket: "base-vivero.appspot.com",
  messagingSenderId: "516161602671",
  appId: "1:516161602671:web:30ee453f32d34556e7399a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app