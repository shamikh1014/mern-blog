
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig={

    apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain:"mern-blog-a4358.firebaseapp.com",
    projectId:"mern-blog-a4358",
    storageBucket:"mern-blog-a4358.firebasestorage.app",
    messagingSenderId:"158576089667",
    appId:"1:158576089667:web:e0f58246909f1942e0d2f6"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


