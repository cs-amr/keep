import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore,collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCHOV6MJKfj9wf6iOgOLzrtwG28fEZt66A",
  authDomain: "keep-6c784.firebaseapp.com",
  projectId: "keep-6c784",
  storageBucket: "keep-6c784.appspot.com",
  messagingSenderId: "490305623122",
  appId: "1:490305623122:web:0f5c8fa90082c1c9a8fb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const db = getFirestore()
export const colRef = collection(db,"users")
