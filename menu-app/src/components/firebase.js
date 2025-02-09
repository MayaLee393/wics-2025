// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import firebaseConfig from './firebase-config.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdkjveTOd5gafKPNU0-LgEZ_2chVnyZF4",
  authDomain: "menu-app-2025.firebaseapp.com",
  projectId: "menu-app-2025",
  storageBucket: "menu-app-2025.firebasestorage.app",
  messagingSenderId: "60532848897",
  appId: "1:60532848897:web:ec2310fb96ac0f007c4300",
  measurementId: "G-8Y9LS1GC9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };