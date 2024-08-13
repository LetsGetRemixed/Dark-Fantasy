// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAId6OLyiIKImW1gJdebJ0kBJbER7AjuHs",
    authDomain: "darkworld082024.firebaseapp.com",
    projectId: "darkworld082024",
    storageBucket: "darkworld082024.appspot.com",
    messagingSenderId: "899707082170",
    appId: "1:899707082170:web:9a6079f182aebc591f7983",
    measurementId: "G-BS3ES35MPZ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
