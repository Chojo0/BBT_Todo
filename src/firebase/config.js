import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4DSrRoAzIXsm3OFNY-COjDiX0BqJX73U",
  authDomain: "bbt-todo.firebaseapp.com",
  projectId: "bbt-todo",
  storageBucket: "bbt-todo.appspot.com",
  messagingSenderId: "306894544710",
  appId: "1:306894544710:web:6b6b3afe1f6bbfd0624f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);