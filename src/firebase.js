import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJb2FvPcUxbyg_71_Y3ohZlp95LgUd1_8",
  authDomain: "agrilog-e599b.firebaseapp.com",
  projectId: "agrilog-e599b",
  storageBucket: "agrilog-e599b.firebasestorage.app",
  messagingSenderId: "917391580741",
  appId: "1:917391580741:web:a2b44df0f1cbb9aac30d2c"
};

console.log("Firebase Config in Client:", {
  apiKey: firebaseConfig.apiKey,
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain
});

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider, firebaseConfig };
