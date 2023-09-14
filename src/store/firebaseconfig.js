import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Đúng chính tả: 'firestore' thay vì 'fireStore'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKce_DwQ3HzZfBHVhYW2M-G9-ypwLhSBs",
  authDomain: "education-db-51e47.firebaseapp.com",
  projectId: "education-db-51e47",
  storageBucket: "education-db-51e47.appspot.com",
  messagingSenderId: "647767281036",
  appId: "1:647767281036:web:7e91876a59498d9a61daa9",
  measurementId: "G-FJFLCNLX65",
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
