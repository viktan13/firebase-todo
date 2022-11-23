// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnVkZCzhkiOJAePmx2cZ0GiHXWrgy4YKw",
    authDomain: "todo-668a4.firebaseapp.com",
    projectId: "todo-668a4",
    storageBucket: "todo-668a4.appspot.com",
    messagingSenderId: "1026052870705",
    appId: "1:1026052870705:web:472da90567efb42f51fb10"
};

// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);

const db = getFirestore(connectFirebase);

export default db;