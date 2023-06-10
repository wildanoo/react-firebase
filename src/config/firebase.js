import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyAp12JxrGSkOc6Hois7MooFP-BRBwY7LBY",
   authDomain: "fir-playground-5e305.firebaseapp.com",
   projectId: "fir-playground-5e305",
   storageBucket: "fir-playground-5e305.appspot.com",
   messagingSenderId: "882048878326",
   appId: "1:882048878326:web:1815b9efe90755ab81ced7",
   measurementId: "G-ZF8SV37C2T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
